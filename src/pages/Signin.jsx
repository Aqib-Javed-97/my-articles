import { Fragment, useState }from "react"
import { Link } from "react-router-dom"
import Button from "../component/Button"
import InputText from "../component/InputText"
import signinService from "../services/signin"
import { setToken } from "../store/slices/user"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useAlert } from 'react-alert'
import { useEffect } from "react"
import { useForm } from "react-hook-form";


  
export default function Signin() {
    const [error,setError] = useState()
    const[load,setLoad]=useState(false)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const alert=useAlert()
    const {register, handleSubmit, watch, formState: { errors }}=useForm()


    useEffect(()=>{
        const msg = alert.show('WELCOME PLEASE LOGIN', {
            timeout: 2000, 
            type: 'success'
        })
    }, [])

    const onSubmit = async (data) => {
        setLoad(true)

        
        const response = await signinService(data)
        setLoad(false)
        if(response.data) {
            dispatch(setToken(response.data.token))
            navigate('/dashboard');
        }
        else if(response.error){
            setError(response.error.message)
        }
    }


    return <Fragment>
        <div className="Signin__wrapper">
            <h2 className="Signin__pageHeader">Sign in</h2>
            {load&&<h3>Loading...</h3>}
            <div className="Signin__form">
                {error && <div className="errorClass">{error}</div>}
                <InputText
                    label="Email"
                    helperText={<>{errors?.email?.message || ''}</>} 
                        error={Boolean(errors?.email)}
                        {...register("email", { 
                            required: 'This field is required', 
                            pattern: {value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message:'Please enter a valid email'}
                        })}
                />
                <InputText
                    label="Password"
                    type="password"
                    helperText={<>{errors?.password?.message || ''}</>} 
                    error={Boolean(errors?.password)}
                    {...register("password", {
                        required:'This field is required', 
                        minLength:{value:3, message:'Should be greater than 3 characters'},  
                        pattern: {value:/\d/, message:'Should contain atleast one number'}
                    })}
                />

                <Button secondary onClick={handleSubmit(onSubmit)}>Signin</Button>
                <div className="Signin__linkWrapper">
                    <Link to="/auth/signup" className="_Link">Signup</Link>
                </div>
            </div>
        </div>
    </Fragment>
}
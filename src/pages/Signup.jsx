import { useMemo } from "react"
import { Fragment,useState }from "react"
import { Link,useNavigate } from "react-router-dom"
import Button from "../component/Button"
import InputText from "../component/InputText"
import signupService from "../services/signup"
import { useForm } from "react-hook-form";

  
export default function Signup() {
    const navigate=useNavigate();
    const {register, handleSubmit, watch, formState: { errors }}=useForm()


    const onSubmit = async (data) => {
        const response = await signupService(data)
        console.log(response) // watch this carefully 
        if(response.data) {
            //dispatch(setToken(response.data.token))
            navigate('/auth/signin');
        }
        else if(response.error){
            console.log(response.error.message)
        }
    }



    return <Fragment>
        <div className="Signup__wrapper">
            <h2 className="Signup__pageHeader">Sign Up</h2>
            <div className="Signup__form">
                {/* {error && <div className="errorClass">{error}</div>} */}
                <InputText label="Name"
                        helperText={<>{errors?.name?.message || ''}</>} 
                        error={Boolean(errors?.name)}
                        {...register("name", {
                            required: 'This field is required',
                            maxLength: {value:20, message:'First name cannot exceed 20 characters'},
                            pattern: {value:/^[A-Za-z]+$/i, message:'Alphabetical characters only'}
                        })}
                />

                <InputText label="Email" 
                        helperText={<>{errors?.email?.message || ''}</>} 
                        error={Boolean(errors?.email)}
                        {...register("email", { 
                            required: 'This field is required', 
                            pattern: {value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message:'Please enter a valid email'}
                        })}
                />
                   
                <InputText label="Password" sx={{marginBottom:'48px'}}
                        helperText={<>{errors?.password?.message || ''}</>} 
                        error={Boolean(errors?.password)}
                        {...register("password", {
                            required:'This field is required', 
                            minLength:{value:3, message:'Should be greater than 3 characters'},  
                            pattern: {value:/\d/, message:'Should contain atleast one number'}
                        })}
                />

                    <Button secondary onClick={handleSubmit(onSubmit)} >Signup</Button>
                    <div className="Signup__linkWrapper">
                        <Link to="/auth/signin" className="_Link">Signin</Link>
                    </div>
            </div>
        </div>
    </Fragment>
}
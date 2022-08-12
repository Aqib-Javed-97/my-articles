import { Fragment,useState }from "react";
import { useSelector,useDispatch } from "react-redux";
import { setToken } from "../store/slices/user";
import Button from "../component/Button";
import { useNavigate} from 'react-router-dom';
import articlesService from "../services/articlesDashboard";
import { useEffect } from "react";
import ArticleCard from "../component/ArticleCard";
import user from "../pictures/user.jpeg";


  
export default function Dashboard() {

    const [page,setPage]=useState(1)
    const[data,setData]=useState([])
    const[total,setTotal]=useState(1)
    const token=useSelector((_state) => _state.user.token)


    useEffect(()=>{
        (async function(){
            const response = await articlesService(page,{Authorization:token})
            //console.log(response)
            // console.log(response.page)
            //setPage(response.page)
            // console.log(page)
            setData(response.data)
            setTotal(response.total)
        })()   
    },[page]);
    

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch(setToken(''));
        navigate('/auth/signin');
    }

    const handlePrev=()=>{
        setPage(page-1)
    }

    const handleNext=()=>{
        setPage(page+1)
    }

    const viewDeatils=(id)=>{
       navigate(`/dashboard/article/${id}`);    
    }

    return <Fragment>
        Dashboard
        <div><img src={user}/>Username</div>
        <Button primary onClick={handleLogout}>Logout</Button>
        <div>
            {data.map((article)=>{
               return <ArticleCard key={article.id} heading={article.id} updated={article.date} onView={viewDeatils}/>
            })}
        </div>
        <Button primary disabled={page===1} onClick={handlePrev}>Prev</Button>
        <Button primary disabled={page===total/5} onClick={handleNext}>Next</Button> 
    </Fragment>
}
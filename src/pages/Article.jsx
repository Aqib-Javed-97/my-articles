import { Fragment, useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//import articleView from "../services/articleView";
import {getArticles} from "../store/slices/articleSlice";
import Button from '@mui/material/Button';

export default function Article() {

  const { id } = useParams();
  const token = useSelector((_state)=>_state.user.token)
  //const [content,setContent]=useState('')
  const data=useSelector((_state)=>_state.article.data)
  const dispatch=useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // (async function() {
    //   let content = await articleView(id, { Authorization: token });
    //   //setContent(content.data.content);

    //   //try using redux........................
    // })()
    console.log('-----------', id)
    dispatch(getArticles(id, token));
    
  }, [id]);

  useEffect(()=>{
    console.log('----effect', data)
  }, [data])

  return <Fragment >
    Article
    <Button variant='outlined' sx={{'&:hover': {
      color:'#fff',
      borderColor: '#005F99',
      backgroundColor: '#005F99',
  }}} onClick={() => navigate('/dashboard')}>Back</Button>
    {/* <div onClick={() => navigate('/dashboard')}>Back</div> */}
    <div
      dangerouslySetInnerHTML={{__html: data?.content}}
    />
    </Fragment>
}
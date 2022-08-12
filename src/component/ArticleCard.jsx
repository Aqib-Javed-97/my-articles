import { Fragment }from "react"
import Button from "./Button"
  
export default function ArticleCard({heading,updated,onView}) {

    return <Fragment>
        ArticleCard
        <div className="articleCard">
            <div style={{display:'flex',
                flexDirection:'column',
                gap:'10px'}}>
                <h3>{heading}</h3>
                <p>{updated}</p>
            </div>
            <div>
                <Button secondary onClick={()=>{onView(heading)}}>View</Button>
            </div>
        </div>
    </Fragment>
}
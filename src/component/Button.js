import { Fragment }from "react"
//import { Button } from "@mui/material"
  
export default function Button({primary, secondary,children, ...rest}) {  
    return <Fragment>
        <button
            className={`Button ${primary ? 'Button--primary':''} ${secondary ? 'Button--secondary':''} ${rest.className || ''}`}
            {...rest}
        >{children}</button>
        {/* <Button {...rest}>{children}</Button> */}
    </Fragment>
}
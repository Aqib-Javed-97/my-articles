import { Fragment }from "react"
import {Outlet} from 'react-router-dom'
  
export default function AuthLayout() {

    return <Fragment>
        <div className="AuthLayout__page">
            <div className="AuthLayout__wrapper">
                <Outlet />
            </div>
        </div>
    </Fragment>
}
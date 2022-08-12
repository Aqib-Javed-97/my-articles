import { Fragment }from "react";
import {Outlet} from 'react-router-dom';
import Button from "./Button";

  
export default function DashboardLayout({heading,updated}) {



    return <Fragment>
        DashboardLayout
        <Outlet />
    </Fragment>
}
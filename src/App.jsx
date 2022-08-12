import { Fragment }from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import DashboardLayout from "./component/DashboardLayout";
import AuthLayout from "./component/AuthLayout";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";
import Signup from "./pages/Signup";
import { useSelector, useDispatch } from "react-redux";
import { transitions, positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { useAlert } from 'react-alert'
//import { setToken } from "./store/slices/user";
const options = {
        position: positions.TOP_CENTER,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE
    }
export default function App() {
    const token=useSelector((_state) => _state.user.token);
    //  console.log(token)
    //const token = false // token come from redux using useSelector
    //const dispatch=useDispatch();
    //  const token=dispatch(setToken);

    const a = () => <h1>Welcome..</h1>
    return <Fragment>
        <Provider template={a} {...options}>
            <BrowserRouter basename="/my-articles">
                <Routes>
                    {
                        token
                        ?
                        <Route path="/dashboard" element={<DashboardLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="article/:id" element={<Article />} />
                        </Route>
                        :
                        <Route path="/auth" element={<AuthLayout />}>
                            <Route path="signin" element={<Signin />} />
                            <Route path="signup" element={<Signup />} />
                        </Route>
                    }
                    <Route path="*" element={<div><h4>Page not found</h4>
                    <Link to='/auth/signin'>Signin</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    </div>} />
                </Routes>
            </BrowserRouter>
            </Provider>
    </Fragment>
}


/**
 * Browser:
 *  http request to url entered in url bar (which is a get request)
 *  your server has files like index.html, about.html, etc...
 * 
 *  url: https://www.domain.com or https://www.domain.com/index.html (index.html file gets served)
 *      on response browser will render the content in dom
 *  url: https://www.domain.com/about.html (about.html file gets served)
 *      
 *      in case not file is found you can serve a default one
 * 
 *  React is a single page app i.e only index.html exists
 *          all other routes exists in your js file i.e bundle.js
 * 
 *  in case of react we configure our server in a way that on any request only index.html will get served
 * 
 *  that index.html contains link of files i.e css, js etc...
 * 
 *  when browser receives this file it will start fetching all the linked files
 *  i.e css or js(bundle) 
 * 
 *  when your bundle js gets loaded browser runs it
 * 
 */
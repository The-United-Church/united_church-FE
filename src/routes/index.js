import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Login, Signup } from '../features'
import Home from '../pages/home/Home'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "signup",
                element : <Signup/>
            },
        ]
    }
])


export default router
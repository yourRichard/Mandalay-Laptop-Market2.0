import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';
import AllUsers from '../pages/AllUsers';
import AllProducts from '../pages/AllProducts';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "sign-up",
                element: <Signup/>
            },
            {
                path: "admin-panel",
                element: <AdminPanel/>,
                children:[
                    {
                        path: "all-users",
                        element: <AllUsers/>
                    },
                    {
                        path: "products",
                        element: <AllProducts/>
                    }
                ]
            }
        ]
    }
]);

export default router;
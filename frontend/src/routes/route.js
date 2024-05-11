import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AdminPanel from '../pages/AdminPanel';

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
                element: <AdminPanel/>
            }
        ]
    }
]);

export default router;
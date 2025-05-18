import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About";
import PrivateRouter from "../Private/PrivateRoute";
import Dasshboard from "../Layout/Dasshboard";
import Admin from "../Dashboard/Admin";
import Login from "../Log/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            }
        ])
    },
    {
        path: "/dashboard",
        element:
        <PrivateRouter>
            <Dasshboard />
        </PrivateRouter>,
        children: [
            {
                path: "/dashboard",
                element: <Admin />
            }
        ]
    }
    
])

export default router;
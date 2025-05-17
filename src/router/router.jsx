import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About";

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
            }
        ])
    }
])

export default router;
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Login from "../Log/Login";
import Dashboard from "../Layout/Dashboard";
import Admin from "../Dashboard/Admin";
import PrivateRouter from "../Private/PrivateRoute";
import ErrorrAdmin from "../Dashboard/ErrorrAdmin";
import ShowService from "../Pages/ShowService/ShowService";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServiceOrder from "../Dashboard/ServiceOrder";
import ApproveCustomer from "../Dashboard/ApproveCustomer";
import CleanningAll from "../Dashboard/CleanningAll";
import TotalEarning from "../Dashboard/TotalEarning";
import Settings from "../Dashboard/Settings";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
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
                path: "service_Details",
                element: <ServiceDetails />
              },
              {
                path: "/showService",
                element: <ShowService />
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
        errorElement: <ErrorrAdmin />,
        element:
        <PrivateRouter>
            <Dashboard />
        </PrivateRouter>,
        children: [
            {
                path: "dashboard",
                element: <Admin />
            },
            {
                path: "service_order",
                element: <ServiceOrder />
            },
            {
                path: "cleaning_all",
                element: <CleanningAll />
            },
            {
                path: "approve_customer",
                element: <ApproveCustomer />
            },
            {
                path: "total_earning",
                element: <TotalEarning />
            },
            {
                path: "settings",
                element: <Settings />
            }
        ]
    }
])

export default router;
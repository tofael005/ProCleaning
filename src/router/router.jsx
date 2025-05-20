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
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorrAdmin />,
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Admin />,
      },
    ],
  },
]);

export default router;


import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Auth/Home/Home";
import AllVehicle from "../Pages/Auth/AllVehicle/AllVehicle";
import AddVehicle from "../Pages/Auth/AddVehicle/AddVehicle";
import MyVehicle from "../Pages/Auth/MyVehicle/MyVehicle";
import MyBookings from "../Pages/Auth/MyBookings/MyBookings";
import ViewDetails from "../Pages/Auth/ViewDetails/ViewDetails";
import UpdateVehicle from "../Pages/Auth/UpdateVehicle/UpdateVehicle";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
               path: "/",
               element: <Home/>,
               loader: () => fetch('http://localhost:3000/latest-smarts')
            },
            {
               path: "/all-vehicles",
               element: <AllVehicle/>,
               loader: () => fetch('http://localhost:3000/smarts')
            },
            {
               path: "/add-vehicles",
               element: <AddVehicle/>
            },
            {
               path: "/my-vehicles",
               element: <MyVehicle/>
            },
            {
               path: "/my-bookings",
               element: <MyBookings/>
            },
            {
               path: "/update-vehicles/:id",
               element: <UpdateVehicle/>,
                loader: ({params}) => fetch(`http://localhost:3000/smarts/${params.id}`)
            },
            {
               path: "/view-details/:id",
               element: (
                <PrivateRoute>
                  <ViewDetails/>
                </PrivateRoute>
               ),
               loader: ({params}) => fetch(`http://localhost:3000/smarts/${params.id}`)
            },
            {
               path: "/my-bookings",
               element: (
                <PrivateRoute>
                  <MyBookings/>
                </PrivateRoute>
               ),
            },
            {
               path: "/auth/login",
               element: <Login/>
            },
            {
               path: "/auth/register",
               element: <Register/>
            },
        ]
    }
])
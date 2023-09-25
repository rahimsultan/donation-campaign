import {
    createBrowserRouter
} from "react-router-dom";

import Mainlayout from "../layout/Mainlayout";
import Details from "../pages/details/Details";
import Donation from "../pages/donation/Donation";
import { Error } from "../pages/error/Error";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=>fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation/>,
                loader: ()=>fetch('/data.json')
            },
            {
                path:'/statistics',
                element: <Statistics/>,
                loader: ()=>fetch('/data.json')
            },
            {
                path:'/:category/:id',
                element: <Details/>,
                loader: ()=>fetch('/data.json')
            }
        ]
    }
])

export default Router
import {
    createBrowserRouter
} from "react-router-dom";

import Mainlayout from "../layout/Mainlayout";
import Donation from "../pages/donation/Donation";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path:'/statistics',
                element: <Statistics/>
            }
        ]
    }
])

export default Router
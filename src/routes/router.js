import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../component/Body";
import About from "../component/About";
import Contact from "../component/Contact";
import Cart from "../component/Cart";
import Instamart from "../component/Instamart";
import Logout from "../component/Logout";
import Login from "../component/Login";
import RestaurantMenu from "../component/RestaurantMenu";
export const router=createBrowserRouter([
    {path:'/',
        element:<App/>,
        children:[
            {path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },{
                path:'/login',
                element:<Login/>
            },{
                path:'/logout',
                element:<Logout/>
            },
            {
                path:'/instamart',
                element:<Instamart/>
            },
            {
                path:'/restaurantCard/:resId',
                element:<RestaurantMenu/>
            }
        ]
    }
])
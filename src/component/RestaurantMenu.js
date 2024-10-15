import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { RESTAURANT_MENU_URL } from "../constant/Constant";
import { useEffect } from "react";
import { IMG_CDN_URL } from "../constant/Constant";
import SimmerUi from "./SimmerUi";
const RestaurantMenu=()=>{
     let {resId}=useParams();
     
     const restaurant=useRestaurant(resId);
     
     if(restaurant?.length==0){
        return <SimmerUi/>
     }
   
    return <>
          
        <div className="border-4 border-s-8 m-8 ">
             <tr className="font-black text-xl"><td>{restaurant[0]?.name}</td></tr> 
           <tr>
            <td>⭐ {restaurant[0]?.avgRating}</td>
            <td className="text-base font-normal">({(restaurant[0]?.totalRatingsString)})</td>
            <td>{restaurant[0]?.costForTwoMessage}</td>
           </tr>                                         
           <tr><td>{restaurant[0]?.cuisines[0]}</td>
           <td>{restaurant[0]?.cuisines[1]}</td></tr>
           <tr><td>Outlet {restaurant[0]?.locality}</td>
           <td>{restaurant[0]?.isOpen===true?<span>🟢</span>:<span>🔴</span>}</td>
           <td>{restaurant[0]?.sla.deliveryTime}- {restaurant[0]?.sla.deliveryTime} min</td></tr>
        </div>
        <div className="text-center ">
            <span className="font-black text-xl">menu</span>
          
               
                {restaurant[1]?.map((val,ind)=>{
                return <>
                    <table className="w-full ">
                    <tr className=" flow-root border-8 h-[200px] ">
                    <td className="text-left float-left w-[600px]">
                     <span className="text-lg font-bold">{val.card.info.name}</span> <br></br>
                     <span className="text-lg font-semibold">{val.card.info.price} $ </span>
                     <span>available {val.card.info.inStock}</span><br></br>
                     <span>{val.card.info.description}</span>
                    </td>
                    <td className="float-right flex flex-col">
                     <img src={IMG_CDN_URL+val.card.info.imageId} className="h-[140px] w-[200px]"/>
                     <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
                    </td>
                    </tr>
                    </table>
                </>
            })}
            
            

        </div>
    </>
}

export default RestaurantMenu;
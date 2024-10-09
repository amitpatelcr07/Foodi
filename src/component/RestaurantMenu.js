import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { RESTAURANT_MENU_URL } from "../constant/Constant";
import { useEffect } from "react";
import { IMG_CDN_URL } from "../constant/Constant";
const RestaurantMenu=()=>{
     let {resId}=useParams();
     console.log(resId); 
     const restaurant=useRestaurant(resId);
     console.log(restaurant)

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
                    <tr className=" flow-root border-8 h-[200px]">
                    <td className="text-left float-left">
                     {val.card.info.name}
                    </td>
                    <td className="float-right flex flex-col">
                     <img src={IMG_CDN_URL+val.card.info.imageId} className="h-[100px] w-[100px]"/>
                     <button>Add </button>
                    </td>
                    </tr>
                    </table>
                </>
            })}
            
            

        </div>
    </>
}

export default RestaurantMenu;
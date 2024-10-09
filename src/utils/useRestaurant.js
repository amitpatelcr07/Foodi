import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../constant/Constant";
import { json } from "react-router-dom";

const useRestaurant=(resId)=>{
    
        const [restaurantDetails,setRestaurantDetails]=useState([]);
        useEffect(()=>{
            getRestaurantDetails();
        },[])


        async function getRestaurantDetails(){
              const response=await fetch(RESTAURANT_MENU_URL+resId);

           
             const jon=await response.json();
             
             let menu=jon.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
             setRestaurantDetails([jon.data.cards[2].card.card.info,menu]);
             
        }
        
    return restaurantDetails;
}

export default useRestaurant;
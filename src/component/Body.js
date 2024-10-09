import { useState,useEffect } from "react";
import { SWIGGY_API_URL } from "../constant/Constant";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
const Body=()=>{
  const[restaurants,setRestaurants]=useState();
  const [filterRestaurant,setFilterRestaurant]=useState();
  const [serchTxt,setSerachTxt]=useState()
  useEffect(()=>{
    getRestaurant();
  },[])

  //    get api data from here
  async  function getRestaurant(){
      const response=await fetch(SWIGGY_API_URL)
     
      const data=await response.json();
      let resto=(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurants(resto)
      setFilterRestaurant(resto)
  }

   //  setting serach input value 

   function setSerachValue(e){
    setSerachTxt(e.target.value);
   }


   // getting serach input value for search   

   function getSearchValue(e){
    
       console.log(serchTxt);
           let filterResto=filterRestaurant.filter((val,ind)=>{
            if(val?.info?.name?.toLowerCase()?.includes(serchTxt.toLowerCase())){
              return val;
            }
           })

           setFilterRestaurant(filterResto);
           
       setSerachTxt('')

   }
    return <>
     <input className="border-2 my-4 mx-[50px]" onChange={setSerachValue} value={serchTxt}></input> <button className="text-green-800 font-bold" onClick={getSearchValue}>Search</button>
      <div className="flex flex-wrap m-4 p-4">
      {filterRestaurant?.map((val,ind)=>{
       
        return <Link to={`/restaurantCard/${val.info.id}`}><RestaurantCard restaurant={val?.info} /></Link>
      })}
      </div>
    </>
}

export default Body;
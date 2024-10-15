import { IMG_CDN_URL } from "../constant/Constant";
const RestaurantCard=(props)=>{
    
    let {sla,areaName,name,avgRating,cloudinaryImageId,costForTwo,id,open,locality}=props.restaurant;


    return <>
          <div className="h-[350px] w-[250px] border-solid border-2  m-4 border-r-lime-50">
            <img className='h-[200px] w-[250px]'src={IMG_CDN_URL+cloudinaryImageId}/>
            <table>
               <tr className="font-bold  w-[20px]">
                 <td >{name.split(' ',2).join(' ')}</td>
                {/* <td>{locality}</td> */}
               </tr>
               <tr>
               <td > ⭐ {avgRating}</td>
                <td className="text-lime-700">{sla.deliveryTime}-{sla.deliveryTime+5} mins</td>
                
               </tr>
               <tr>
                <td>{areaName}</td>
               </tr>
            </table>
            
          </div>     
    </>
}

export default RestaurantCard;
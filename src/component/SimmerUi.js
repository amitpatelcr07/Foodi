import { useState } from "react";


const SimmerUi=()=>{
    let myArray = new Array(20).fill(0);
  
    return <>
     <div className="flex flex-wrap">
     {myArray?.map(()=>{
        return <div className="h-[350px] w-[250px] border-solid border-2  m-4 border-r-lime-70 ">
           
            <table>
               <tr className="h-[150px]   w-[200px] border-r-lime-70 border-white p-2">
                 <td className="h-[150px]   w-[200px] border-r-lime-70 border-white p-2" ></td>
                {/* <td>{locality}</td> */}
               </tr>
               <tr>
               <td > </td>
                <td className="text-lime-700"></td>
                
               </tr>
               <tr>
                <td></td>
               </tr>
            </table>
            
          </div>     
      })}
     </div>
    </>
}

export default SimmerUi;
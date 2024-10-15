import { toBeRequired } from "@testing-library/jest-dom/matchers";
import { useState } from "react";

const Cart = () => {
  const [inpTxt, setInpTxt] = useState("");
  const [btnShow, setBtnShow] = useState(true);
  const [allTask, setAllTask] = useState([]);
  const [clickId,setClickId]=useState();
  const [editEnable,setEdit]=useState(false);
  //  getting input  & setting also
  function getInputHandler(e) {
    setInpTxt(e.target.value);
  }

  // adding or updating task

  function addUpHandler(task, id) {
    if(inpTxt==''){
      alert('Please Enter the value first')
      return null;
    }
   
    if(editEnable==true && task=='updt'){
            let editArry=allTask.map((val)=>{
                if(val.id==clickId){
                    console.log(inpTxt);
                    return { id: `${clickId}`, taskName: `${inpTxt}` }
                }else{
                    return val
                }
            })
           setAllTask(editArry);
           setEdit(false); 
           setInpTxt('')
           setBtnShow(true)
    }else{
      
    const uid = Date.now() + Math.random().toString(36).substr(2, 9);
    setAllTask([...allTask, { id: `${uid}`, taskName: `${inpTxt}` }]);
    setInpTxt("");
    setEdit(false);
    }
  }

  //   Edit and Delete handler

  function editDelHandler(e,id) {
    setClickId(id);
    if(e=='del'){
        let newArr=allTask.filter((val)=>{
            if(val.id!=id){
                return val;
            }
        })

        setAllTask(newArr);
    }
    if(e=='edit'){
        setBtnShow(false);
        setEdit(true)
        let newElement=allTask.filter((val)=>{
            if(val.id==id){
                return val;
            }
        })
        setInpTxt(newElement[0].taskName)
    }
  }

  return (
    <>
      <div className="text-center my-8 border border-green-500">
        <span className="text-2xl font-bold my-2">
          Todo For Learning Purpuse
        </span>
        <div className="my-8 border border-green-300">
          <input
            className="border-slate-400 border border-black-500 my-3 px-3"
            onChange={getInputHandler}
            value={inpTxt}
          ></input>
          {btnShow == true ? (
            <button
              className="mx-3 text-white bg-green-700 rounded-lg"
              onClick={() => {
                addUpHandler("add");
              }}
            >
              Add
            </button>
          ) : (
            <button className="text-white bg-red-700 rounded-lg" onClick={()=>{addUpHandler('updt')}}>Update</button>
          )}
        </div>
        <div>
          <table className="w-full">
            {allTask?.map((val, ind) => {
              return (
                <>
                  <tr className="border border-red-300 flex justify-between ">
                    <td>{val.taskName}</td>
                    <td className="px-7 mx-7">
                      <button
                        className="mx-4 px-4"
                        onClick={() => editDelHandler("edit", val.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          editDelHandler("del", val.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;

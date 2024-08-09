import React from "react";
import AdminHeader from "./AdminHeader";

const Update = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex bg-red w-screen h-[583px] bg-blue-950 ">
        <div className=" flex flex-col mt-10  w-1/2 h-[90%]  place-content-center items-center m-auto  text-white bg-white rounded-lg">
          <div className="text-slate-950  md:p-0  flex  h-10  content-start ">
            <h2 className="font-extrabold underline text-sm md:text-xl ">
              Update
            </h2>
          </div>

          <div className=" flex flex-col bg-slate-950 w-[90%] h-52 justify-between p-5 rounded-lg m-10">
            <div>
              <input className="hover:cursor-pointer" type="radio" name="update"/> <label htmlFor="">Received</label>
            </div>
            <div>
              
              <input className="hover:cursor-pointer" type="radio" name="update"/> <label htmlFor="">Ready for shiping</label>
            </div>
            <div>
              
              <input className="hover:cursor-pointer" type="radio" name="update"/> <label htmlFor="">Out of delivery</label>
            </div>
          </div>
          <div>
            <button className="flex bg-slate-950 w-32  h-12 hover:bg-slate-900 place-content-center items-center  rounded-lg m-10">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

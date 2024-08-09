import React from "react";
import AdminHeader from "./AdminHeader";
import "./admin.css";

const UserManagement = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex bg-red w-screen h-[583px] bg-blue-950 ">
        <div className=" flex flex-col mt-10  w-1/2 h-[90%]  place-content-center items-center m-auto  text-white bg-white rounded-lg">
          <div className="text-slate-950  md:p-0  flex  h-10  content-start ">
            <h2 className="font-extrabold underline text-sm md:text-xl ">
              User Management
            </h2>
          </div>

          <div className=" flex bg-slate-950 w-[90%] justify-between p-5 rounded-lg m-10">
            
            <span>Membership</span>
            <div className="flex flex-col">
              <button className="bg-slate-50 text-slate-950 p-1 rounded-lg w-16 m-2 font-semibold text-sm hover:bg-slate-300 ">
                Add
              </button>
              <button className="bg-slate-50 text-slate-950 p-1 rounded-lg w-16 m-2 font-semibold text-sm hover:bg-slate-300 ">
                Update
              </button>
            </div>
          </div>
          <div className=" flex bg-slate-950 w-[90%] justify-between p-5 rounded-lg">
            <span>Vendor Management</span>
            <div className="flex flex-col">
              <button className="bg-slate-50 text-slate-950 p-1 rounded-lg w-16 m-2 font-semibold text-sm hover:bg-slate-300 ">
                Add
              </button>
              <button className="bg-slate-50 text-slate-950 p-1 rounded-lg w-16 m-2 font-semibold text-sm hover:bg-slate-300 ">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

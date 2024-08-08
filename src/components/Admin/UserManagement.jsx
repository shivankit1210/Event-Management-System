import React from "react";
import AdminHeader from "./AdminHeader";
import "./admin.css";

const UserManagement = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex w-screen h-screen m-auto">
        
        <div className=" flex flex-col  w-1/2 h-1/2 place-content-center items-center text-white bg-slate-950">
          <div className=" flex  content-between">
            <button>Membership</button>
            <div className="flex flex-col">
              <button>Add</button>
              <button>Update</button>
            </div>
          </div>
          <div className=" flex content-between">
            <button>Vendor Management</button>
            <div className="flex flex-col">
              <button>Add</button>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

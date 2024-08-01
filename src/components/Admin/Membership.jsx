import React from "react";
import AdminHeader from "./AdminHeader";

const Membership = () => {
  return (
    <div >
      <AdminHeader />
      <div className="main">
      <div className="membershipContainer">
        <div className="updateItem">
          <input type="radio" name="update" id="" /> Received
        </div>
        <div className="updateItem">
          <input type="radio" name="update" id="" /> Ready for Sipping
        </div>
        <div className="updateItem">
          <input type="radio" name="update" id="" />
          Out of Delivery
        </div>
        <button>Update</button>

      </div>
      </div>
      
    </div>
  );
};

export default Membership;

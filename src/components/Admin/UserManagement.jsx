import React from "react";
import AdminHeader from "./AdminHeader";
import "./admin.css";

const UserManagement = () => {
  return (
    <div>
      <div>
        <AdminHeader />
        <div className="maintainMain">
          <div className="topmanagement">
            <button>Membership</button>
            <div className="maintainbtntop">
              <button>Add</button>
              <button>Update</button>
            </div>
          </div>
          <div className="bottommanagement">
            <button>Vendor Management</button>
            <div className="maintainbtntop">
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

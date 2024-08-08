import React from "react";
import "./vendor.css";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  const navigate= useNavigate()
  return (
    <div>
      <h1>Welcome Vendor</h1>
      <div className="container">
        <button>Your Item</button>
        <button>Add Item</button>
        <button>Transaction</button>
        <button>Logout</button>
        <button onClick={()=> navigate("/vendor/vendor-page")}>Vendor page</button>
      </div>
    </div>
  );
};

export default Vendor;

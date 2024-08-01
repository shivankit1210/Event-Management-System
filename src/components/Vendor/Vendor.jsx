import React from "react";
import VendorHeader from "./VendorHeader";
import "./vendor.css"

const Vendor = () => {
  return (
    <div>
      <VendorHeader />
      <div className="main">
        <div className="top">
          <span>Vendor </span>
          <span>Florist</span>
        </div>
        <div className="bottom">
          <div className="VendorDetails">
            <span>Rahul</span>
            <span>1234567890</span>
            <button>Shop Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;

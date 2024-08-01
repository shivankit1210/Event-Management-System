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
            <span>Rahul</span> <br />
            <span>9834567890</span>
            <button>Shop Item</button>
          </div>
          <div className="VendorDetails">
            <span>Suresh</span> <br />
            <span>1234564590</span>
            <button>Shop Item</button>
          </div>
          <div className="VendorDetails">
            <span>Dipesh</span> <br />
            <span>1229567890</span>
            <button>Shop Item</button>
          </div>
          <div className="VendorDetails">
            <span>Mayank</span> <br />
            <span>9874567890</span>
            <button>Shop Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;

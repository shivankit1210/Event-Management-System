import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col place-content-center items-center">
        <div className="flex w-[95vw] justify-around m-4 ">
          <button
            onClick={() => navigate("/user")}
            className="bg-slate-950 rounded-lg w-32 h-12 text-white hover:bg-slate-900"
          >
            Home
          </button>
          <button className="bg-slate-950 rounded-lg w-32 h-12 text-white hover:bg-slate-900">
            View Product
          </button>
          <button className="bg-slate-950 rounded-lg w-32 h-12 text-white hover:bg-slate-900">
            Request Item
          </button>
          <button className="bg-slate-950 rounded-lg w-32 h-12 text-white hover:bg-slate-900">
            Product status
          </button>
          <button className="bg-slate-950 rounded-lg w-32 h-12 text-white hover:bg-slate-900">
            Log out
          </button>
        </div>
        <div className="bg-slate-950 text-white w-[50vw] h-12 mt-5 rounded-sm flex place-content-center items-center">
          <h1>Shopping Cart</h1>
        </div>

        <div className="flex w-[95vw] justify-around mt-10 ">
          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Image
            </span>
          </div>

          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Name
            </span>
          </div>

          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Price
            </span>
          </div>

          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Quantity
            </span>
          </div>

          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Total Price
            </span>
          </div>

          <div>
            <span className="bg-blue-950 flex place-content-center items-center  rounded-lg w-32 h-12 text-white ">
              Action
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;

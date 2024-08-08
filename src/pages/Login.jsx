import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "vendor") {
      navigate("/vendor");
    } else if (role === "user") {
      navigate("/user");
    }
  };

  return (
    <div className="bg-slate-950 text-slate-400 flex flex-col  items-center  h-screen">
      <div className="mb-0 md:mb-24 bg-black w-screen  underline  md:h-20 flex place-content-center items-center">
        <h2 className=" font-extrabold">Login Page</h2>
      </div>
      <div className="flex flex-col md:flex-row h-screen md:h-72  w-screen justify-around bg-white rounded-lg items-center p-5 gap-4">
        <div className="  w-56 h-52 bg-slate-950 flex flex-col  items-center rounded-3xl">
          <div className="flex flex-col items-center  m-auto">
          <span className="text-6xl p-3 ">&#9814;</span>
          <button
            className=" bg-slate-400 text-black rounded-lg p-1"
            onClick={() => handleLogin("admin")}
          >
            Admin Login
          </button>
          </div>
        </div>

        <div className="  w-56 h-52  bg-slate-950 flex flex-col  items-center rounded-3xl">
          <div className="flex flex-col items-center content-between m-auto">
          <span className="text-6xl p-3">&#9739;</span>
          <button
            className=" bg-slate-400 text-black rounded-lg p-1"
            onClick={() => handleLogin("vendor")}
          >
            Vendor Login
          </button>
          </div>
          
        </div>
        <div className="  w-56 h-52 bg-slate-950 flex flex-col  items-center rounded-3xl">
          <div className="flex flex-col items-center  m-auto">
          <span className="text-6xl p-3"> &#9787;</span>
          <button
            className="bg-slate-400 text-black rounded-lg p-1"
            onClick={() => handleLogin("user")}
          >
            User Login
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

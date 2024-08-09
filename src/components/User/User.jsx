import React from 'react';
import { useNavigate } from 'react-router-dom';





const User = () => {
  const navigate =useNavigate();
  return (
    <div>
      <div className='flex  flex-col  content-around gap-32 items-center h-screen'>
      <div className='flex justify-between items-center m-8  '>
      <span className='bg-slate-950 rounded-lg w-[95vw]  h-10 text-white flex place-content-center items-center'>Welcome User</span>
      </div>

      <div className='flex w-[95vw] justify-around  '>
      <select className='bg-slate-950 rounded-lg w-36 h-16 pr-2 pl-2 hover:cursor-pointer text-white hover:bg-slate-900;' name="vendor" id="">
        <option value="florist">florist</option>
        <option value="Catering" selected>Catering</option>
        <option value="Decoraton">Decoraton</option>
        <option value="Lightning">Lightning</option>
        <option value="Sound manager">Sound manager</option>
      </select>

        <button onClick={()=>navigate("/user/cart")} className='bg-slate-950 rounded-lg w-32 h-16 text-white hover:bg-slate-900'>cart</button>
        <button className='bg-slate-950 rounded-lg w-32 h-16 text-white hover:bg-slate-900'>Guest List</button>
        <button className='bg-slate-950 rounded-lg w-32 h-16 text-white hover:bg-slate-900'>Order List</button>
      </div>

      <div className=''>
        <button className='bg-slate-950 rounded-lg w-32 h-16 text-white hover:bg-slate-900'>Log Out</button>
      </div>
      
      </div>
    
    </div>
  );
};

export default User;

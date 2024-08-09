import React from 'react';
import "./admin.css"
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';


const Admin = () => {
  const navigate=useNavigate()
  return (
    <div>
          <AdminHeader/>

      <div className='flex flex-col h-screen bg-blue-950'>
      <div className="flex flex-col bg-white mt-10 rounded-lg w-1/2 md:h-96 m-auto">
      <div className='text-slate-950 p-10 md:p-14 flex content-around items-center place-content-center h-1/4'><h2 className='font-extrabold underline text-sm md:text-xl'>Admin Dashboard</h2></div>
      <div className='flex content-around md:flex-row flex-col justify-around items-center text-slate-950  h-72 m-8 md:m-14 rounded-lg'>
      <button className='border-2 border-slate-950 text-sm font-semibold  rounded-lg w-32 h-24 md:w-48 md:h-32 hover:text-white hover:bg-slate-950 ' onClick={()=>navigate('/admin/user-management')}>Manage User</button>
      <button className='border-2 border-slate-950 text-sm font-semibold rounded-lg w-32 h-24 md:w-48 md:h-32 hover:text-white hover:bg-slate-950 ' onClick={()=>navigate('/admin/vendor-management')}> Manage Vendor</button>
      </div>
      </div>
      
      
    </div>
    </div>
  );
};

export default Admin;

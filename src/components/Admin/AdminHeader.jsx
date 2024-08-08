import React from 'react'
import { useNavigate } from 'react-router-dom';


const AdminHeader = () => {
  const navigate=useNavigate()
  return (
    <div className=''>
      
      <div className="flex justify-between items-center pl-6 pr-6  h-10 text-white ">
      <button className='bg-slate-950 rounded-lg p-1 w-20' onClick={()=>navigate('/admin')}>Home</button>
      <button className='bg-slate-950 rounded-lg p-1 w-20'>Logout</button>
      </div>
      
       
      </div>
  )
}

export default AdminHeader
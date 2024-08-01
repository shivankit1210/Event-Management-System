import React from 'react'
import { useNavigate } from 'react-router-dom';


const AdminHeader = () => {
  const navigate=useNavigate()
  return (
    <div className='admin-top'>
      
      <button onClick={()=>navigate('/admin')}>Home</button>
      <button>Logout</button>
      
       
      </div>
  )
}

export default AdminHeader
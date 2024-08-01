import React from 'react'
import { useNavigate } from 'react-router-dom';


const VendorHeader = () => {
  const navigate=useNavigate()
  return (
    <div className='Vendor-top'>
      
      <button onClick={()=>navigate('/vendor')}>Home</button>
      <button>Logout</button>
      
       
      </div>
  )
}

export default VendorHeader
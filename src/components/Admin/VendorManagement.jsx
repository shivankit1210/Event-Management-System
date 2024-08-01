import React from 'react'
import AdminHeader from './AdminHeader'
import { useNavigate } from 'react-router-dom'

const VendorManagement = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AdminHeader/>
      <div className="maintainMain">
          <div className="topmanagement">
            <button>Membership</button>
            <div className="maintainbtntop">
              <button>Add</button>
              <button onClick={()=>navigate("/admin/vendor-management/add-membership")}>Update</button>
            </div>
          </div>
          <div className="bottommanagement">
            <button>Vendor Management</button>
            <div className="maintainbtntop">
              <button>Add</button>
              <button>Update</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VendorManagement
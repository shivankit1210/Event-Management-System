import React from 'react';
import "./admin.css"
import { useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';


const Admin = () => {
  const navigate=useNavigate()
  return (
    <div>
      <AdminHeader/>
      <h2>Admin Dashboard</h2>
      <div className='admin-board'>
      {/* <button onClick={()=>navigate('/admin/add-update-memberships')}>Update Memberships</button> */}
      <button onClick={()=>navigate('/admin/user-management')}>Manage User</button>
      <button onClick={()=>navigate('/admin/vendor-management')}> Manage Vendor</button>
      </div>
      
     
    
      {/* <Routes>
        <Route path="/add-update-memberships" element={<AddUpdateMemberships />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/vendor-management" element={<VendorManagement />} />
      </Routes> */}
    </div>
  );
};

export default Admin;

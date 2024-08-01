import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddUpdateMemberships from './AddUpdateMemberships';
import UserManagement from './UserManagement';
import VendorManagement from './VendorManagement';

const Admin = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={()=>navigate('/admin/add-update-memberships')}>AddUpdateMemberships</button>
      <button onClick={()=>navigate('/admin/user-management')}>UserManagement</button>
     
    
      {/* <Routes>
        <Route path="/add-update-memberships" element={<AddUpdateMemberships />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/vendor-management" element={<VendorManagement />} />
      </Routes> */}
    </div>
  );
};

export default Admin;

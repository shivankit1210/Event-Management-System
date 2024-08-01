import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './components/Admin/Admin';
import Vendor from './components/Vendor/Vendor';
import User from './components/User/User';
import AddUpdateMemberships from './components/Admin/AddUpdateMemberships'
import UserManagement from './components/Admin/UserManagement';
import VendorManagement from "./components/Admin/VendorManagement"
import Membership from './components/Admin/Membership';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/" element={<Admin />} />
      <Route path="/admin/add-update-memberships" element={<AddUpdateMemberships />} />
      <Route path="/admin/user-management" element={<UserManagement />} />
      <Route path="/admin/vendor-management" element={<VendorManagement />} />
      <Route path="/admin/vendor-management/add-membership" element={<Membership />} />
        {/* <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="admin//vendor-management" element={<VendorManagement />} /> */}
      <Route path="/vendor/*" element={<Vendor />} />
      <Route path="/user/*" element={<User />} />
    </Routes>
  );
};

export default App;


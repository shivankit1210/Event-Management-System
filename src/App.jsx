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
import VendorPage from './components/Vendor/VendorPage';
import Update from './components/Admin/Update';
import Cart from "./components/User/User";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Admin Component */ }

      <Route path="/admin/" element={<Admin />} />
      <Route path="/admin/add-update-memberships" element={<AddUpdateMemberships />} />
      <Route path="/admin/user-management" element={<UserManagement />} />
      <Route path="/admin/vendor-management" element={<VendorManagement />} />
      <Route path="/admin/vendor-management/add-membership" element={<Membership />} />
      <Route path="/admin/vendor-management/update" element={<Update/>} />

      {/* Vendor Component */}

      <Route path="/vendor/" element={<Vendor />} />
      <Route path='./vendor/vendor-page' element={<VendorPage/>} />

      {/* <Route path="/admin/" element={<VendorManagement />} /> */}


      {/* User Component */}

      <Route path="/user/" element={<User />} />
      <Route path='/user/cart' element={<Cart/>}/>
    </Routes>
  );
};

export default App;


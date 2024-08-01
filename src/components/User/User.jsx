import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import VendorList from './Vendorlist';
import Cart from './Cart';

const User = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Routes>
        {/* <Route path="vendor-list" element={<Vendorlist />} /> */}
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default User;

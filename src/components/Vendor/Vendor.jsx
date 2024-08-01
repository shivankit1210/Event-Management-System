import React from 'react';
import { Route, Routes } from 'react-router-dom';
import YourItem from './ItemList';
import AddNewItem from './AddNewItem';
import Transactions from './Transactions';
import ItemList from './ItemList';

const Vendor = () => {
  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <Routes>
        <Route path="your-item" element={<YourItem />} />
        <Route path="add-new-item" element={<AddNewItem />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="item-list" element={<ItemList />} />
      </Routes>
    </div>
  );
};

export default Vendor;


"use client"


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Electronics from './pages/electronics/Electronics';
import Grocery from './pages/grocery/Grocery';
import Fashion from './pages/fashion/Fashion';
import Type from './components/type/Type';
import cart from './components/cart/cart';
import Cart from './pages/cart/cart';
import Index from './pages/Index';


const Page = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Type />
      
      <Routes>
         <Route index element={<Index />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
        

      </Routes>
    </BrowserRouter>
  );
};

export default Page;

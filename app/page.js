
"use client"


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Electronics from './pages/electronics/Electronics';
import Grocery from './pages/grocery/Grocery';
import Fashion from './pages/fashion/Fashion';
import Type from './components/type/Type';

const Page = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Type />
      
      <Routes>
        
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;

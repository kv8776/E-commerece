"use client"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Electronics from './pages/electronics/Electronics';
import Grocery from './pages/grocery/Grocery';
import Fashion from './pages/fashion/Fashion';
import Type from './components/type/Type';
import Cart from './pages/cart/cart';
import Index from './pages/Index';
import NoteProvider from './Noteprovider'; 
import NoteContext from './NoteContext';

const Page = () => {
  return (
    <NoteProvider>
   
      <BrowserRouter >
        <Navbar />
        <Type />
        <Routes>
          <Route path="/index"  element={<Index />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    
    </NoteProvider>
  );
};

export default Page;

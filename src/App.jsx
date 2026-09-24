import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
// Components - Matching your folder structure
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Aboutbox from "./pages/Aboutbox";
import Products from "./pages/Products";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutbox" element={<Aboutbox />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
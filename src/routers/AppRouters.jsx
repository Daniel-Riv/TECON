import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComNavbar  } from '../components/Tools/ComNavbar';
import { HomePages } from '../pages/HomePages';
import { ContactPages } from '../pages/ContactPages';
import { ProyectPages } from '../pages/ProyectPages';
import { AboutPages } from '../pages/AboutPages';
import Footer from '../components/Tools/Footer';
import { ServicesPages } from '../pages/ServicesPages';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <ComNavbar  />
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/about" element={<AboutPages />} />
                <Route path="/products" element={<ProyectPages />} />
                <Route path="/contact" element={<ContactPages />} />
                <Route path="/Services" element={<ServicesPages />}/>
            </Routes>
            <Footer />
            {/* <Whatsapp />
      <FooterC /> */}
        </BrowserRouter>
    );
};
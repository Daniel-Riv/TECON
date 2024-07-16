import React from 'react';
import { ImgAbout } from '../components/About/SectionImg/ImgAbout.jsx';
import { About } from '../components/About/SectionAbout/About.jsx';
import Breadcrumb from '../components/Tools/Breadcrumb.jsx';
import ServicesHeaderPage from '../components/Tools/ServicesHeaderPage.jsx';
import { Principles } from '../components/About/Principles/Principles.jsx';
import { Approach } from '../components/About/Principles/Approach.jsx';

export const AboutPages = () => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "#", label: "Sobre Nosotros" }
  ];
  return (
    <>
    <ServicesHeaderPage title="Sobre Nostros"
        subtitle="Nuesta Empresa"
        backgroundImage={""}
        />
    <Breadcrumb links={links} />
    <About />
    <Principles />
    <Approach />
    </>
  );
};
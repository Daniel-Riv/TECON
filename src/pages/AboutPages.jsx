import React from 'react';
import { ImgAbout } from '../components/About/SectionImg/ImgAbout.jsx';
import { About } from '../components/About/SectionAbout/About.jsx';
import Breadcrumb from '../components/Tools/Breadcrumb.jsx';
import ServicesHeaderPage from '../components/Tools/ServicesHeaderPage.jsx';
import { Principles } from '../components/About/Principles/Principles.jsx';
import { Approach } from '../components/About/Principles/Approach.jsx';
import { useLanguage } from '../components/Tools/LanguageProvider.jsx';

export const AboutPages = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  const links = [
    { href: "/", label: translations.breadcrumb.home }, 
    { href: "#", label: translations.breadcrumb.aboutUs } 
  ];

  return (
    <>
      <ServicesHeaderPage
        title={translations.aboutPage.title}
        subtitle={translations.aboutPage.subtitle} 
        backgroundImage={""}
      />
      <Breadcrumb links={links} />
      <About />
      <Principles />
      <Approach />
    </>
  );
};

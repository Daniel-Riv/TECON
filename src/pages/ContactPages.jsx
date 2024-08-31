import React from 'react';
import { useLanguage } from '../components/Tools/LanguageProvider.jsx'; // Importa el hook para las traducciones
import { ContentProduct } from '../components/Contac/FormContac/ContentProduct';
import Breadcrumb from '../components/Tools/Breadcrumb.jsx';
import ServicesHeaderPage from '../components/Tools/ServicesHeaderPage.jsx';

export const ContactPages = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  const links = [
    { href: "/", label: translations.contactPages.home }, 
    { href: "#", label: translations.contactPages.contactUs } 
  ];

  return (
    <>
      <ServicesHeaderPage
        title={translations.contactPages.contactUsTitle} 
        subtitle={translations.contactPages.quoteWithUs} 
        backgroundImage={""}
      />
      <Breadcrumb links={links} />
      <ContentProduct />
      {/* <SectionSocial /> */}
    </>
  );
};

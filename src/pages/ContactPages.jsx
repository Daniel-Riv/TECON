import React from 'react';
import { ContentProduct } from '../components/Contac/FormContac/ContentProduct';
import Breadcrumb from '../components/Tools/Breadcrumb';
import ServicesHeaderPage from '../components/Tools/ServicesHeaderPage';

export const ContactPages = () => {
  const links = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Contactanos" }
  ];
  return (
    <>
    <ServicesHeaderPage title="Contactanos"
        subtitle="Cotiza con Nosotros"
        backgroundImage={""}
        />
    <Breadcrumb links={links} />

     <ContentProduct />
{/*     <SectionSocial  />
 */}   
  </>
  );
};
import React from 'react';
import ImgData from '../components/Proyect/Img/ImgData';
import ItemCard from '../components/Proyect/ProyectCard/ItemCard';
import Breadcrumb from '../components/Tools/Breadcrumb';
import { useLanguage } from '../components/Tools/LanguageProvider';

export const ProyectPages = () => {
  const { translations } = useLanguage(); 

  const links = [
    { href: "/", label: translations.breadcrumb.home }, 
    { href: "#", label: translations.breadcrumb.projects } 
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <ImgData />
        <Breadcrumb links={links} />
        <ItemCard />
      </main>
    </div>
  );
};

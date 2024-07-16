import React from 'react';
import ImgData from '../components/Proyect/Img/ImgData';
import ItemCard from '../components/Proyect/ProyectCard/ItemCard';
import Quotes from '../components/Tools/Quotes';
import Breadcrumb from '../components/Tools/Breadcrumb';

export const ProyectPages = () => {
  const links = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Proyectos" }
  ];
  return (
    <div class="flex flex-col min-h-dvh">
      <main className="flex-1">
      <ImgData />
      <Breadcrumb links={links} />
      <ItemCard />
      </main>
    </div>
  );
};
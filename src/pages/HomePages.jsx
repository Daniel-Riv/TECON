import React from 'react';
import DataImg from '../components/Home/Header/DataImg';
import Features from '../components/Home/Features/Features';
import Mision from '../components/Home/Mision/Mision';
import ProyectCard from '../components/Home/ProyectCard/ProyectCard';
import Quotes from '../components/Tools/Quotes';
import CustomCarousel from '../components/Home/CustomCarruosel/CustomCarousel';

export const HomePages = () => {
  return (
    <div>
        <CustomCarousel />
        <DataImg />
        <Features />
        <Mision />
        <ProyectCard />
        <Quotes />
    </div>
  );
};
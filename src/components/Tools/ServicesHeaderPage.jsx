import React from 'react';

const ServicesHeaderPage = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative flex items-center justify-center h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-lg font-semibold text-green-500">{subtitle}</h2>
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default ServicesHeaderPage;

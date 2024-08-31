import React from 'react';
import './imgDaa.css';
import { useLanguage } from '../../Tools/LanguageProvider';

const ImgData = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {translations.imgData.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              {translations.imgData.description}
            </p>
            <a
              className="inline-flex items-center justify-center rounded-md bg-[#0fa968] px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-white no-underline font-medium shadow-sm transition-colors hover:bg-[#0fa968]/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href="#"
              rel="ugc"
            >
              {translations.imgData.cta}
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/placeholder.svg"
              alt="Acme Software"
              className="rounded-lg object-cover w-full h-auto max-w-md md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgData;

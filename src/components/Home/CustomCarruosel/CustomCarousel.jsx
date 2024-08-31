import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { useLanguage } from '../../Tools/LanguageProvider';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    alt: 'Ciberseguridad',
    buttonLink: '/services'
  },
  {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    alt: 'Seguridad en la Nube',
    buttonLink: '/services'
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    alt: 'Protección de Datos',
    buttonLink: '/services'
  }
];

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { translations } = useLanguage();

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    // Reiniciar las animaciones cuando cambie la diapositiva
    const elements = document.querySelectorAll('.slide-in-left');
    elements.forEach(element => {
      element.classList.remove('slide-in-left');
      void element.offsetWidth;
      element.classList.add('slide-in-left');
    });
  };

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={10000}
      stopOnHover={true}
      onChange={handleSlideChange}
    >
      {images.map((image, index) => (
        <div key={index} className="relative max-h-[35rem]">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col p-6 md:pl-52 items-start justify-center bg-black bg-opacity-50">
            <h1 className="text-2xl md:text-4xl text-[#0fa968] font-bold mb-4 slide-in-left">
              {translations.slides[index].caption}
            </h1>
            <p className="text-base md:text-lg text-white mb-4 slide-in-left">
              {translations.slides[index].description}
            </p>
            <a href={image.buttonLink} className="bg-[#0fa968] text-white px-4 py-2 rounded-md no-underline slide-in-left">
              {translations.slides[index].buttonText}
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

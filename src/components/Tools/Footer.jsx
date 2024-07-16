import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Soluciones', href: '/solutions', current: false },
  { name: 'Servicios', href: '/services', current: false },
  { name: 'Nosotros', href: '/about', current: false },
  { name: 'Proyecto', href: '/products', current: false },
  { name: 'Contactanos', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === item.href ? 'text-[#32c36c] border-b-2 border-[#32c36c]' : 'colortextFooter hover:border-b-2 hover:border-[#32c36c]',
                  'px-3 py-2 text-sm font-medium no-underline'
                )}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mt-4 md:mt-0">
            <a href="https://facebook.com" className="colortextFooter">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="colortextFooter">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="colortextFooter">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="colortextFooter">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>Copyright&copy;  2024 Tecnología con Conciencia | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { createContext, useState, useContext } from 'react';
import en from '../../i18n/en.json';
import es from '../../i18n/es.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('language') || 'en';
  const [language, setLanguage] = useState(storedLanguage);
  const translations = language === 'es' ? es : en;

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ translations, switchLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

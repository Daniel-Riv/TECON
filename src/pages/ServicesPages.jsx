import CardServices from "../components/Services/CardServices";
import Services from "../components/Services/Services";
import Breadcrumb from "../components/Tools/Breadcrumb";
import { useLanguage } from "../components/Tools/LanguageProvider";
import ServicesHeaderPage from "../components/Tools/ServicesHeaderPage";

export const ServicesPages = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  const links = [
    { href: "/", label: translations.breadcrumb.home },
    { href: "#", label: translations.breadcrumb.services }
  ];

  return (
    <>
      <ServicesHeaderPage 
        title={translations.servicesPage.title}
        subtitle={translations.servicesPage.subtitle}
        backgroundImage={""} 
      />
      <Breadcrumb links={links} />
      <Services />
      <CardServices />
    </>
  );
};

import CardServices from "../components/Services/CardServices";
import Services from "../components/Services/Services";
import Breadcrumb from "../components/Tools/Breadcrumb";
import ServicesHeaderPage from "../components/Tools/ServicesHeaderPage";


export const ServicesPages = () => {
  const links = [
    { href: "#", label: "Inicio" },
    { href: "#", label: "Servicios" }
  ];
  return (
    <>
      <ServicesHeaderPage title="Áreas en las que nos especializamos"
        subtitle="Servicios"
        backgroundImage={""}
      />
      <Breadcrumb links={links} />
      <Services />
      <CardServices />
    </>
  );
};
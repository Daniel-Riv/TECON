import { useLanguage } from "../../Tools/LanguageProvider";

export const Approach = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  const approaches = [
    {
      title: translations.approachPage.openSourcePhilosophy, 
      description: translations.approachPage.openSourceDescription 
    },
    {
      title: translations.approachPage.platformDevelopment, 
      description: translations.approachPage.platformDescription 
    },
    {
      title: translations.approachPage.technologyAdoption,
      description: translations.approachPage.technologyDescription 
    },
    {
      title: translations.approachPage.agriculturalResearch, 
      description: translations.approachPage.agriculturalDescription 
    }
  ];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {translations.approachPage.ourApproach} {/* "Nuestro Enfoque" traducido */}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-general mb-4">
                {approach.title}
              </h3>
              <p className="text-muted-foreground">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "../../Tools/LanguageProvider.jsx";

export const Principles = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {translations.principlesPage.ourPrinciples} 
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-general mb-4">
                {translations.principlesPage.innovationTIC}
              </h3>
              <p className="text-muted-foreground">
                {translations.principlesPage.innovationDescription} 
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-general mb-4">
                {translations.principlesPage.communityCommitment} 
              </h3>
              <p className="text-muted-foreground">
                {translations.principlesPage.communityDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

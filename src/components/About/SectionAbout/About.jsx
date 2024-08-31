import { useLanguage } from "../../Tools/LanguageProvider";

export const About = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  return (
    <section className="flex items-center justify-center py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mx-8">
          <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0">
            <div className="sec-title mb-8 md:mb-6 text-center">
              <h2 className="text-4xl font-bold text-black mb-4">
                {translations.aboutPage.whoWeAre} 
              </h2>
              <div className="separater w-20 h-1 bg-[#0fa968] mx-auto" />
            </div>
            <div className="text mb-8">
              <p className="text-justify text-base text-black mb-4">
                {translations.aboutPage.description} 
              </p>
            </div>
            <div className="flex justify-center">
              <a href="/contact"
                 className='flex w-[10rem] items-center justify-center rounded-md border border-transparent bg-[#0fa968] px-8 py-3 text-base font-medium text-white hover:bg-[#0e8658] dark:bg-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:bg-[#0fa968] md:px-10 md:py-4 md:text-lg no-underline'>
                {translations.aboutPage.contactUs} 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

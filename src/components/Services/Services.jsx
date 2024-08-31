import { useLanguage } from "../Tools/LanguageProvider";

const Services = () => {
    const { translations } = useLanguage(); // Obtén las traducciones del contexto

    return (
        <div>
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-lg text-gray-700">
                        <p className="mb-4">
                            {translations.servicesText.description1}
                        </p>
                        <p>
                            {translations.servicesText.description2}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;

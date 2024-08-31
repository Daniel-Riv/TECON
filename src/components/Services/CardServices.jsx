import { useLanguage } from "../Tools/LanguageProvider";
import { services } from "./servicesData";

const CardServices = () => {
    const { translations } = useLanguage(); // Obtén las traducciones del contexto
    return (
        <div className="bg-background text-foreground">
            <main className="pt-1 pb-6 md:py-24 px-4 md:px-6">
                <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translations.servicesCard.map((service, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-sm relative group">
                            <div className="flex items-center gap-4">
                                <div className="bg-general rounded-md p-3 flex items-center justify-center group">
                                <div dangerouslySetInnerHTML={{ __html: service.icon }} />

                                </div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                            </div>
                            <p className="text-muted-foreground mt-2">{service.description}</p>
                            <div className="absolute bottom-0 left-0 w-[90%] h-1 bg-general group-hover:w-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default CardServices;

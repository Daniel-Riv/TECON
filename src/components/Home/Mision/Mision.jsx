import React from 'react';
import Card from './Card';
import { useLanguage } from '../../Tools/LanguageProvider'; 

const Mision = () => {
    const { translations } = useLanguage(); // Obtén las traducciones del contexto

    return (
        <div className="flex flex-col md:flex-row items-center py-10 bg-white shadow-sm border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-900 sm:text-4xl'>
                    {translations.missionVision.title}
                </h2>
                <div className="flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                    <div className="flex-1">
                        <Card
                            title={translations.missionVision.mission.title}
                            content={translations.missionVision.mission.content}
                        />
                    </div>
                    <div className="flex-1">
                        <Card
                            title={translations.missionVision.vision.title}
                            content={translations.missionVision.vision.content}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mision;

import React from 'react';
import Card from './Card'

const Mision = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-10 bg-white shadow-sm border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-900 sm:text-4xl'>
                    Nuestra Misión y Visión
                </h2>
                <div className="flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                    <div className="flex-1">
                        <Card
                            title="Mision"
                            content="Impulsar el uso de las diversas tecnologías aplicadas por el hombre, en todas sus tareas cotidianas, sin perder de vista la importancia que la vida, la naturaleza y su medio significan para la su existencia."
                        />
                    </div>
                    <div className="flex-1">
                        <Card
                            title="Vision"
                            content="TcC debe convertirse para el 2030 en la mas innovadora organización privada que impulse el uso responsable de las diversas tecnologías en el país, impulsando la riqueza y el talento nacional, e impartiendo conocimiento libre con cero dependencias, con la apropiación y uso de aplicaciones informáticas en los procesos de desarrollo de nuestras gentes."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mision;
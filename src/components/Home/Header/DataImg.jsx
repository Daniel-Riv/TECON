import React from 'react';

const DataImg = () => {
  return (
    <div className='relative overflow-hidden bg-gray-100 w-full pb-8'>
      <div className='mx-auto max-w-full'>
        <div
          className='relative z-10 bg-gray-100 sm:pb-16 md:pb-20 lg:w-full lg:max-w-full lg:pb-28 xl:pb-5'
        >
          <main
            className='mx-auto max-w-full px-4 pt-10 sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28'
          >
            <div className='text-center'>
              <h1
                className='text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-900 sm:text-5xl md:text-6xl'
              >
                <span className='block xl:inline'>Tecnología con</span>{' '}
                <span className='block text-[#0fa968]  xl:inline'>Conciencia</span>
              </h1>
              <p
                className='mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl'
                >
                Ante los líos medioambientales que ha causado el hombre por el paso por este planeta, convirtiéndose en la peor plaga, hoy nos encontramos en la encrucijada de invertir el desarrollo medioambiental a una pendiente negativa lo que sin duda alguna terminará causando la extinción de la vida en el planeta.
              </p>
              <p
                className='mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl'
                >
                Es así como justamente queremos participar activamente, aportando un granito de arena dentro de todo este lío que estamos heredando a nuestras generaciones, y queremos resaltar la importancia de la tecnología, pero realizando un uso racional y sostenible de la misma para minimizar o por qué no aportar positivamente los impactos ambientales.
              </p>
              <p
                className='mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl'
                >
                Finalmente todo significa que antes de aplicar o usar cualquier uso tecnológico se debe razonar acerca de su impacto o aporte al ambiente, ese aspecto consciente y racional es lo que le da el nombre a nuestra organización TcC.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
                <div>
                  <a
                    href='/about'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium hover:bg-[#0fa968] hover:text-gray-100 dark:text-gray-100 md:px-10 md:py-4 md:text-lg no-underline'
                  >
                    Acerca de Nosotros
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DataImg;

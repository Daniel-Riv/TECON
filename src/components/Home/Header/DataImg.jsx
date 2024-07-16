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
                  El hombre ha causado numerosos problemas medioambientales, convirtiéndose en una de las peores amenazas para el planeta. Nos encontramos en una encrucijada donde, si no revertimos el daño ambiental, nos dirigimos hacia una pendiente negativa que podría llevar a la extinción de la vida en la Tierra.
              </p>
              <p
                className='mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl'
                >
                  Queremos participar activamente en la solución, contribuyendo con nuestro granito de arena en medio de esta crisis que estamos dejando a las futuras generaciones. Queremos destacar la importancia de la tecnología, usándola de manera racional y sostenible para minimizar, e incluso revertir, los impactos ambientales.
              </p>
              <p
                className='mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl'
                >
                  Antes de aplicar cualquier tecnología, es crucial considerar su impacto ambiental. Esta reflexión consciente y racional es la esencia de nuestra organización, Tecnología con Conciencia (TcC).
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

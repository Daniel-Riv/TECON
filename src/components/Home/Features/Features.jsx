import React from 'react';
import { useLanguage } from '../../Tools/LanguageProvider'; 
import { ClockIcon, PresentationChartBarIcon, PuzzlePieceIcon, SparklesIcon } from '@heroicons/react/24/outline';

const iconMap = {
  sparkles: SparklesIcon,
  puzzle: PuzzlePieceIcon,
  'presentation-chart-bar': PresentationChartBarIcon,
  clock: ClockIcon
};

const Features = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  return (
    <div className='bg-gray-900 p-6'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base font-semibold uppercase tracking-wide text-[#0fa968] dark:text-[#0fa968]'>
            {translations.features.services}
          </h2>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white dark:text-gray-900 sm:text-4xl'>
            {translations.features.technologicalSolutions}
          </p>
          <p className='mt-4 max-w-2xl text-xl text-white lg:mx-auto'>
            {translations.features.description}
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
            {translations.features.items.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.name} className='relative'>
                  <dt>
                    <div className='absolute flex h-12 w-12 items-center justify-center rounded-md bg-gray-900 text-white dark:bg-[#0fa968] dark:text-white'>
                      <Icon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg font-medium leading-6 text-[#0fa968]'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='ml-16 mt-2 text-base text-white'>
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { social } from "./social";
import { Icon } from "@iconify/react/dist/iconify.js";

const SectionSocial = () => {

    console.log(social);
    const SiteMetadata = {
        latlng: [40.712776, -74.005974] 
      };
      
    return (
        <>
        <section className='mx-auto mb-20 max-w-7xl text-gray-800 dark:text-gray-100'>
            <div className='block  dark:bg-gray-900 lg:my-8'>
                <div className='flex flex-wrap items-start'>
                    
                    <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12'>
                        <div className='flex flex-wrap pt-8 lg:pt-0'>
                            {
                                social.map(
                                    (method) =>
                                        method.link && (
                                            <div className='mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12'>
                                                <div className='flex items-start'>
                                                    <div className='shrink-0'>
                                                        <Icon
                                                            name={method.icon}
                                                            className='flex h-14 w-14 items-center justify-center rounded-md bg-purple-600 p-4 text-white shadow-md'
                                                        />
                                                    </div>
                                                    <div className='ml-6 grow'>
                                                        <p className='mb-1 font-bold'>{method.name}</p>
                                                        <p>
                                                            {' '}
                                                            <a
                                                                href={method.link}
                                                                className='text-purple-600 hover:text-pink-600 dark:text-purple-300 dark:hover:text-pink-300'
                                                            >
                                                                {method.link}
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        
    )
}

export default SectionSocial;

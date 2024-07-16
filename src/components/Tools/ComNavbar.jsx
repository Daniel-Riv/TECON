import React, { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Servicios', href: '/services', current: false },
  { name: 'Nosotros', href: '/about', current: false },
  { name: 'Proyectos', href: '/products', current: false },
  { name: 'Contactanos', href: '/contact', current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const ComNavbar = () => {
  const location = useLocation();


  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center 900px:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-start justify-end sm:items-stretch">
                <div className="flex-shrink-0 sm:items-center">
                  <Link to="/">
                    <img
                      className="h-[4rem] w-auto bg-transparent"
                      src="/logo-letra-bg.png"
                      alt="Tecnologia con Conciencia"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-end 900px:flex sm:items-stretch">
                <div className="hidden 900px:flex">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href ? 'text-[#0fa968] border-b-2 border-[#0fa968]' : 'colortext hover:border-b-2 hover:border-[#0fa968]',
                          'px-3 py-2 text-sm font-medium no-underline'
                        )}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="900px:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href ? ' text-[#0fa968]' : 'colortext',
                    'block rounded-md px-3 py-2 text-base font-medium no-underline'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

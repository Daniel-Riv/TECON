import React from 'react';
import { useLanguage } from '../../Tools/LanguageProvider';

export const FormContact = () => {
  const { translations } = useLanguage(); // Obtén las traducciones del contexto

  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-[#0fa968]"
          >
            <line x1="2" x2="5" y1="12" y2="12"></line>
            <line x1="19" x2="22" y1="12" y2="12"></line>
            <line x1="12" x2="12" y1="2" y2="5"></line>
            <line x1="12" x2="12" y1="19" y2="22"></line>
            <circle cx="12" cy="12" r="7"></circle>
          </svg>
          <h3 className="text-lg font-medium">{translations.formContact.location}</h3> {/* "Ubicación" traducido */}
          <p className="text-muted-foreground">{translations.formContact.address}</p> {/* "Calle 123, Sogamoso" traducido */}
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-[#0fa968]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <h3 className="text-lg font-medium">{translations.formContact.phone}</h3> {/* "Teléfono" traducido */}
          <p className="text-muted-foreground">{translations.formContact.phoneNumber}</p> {/* "+57 3135891087" traducido */}
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-[#0fa968]"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <h3 className="text-lg font-medium">{translations.formContact.email}</h3> {/* "Correo" traducido */}
          <p className="text-muted-foreground">{translations.formContact.emailAddress}</p> {/* "info@tecon.com" traducido */}
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-[#0fa968]"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <h3 className="text-lg font-medium">{translations.formContact.hours}</h3> {/* "Horario" traducido */}
          <p className="text-muted-foreground">{translations.formContact.hoursOfOperation}</p> {/* "Lun - Vie, 9:00 - 18:00" traducido */}
        </div>
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-3xl text-[#0fa968] font-bold tracking-tighter md:text-4xl">{translations.formContact.contactUsTitle}</h1> {/* "Contáctanos" traducido */}
        <p className="text-muted-foreground md:text-xl">
          {translations.formContact.description}
        </p>
      </div>

      <div className="mt-10 md:mt-12 lg:mt-14">
        <form className="grid gap-4 md:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
                {translations.formContact.nameLabel}
              </label> 
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder={translations.formContact.namePlaceholder} 
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                {translations.formContact.emailLabel}
              </label> {/* "Correo electrónico" traducido */}
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email"
                placeholder={translations.formContact.emailPlaceholder} // "Ingresa tu correo" traducido
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              {translations.formContact.phoneLabel}
            </label> {/* "Teléfono" traducido */}
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="phone"
              placeholder={translations.formContact.phonePlaceholder} // "Ingresa tu teléfono" traducido
              type="tel"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="message"
            >
              {translations.formContact.messageLabel}
            </label> {/* "Mensaje" traducido */}
            <textarea
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder={translations.formContact.messagePlaceholder} // "Ingresa tu mensaje" traducido
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#0fa968] px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-[#1a8f5f] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {translations.formContact.submitButton} {/* "Enviar" traducido */}
          </button>
        </form>
        <div class="mt-8 flex justify-center space-x-4">
          <a class="text-muted-foreground hover:text-primary" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <span class="sr-only">Facebook</span>
          </a>
          <a class="text-muted-foreground hover:text-primary" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span class="sr-only">Twitter</span>
          </a>
          <a class="text-muted-foreground hover:text-primary" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span class="sr-only">Instagram</span>
          </a>
          <a class="text-muted-foreground hover:text-primary" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <h3 className="text-lg text-[#0fa968] font-medium">
                {translations.contactSection.contactFormTitle} 
              </h3>
              <p className="text-muted-foreground">
                {translations.contactSection.contactFormDescription} 
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg text-[#0fa968]  font-medium">
                {translations.contactSection.socialMediaTitle} 
              </h3>
              <p className="text-muted-foreground">
                {translations.contactSection.socialMediaDescription} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

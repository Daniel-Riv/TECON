export const About = () => {
  return (
    <section className="flex items-center justify-center py-4 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center mx-8">
          <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0">
            <div className="sec-title mb-8 md:mb-6 text-center">
              <h2 className="text-4xl font-bold text-black mb-4">¿Quiénes Somos?</h2>
              <div className="separater w-20 h-1 bg-[#0fa968] mx-auto" />
            </div>
            <div className="text mb-8">
              <p className="text-justify text-base text-black mb-4">
                Somos una empresa de desarrollo de software dedicada a proporcionar soluciones tecnológicas innovadoras y personalizadas. Nos especializamos en el desarrollo de aplicaciones web y móviles, ofreciendo servicios de consultoría y soporte técnico para ayudar a nuestros clientes a alcanzar sus objetivos empresariales.
              </p>
            </div>
            <div className="flex justify-center">
              <a href="/contact"
                 className='flex w-[10rem] items-center justify-center rounded-md border border-transparent bg-[#0fa968] px-8 py-3 text-base font-medium text-white hover:bg-[#0e8658] dark:bg-gray-900 dark:text-gray-100 hover:text-gray-100 dark:hover:bg-[#0fa968] md:px-10 md:py-4 md:text-lg no-underline'>
                 Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Quotes() {
    return (
        <div className="h-[500px] flex items-center justify-center flex-col md:flex-row p-6 shadow-sm border-t bg-white">
            <img src="https://placehold.co/150" alt="placeholder image" className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg mb-4 md:mb-0" crossorigin="anonymous"/>
            <div className="text-center md:text-left md:ml-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl md:text-5xl">Cotiza tu idea con nosotros</h2>
                <p className="mt-3 text-base text-gray-900 text-justify mx-auto sm:mt-5 max-w-3xl sm:text-lg md:mt-5 md:text-xl">¿Tienes una idea en mente? Nosotros te ayudamos a hacerla realidad. Contáctanos para cotizar tu proyecto.</p>
                <div className="flex justify-center mt-4">
                    <button className='rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium hover:bg-[#0fa968] hover:text-gray-100 dark:text-gray-100 md:px-10 md:py-4 md:text-lg no-underline'>
                        Contáctanos
                    </button>
                </div>
            </div>
        </div>
    )
}

import './imgDaa.css';

const ImgData = () => {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Transformando Ideas en Soluciones Innovadoras</h1>
            <p className="text-muted-foreground text-lg mb-6">
              En Tecnología con Conciencia, nos especializamos en ofrecer soluciones de software de vanguardia que ayudan a nuestros
              clientes a alcanzar sus objetivos comerciales. Con años de experiencia y un equipo de profesionales
              cualificados, estamos comprometidos a proporcionar un servicio excepcional y fomentar la innovación.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-md bg-[#0fa968] px-6 py-3 text-sm text-white no-underline font-medium shadow-sm transition-colors hover:bg-[#0fa968]/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href="#"
              rel="ugc"
            >
              Conocer Más
            </a>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="400"
            alt="Acme Software"
            className="rounded-lg object-cover"
            style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ImgData;

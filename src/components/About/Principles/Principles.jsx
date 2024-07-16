export const Principles = () => {
    return (
        <>
          <section className="bg-muted py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Principios</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-general mb-4">Innovación y TIC</h3>
                  <p className="text-muted-foreground">
                    Creemos en el poder de la innovación y el uso de las tecnologías de la información y comunicación para
                    impulsar el progreso y crear un cambio positivo.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-general mb-4">Compromiso con la Comunidad</h3>
                  <p className="text-muted-foreground">
                    Estamos comprometidos con el trabajo comunitario y la formación de una próspera comunidad tecnológica,
                    fomentando la colaboración y el intercambio de conocimientos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export const Approach = () => {
    const approaches = [
        {
            title: "Filosofía de Código Abierto y GNU",
            description: "El software de código abierto y la filosofía GNU están en el corazón de nuestras operaciones. Creemos en el intercambio colaborativo de conocimientos y el uso de herramientas abiertas como una base fundamental, mientras empleamos otras herramientas cuando es necesario."
        },
        {
            title: "Desarrollo de Plataformas",
            description: "Diseñamos y desarrollamos plataformas informáticas que benefician y mejoran los procesos de desarrollo de la comunidad."
        },
        {
            title: "Adopción de Tecnología",
            description: "Desarrollamos y promovemos la adopción de aplicaciones tecnológicas en diversas áreas del desarrollo humano, como las comunicaciones, la energía limpia y los alimentos orgánicos."
        },
        {
            title: "Investigación Agrícola",
            description: "Llevamos a cabo investigaciones y promovemos la apropiación de la tecnología en el sector agrícola."
        }
    ];

    return (
        <section className="bg-background py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Enfoque</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {approaches.map((approach, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-general mb-4">{approach.title}</h3>
                            <p className="text-muted-foreground">{approach.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

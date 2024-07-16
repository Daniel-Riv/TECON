import React from 'react';

const projects = [
    {
        id: 1,
        imgSrc: "https://placehold.co/150x150",
        logoSrc: "https://placehold.co/100x50",
        title: "Proyecto Uno",
        description: "Un sitio web de comercio electrónico moderno con un diseño elegante y responsive.",
        tags: ["Diseño", "Creatividad"]
    },
    {
        id: 2,
        imgSrc: "https://placehold.co/150x150",
        logoSrc: "https://placehold.co/100x50",
        title: "Proyecto Dos",
        description: "Una aplicación web móvil para la gestión de proyectos de equipo.",
        tags: ["Diseño", "Creatividad"]
    },
    {
        id: 3,
        imgSrc: "https://placehold.co/150x150",
        logoSrc: "https://placehold.co/100x50",
        title: "Proyecto Tres",
        description: "Una aplicación web personalizada para un proveedor de servicios de salud.",
        tags: ["Desarrollo", "Innovación"]
    }
];

const ProjectCard = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
            <div className="container grid gap-8 px-4 md:px-6">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl text-[#0fa968] font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Recientes</h2>
                    <p className="max-w-[600px] mx-auto text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Echa un vistazo a algunos de nuestros últimos proyectos de desarrollo web y aplicaciones móviles.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((data) => (
                        <div key={data.id} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="p-6">
                                <img
                                    src={data.imgSrc}
                                    width="400"
                                    height="300"
                                    alt={data.title}
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                                />
                                <div className="flex space-x-2 mt-4">
                                    {data.tags.map((tag, index) => (
                                        <span key={index} className="bg-general text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-2 mt-4">
                                    <h3 className="text-lg font-bold">{data.title}</h3>
                                    <p className="text-muted-foreground">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;
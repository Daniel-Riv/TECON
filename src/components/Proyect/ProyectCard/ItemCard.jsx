import { projects } from "../dataCards";

const ItemCard = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
              <img
                src={project.imgSrc}
                width="400"
                height="300"
                alt={project.imgAlt}
                className="rounded-t-lg object-cover"
                style={{ aspectRatio: '400 / 300', objectFit: 'cover' }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <a
                  className="inline-flex items-center justify-center rounded-md bg-general px-4 py-2 text-sm font-medium text-primary-foreground no-underline shadow-sm transition-colors hover:bg-general/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  href={project.link}
                  rel="ugc"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemCard;

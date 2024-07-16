export const Principles = () => {
    return (
        <>
          <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-general mb-4">Innovation and ICT</h3>
                <p className="text-muted-foreground">
                  We believe in the power of innovation and the use of information and communication technologies to
                  drive progress and create positive change.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-general mb-4">Community Engagement</h3>
                <p className="text-muted-foreground">
                  We are committed to community work and the formation of a thriving technology community, fostering
                  collaboration and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}
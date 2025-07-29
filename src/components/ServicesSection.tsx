'use client';

const services = [
  {
    id: 1,
    title: "Location de Tentes",
    description: "Tentes de toutes tailles pour accueillir vos invités en toute élégance",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Chaises & Tables",
    description: "Large gamme de mobilier pour tous types d'événements",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Décoration",
    description: "Transformez votre espace avec notre sélection de décorations",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const processSteps = [
  {
    id: 1,
    title: "Conseil",
    description: "Nous vous accompagnons dans le choix du matériel adapté à votre événement"
  },
  {
    id: 2,
    title: "Conception",
    description: "Nous créons ensemble un plan d'aménagement personnalisé"
  },
  {
    id: 3,
    title: "Logistique",
    description: "Nous gérons la livraison, l'installation et la récupération"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="elegant-title text-3xl md:text-4xl font-bold mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de matériel événementiel pour tous vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-lg card-hover scale-in border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon mb-6">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section Processus */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12 slide-up">
            <h3 className="script-title text-2xl md:text-3xl mb-4 text-gray-800">
              Notre Processus
            </h3>
            <p className="text-gray-600">
              Une approche simple et efficace pour votre événement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="process-step slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
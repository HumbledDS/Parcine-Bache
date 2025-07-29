'use client';

const advantages = [
  {
    id: 1,
    title: "Matériel de Qualité",
    description: "Tous nos équipements sont entretenus et vérifiés avant chaque location",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Service Personnalisé",
    description: "Nous adaptons nos solutions à vos besoins spécifiques",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Livraison & Installation",
    description: "Nous livrons et installons votre matériel sur site",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="elegant-title text-3xl md:text-4xl font-bold mb-4">
            Pourquoi Choisir Parcine Bâche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre expertise et notre engagement pour des événements réussis
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.id} 
              className="text-center bounce-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="advantage-icon mb-8">
                <img 
                  src={advantage.imageUrl} 
                  alt={advantage.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="modern-title text-xl font-semibold mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
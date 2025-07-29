'use client';

const stats = [
  {
    id: 1,
    number: "500+",
    label: "Événements Réussis",
    description: "Plus de 500 événements organisés avec succès"
  },
  {
    id: 2,
    number: "50+",
    label: "Types d'Équipements",
    description: "Large gamme de matériel événementiel"
  },
  {
    id: 3,
    number: "5",
    label: "Années d'Expérience",
    description: "Expertise reconnue dans l'événementiel"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="script-title text-3xl md:text-4xl mb-4 text-gray-800">
            Notre expertise, vos idées
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plus de 5 ans d'expérience dans la location de matériel événementiel à Dakar. 
            Nous vous accompagnons dans tous vos projets, de la conception à la réalisation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="stats-card scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="elegant-title text-4xl md:text-5xl font-bold text-blue-800 mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
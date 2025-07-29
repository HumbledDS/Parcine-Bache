'use client';

const packs = [
  {
    id: 1,
    name: "Pack Mariage Complet",
    description: "Tente, chaises, tables, décoration pour 100 personnes",
    price: "À partir de 500.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Pack Baptême",
    description: "Tente, mobilier, décoration pour 50 personnes",
    price: "À partir de 250.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Pack Entreprise",
    description: "Tente, mobilier pour événements professionnels",
    price: "À partir de 300.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const unitItems = [
  {
    id: 1,
    name: "Tente 6x6m",
    price: "50.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Chaise Plissée",
    price: "2.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Table Ronde",
    price: "15.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Décoration Florale",
    price: "25.000 FCFA",
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function CatalogueSection() {
  return (
    <section id="catalogue" className="section-padding bg-gray-50 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="elegant-title text-3xl md:text-4xl font-bold text-center mb-12 slide-up">
          Nos Packs & Tarifs
        </h2>
        
        {/* Packs */}
        <div className="mb-16">
          <h3 className="script-title text-2xl font-bold text-center mb-8 slide-up">
            Packs Événementiels
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div 
                key={pack.id} 
                className="bg-white p-6 rounded-xl shadow-lg card-hover scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <img 
                    src={pack.imageUrl} 
                    alt={pack.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
                <h4 className="modern-title text-xl font-semibold mb-2">{pack.name}</h4>
                <p className="text-gray-600 mb-4">{pack.description}</p>
                <p className="text-blue-800 font-bold">{pack.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Articles à l'unité */}
        <div>
          <h3 className="script-title text-2xl font-bold text-center mb-8 slide-up">
            Location à l'Unité
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {unitItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white p-4 rounded-lg shadow-md card-hover scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold mb-2">{item.name}</h4>
                <p className="text-blue-800 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
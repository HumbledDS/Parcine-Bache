'use client';

export default function PhilosophySection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="philosophy-gradient text-white py-20 fade-in relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="elegant-title text-3xl md:text-4xl font-bold mb-6">
              Notre Philosophie
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Chez Parcine Bâche, nous croyons que chaque événement mérite d'être exceptionnel. 
              Notre mission est de transformer vos idées en réalité en vous fournissant le matériel 
              de qualité dont vous avez besoin pour créer des moments inoubliables.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              De la tente la plus simple au décor le plus sophistiqué, nous mettons notre expertise 
              à votre service pour que votre événement soit une réussite totale.
            </p>
            <button 
              onClick={() => scrollToSection('services')}
              className="cta-button-white"
            >
              En savoir plus
            </button>
          </div>
          
          <div className="slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/10 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Événement élégant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white/90 font-medium">Découvrez notre matériel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Éléments décoratifs */}
      <div className="absolute top-10 right-10 w-16 h-16 border border-white/20 rounded-full slide-up" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full slide-up" style={{ animationDelay: '1.2s' }}></div>
    </section>
  );
} 
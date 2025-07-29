'use client';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="hero-section fade-in relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pour l'effet atmosphérique */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="modern-title text-5xl md:text-7xl font-bold mb-6 slide-up text-white">
            Location de Matériel Événementiel
          </h1>
          <h2 className="script-title text-2xl md:text-3xl mb-8 slide-up text-white/90" style={{ animationDelay: '0.2s' }}>
            Parcine Bâche
          </h2>
          <p className="text-xl md:text-2xl mb-8 slide-up text-white/80" style={{ animationDelay: '0.4s' }}>
            Tentes, chaises, décoration et plus pour vos mariages, baptêmes et événements d'entreprise à Dakar
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="cta-button text-lg px-8 py-4"
            >
              Demander un Devis
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="cta-button-white text-lg px-8 py-4"
              style={{ animationDelay: '0.1s' }}
            >
              Voir le Catalogue
            </button>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full slide-up" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-white/10 rounded-full slide-up" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/30 rounded-full slide-up" style={{ animationDelay: '1.4s' }}></div>
    </section>
  );
} 
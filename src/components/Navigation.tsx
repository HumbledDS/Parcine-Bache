'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 fade-in border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="elegant-title text-2xl font-bold text-blue-800 slide-up">
              Parcine Bâche
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-blue-800 transition scale-in font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-800 transition scale-in font-medium"
              style={{ animationDelay: '0.1s' }}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('catalogue')}
              className="text-gray-700 hover:text-blue-800 transition scale-in font-medium"
              style={{ animationDelay: '0.2s' }}
            >
              Catalogue
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="cta-button text-sm px-4 py-2"
              style={{ animationDelay: '0.3s' }}
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 scale-in"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 transition"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 transition"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('catalogue')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 transition"
              >
                Catalogue
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
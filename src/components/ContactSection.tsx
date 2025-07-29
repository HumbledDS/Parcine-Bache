'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
  };

  return (
    <section id="contact" className="section-padding bg-gray-100 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="elegant-title text-3xl font-bold text-center mb-12 slide-up">
          Demander un Devis
        </h2>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-lg scale-in" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-up" style={{ animationDelay: '0.1s' }}>
                <label className="block text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="slide-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="mt-6 slide-up" style={{ animationDelay: '0.3s' }}>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mt-6 slide-up" style={{ animationDelay: '0.4s' }}>
              <label className="block text-gray-700 mb-2">Type d'événement</label>
              <select
                name="eventType"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                value={formData.eventType}
                onChange={handleInputChange}
              >
                <option value="">Sélectionner...</option>
                <option value="mariage">Mariage</option>
                <option value="bapteme">Baptême</option>
                <option value="entreprise">Événement d'entreprise</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="slide-up" style={{ animationDelay: '0.5s' }}>
                <label className="block text-gray-700 mb-2">Date de l'événement</label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="slide-up" style={{ animationDelay: '0.6s' }}>
                <label className="block text-gray-700 mb-2">Nombre d'invités</label>
                <input
                  type="number"
                  name="guestCount"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="mt-6 slide-up" style={{ animationDelay: '0.7s' }}>
              <label className="block text-gray-700 mb-2">Message (optionnel)</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="mt-6 w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition scale-in"
              style={{ animationDelay: '0.8s' }}
            >
              Envoyer la Demande
            </button>
          </form>
          
          <div className="mt-8 text-center slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-gray-700 mb-4">Ou contactez-nous directement:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/221XXXXXXXXX" 
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition scale-in flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="tel:+221XXXXXXXXX" 
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition scale-in flex items-center justify-center"
                style={{ animationDelay: '0.1s' }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/yassinenachate",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/yassine-nachate-357201229",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:yassinenachat4@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "À Propos", href: "#about" },
    { name: "Expérience", href: "#experience" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Informations personnelles */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Yassine Nachate
              </h3>
              <p className="text-gray-400 text-sm mt-1">Développeur Front-End</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur Front-End passionné basé à Rabat, Maroc. Spécialisé dans React, Angular 
              et les technologies web modernes. Toujours à la recherche de nouveaux défis et 
              opportunités de collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a 
                  href="mailto:yassinenachat4@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  yassinenachat4@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <a 
                  href="tel:+212653321215"
                  className="hover:text-white transition-colors duration-200"
                >
                  +212 653 321215
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500">Localisation</p>
                <span>Rabat, Maroc</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright et bouton retour en haut */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Yassine Nachate. </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Développeur Front-end",
      company: "Imperium",
      location: "Casablanca, Maroc",
      period: "Décembre 2025 - Présent",
      description: "Développement d'une plateforme cinématographique avec interface utilisateur avancée pour la visualisation des films. Implémentation de filtres avancés et gestion des notifications.",
      technologies: ["React.js", "Tailwind CSS", "Metronic", "Symfony", "Postman", "Git", "GitLab"],
      current: true,
      projects: [
        "Projet LineUp - Plateforme cinématographique",
        "Développement de l'interface utilisateur pour la visualisation des films",
        "Implémentation des filtres avancés et gestion des notifications",
        "Ajout des fonctionnalités de partage et affichage des films les plus consultés",
        "Optimisation de la performance et de l'expérience utilisateur"
      ]
    },
    {
      title: "Développeur Web",
      company: "3W Média",
      location: "Casablanca, Maroc", 
      period: "Février 2024 - Décembre 2024",
      description: "Développement d'une plateforme de gestion d'événements avec fonctionnalités avancées de personnalisation et système de notifications en temps réel.",
      technologies: ["React.js", "Symfony 7", "MySQL", "Html5", "Css3", "Bootstrap 5", "API", "Git", "GitLab", "Postman"],
      current: false,
      projects: [
        "Développement d'une plateforme de gestion d'événements",
        "Personnalisation de la liste des événements avec ajout, modification et suppression",
        "Affichage des détails de chaque événement et ajout de contacts liés",
        "Système de notifications et rappels automatiques",
        "Personnalisation des calendriers et gestion des événements favoris",
        "Réservation d'événements et ajout de notes associées"
      ]
    },
    {
      title: "Développeur Web",
      company: "Minova Consulting",
      location: "Tinghir, Maroc",
      period: "Juillet 2023 - Septembre 2023",
      description: "Conception et réalisation d'un site e-commerce complet avec système de panier, gestion des produits et interface d'administration.",
      technologies: ["Laravel 9", "Html5", "Css3", "Bootstrap 5", "Git", "GitLab"],
      current: false,
      projects: [
        "Conception et réalisation d'un site e-commerce",
        "Personnalisation de la liste des produits avec consultation et affichage des détails",
        "Ajout des produits au panier, calcul du prix total, prix par quantité",
        "Redirection vers le paiement et système de paiement avec choix de la méthode",
        "Partie administrateur : gestion des produits et des catégories",
        "Consultation des commandes et suppression automatique des articles"
      ]
    },
    {
      title: "Développeur Web",
      company: "Minova Consulting",
      location: "Tinghir, Maroc",
      period: "Mai 2022 - Juillet 2022",
      description: "Conception et réalisation d'un système de gestion des parcs automobiles avec fonctionnalités de suivi et mise à jour automatique.",
      technologies: ["PHP", "MySQL", "Html5", "Css3", "Bootstrap 5"],
      current: false,
      projects: [
        "Conception et réalisation d'un système de gestion des parcs automobiles",
        "Gestion des informations des véhicules : matricule, modèle, dates d'entrée et de sortie",
        "Mise à jour automatique du statut des véhicules",
        "Fonctionnalités d'ajout, de modification et de suppression des véhicules",
        "Interface utilisateur intuitive pour la gestion des enregistrements"
      ]
    }
  ];

  const education = [
    {
      degree: "Diplôme d'ingénierie en système d'information",
      school: "Institut supérieur d'ingénierie & des affaires",
      location: "Marrakech, Maroc",
      period: "Septembre 2022 - Septembre 2024",
      description: "Formation d'ingénieur spécialisée dans les systèmes d'information et le développement logiciel",
      type: "diploma"
    },
    {
      degree: "Licence professionnelle en informatique",
      school: "Université Privée de Marrakech",
      location: "Marrakech, Maroc",
      period: "Septembre 2021 - Juillet 2022",
      description: "Formation professionnelle en informatique avec spécialisation développement",
      type: "license"
    },
    {
      degree: "Diplôme de technicien spécialisé en développement informatique",
      school: "Institut Spécialisé de Technologie Appliquée",
      location: "Tinghir, Maroc",
      period: "Septembre 2019 - Juillet 2021",
      description: "Formation technique spécialisée en développement informatique et programmation",
      type: "technical"
    },
    {
      degree: "Baccalauréat en sciences physiques",
      school: "Lycée Salah Eddine El Ayoubi",
      location: "Tinghir, Maroc",
      period: "Septembre 2018 - Juin 2019",
      description: "Baccalauréat scientifique avec spécialisation en sciences physiques",
      type: "bac"
    }
  ];

  const certifications = [
    "JavaScript",
    "Devenir spécialiste de l'intelligence artificielle", 
    "Angular for Beginners: From Basics to Advanced Projects",
    "L'essentiel de Docker"
  ];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'diploma':
        return '🎓';
      case 'license':
        return '📜';
      case 'technical':
        return '🔧';
      case 'bac':
        return '📚';
      default:
        return '🎓';
    }
  };

  const getEducationColor = (type: string) => {
    switch (type) {
      case 'diploma':
        return 'from-purple-600 to-blue-600';
      case 'license':
        return 'from-blue-600 to-cyan-600';
      case 'technical':
        return 'from-green-600 to-teal-600';
      case 'bac':
        return 'from-orange-600 to-red-600';
      default:
        return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Mon Parcours
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une expérience riche et diversifiée dans le développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Expérience Professionnelle */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <Briefcase className="mr-3 text-blue-600" />
              Expérience Professionnelle
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    exp.current ? 'ring-2 ring-blue-600 ring-opacity-50' : ''
                  }`}>
                    {exp.current && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Actuel
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {exp.projects && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Réalisations clés :</h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {exp.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 dark:bg-gray-600 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Formation et Certifications */}
          <div className="space-y-12">
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Diplômes et Formations
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    {/* Icône de type de diplôme */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${getEducationColor(edu.type)} rounded-full flex items-center justify-center text-white text-xl`}>
                      {getEducationIcon(edu.type)}
                    </div>
                    
                    <div className="pr-16">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.school}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 space-y-1">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-200"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Résumé du parcours */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Parcours Académique
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Niveau d'études :</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">Bac+5 (Ingénieur)</span>
                </div>
                <div className="flex justify-between">
                  <span>Spécialisation :</span>
                  <span className="font-medium">Systèmes d'information</span>
                </div>
                <div className="flex justify-between">
                  <span>Années d'études :</span>
                  <span className="font-medium">2018 - 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
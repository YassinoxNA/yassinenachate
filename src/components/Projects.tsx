import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Calendar, MapPin, Users, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Plateforme Cinématographique LineUp",
      company: "Imperium",
      period: "Décembre 2024 - Présent",
      location: "Casablanca, Maroc",
      description: "Plateforme cinématographique avancée avec interface utilisateur moderne pour la visualisation et gestion des films",
      longDescription: "Développement d'une plateforme cinématographique complète avec interface utilisateur avancée permettant la visualisation des films à venir et archivés. Implémentation de filtres avancés, système de notifications en temps réel, fonctionnalités de partage et affichage des films les plus consultés. Optimisation de la performance et de l'expérience utilisateur avec des animations fluides et un design responsive.",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Tailwind CSS", "Metronic", "Symfony", "Postman", "Git", "GitLab"],
      current: true,
      featured: true,
      achievements: [
        "Développement de l'interface utilisateur pour la visualisation des films",
        "Implémentation des filtres avancés et gestion des notifications",
        "Ajout des fonctionnalités de partage et affichage des films les plus consultés",
        "Optimisation de la performance et de l'expérience utilisateur"
      ]
    },
    {
      id: 2,
      title: "Plateforme de Gestion d'Événements",
      company: "3W Média",
      period: "Février 2024 - Décembre 2024",
      location: "Casablanca, Maroc",
      description: "Système complet de gestion d'événements avec fonctionnalités avancées de personnalisation",
      longDescription: "Développement d'une plateforme complète de gestion d'événements avec personnalisation avancée de la liste des événements, système de notifications et rappels automatiques, gestion des calendriers personnalisés et système de réservation. Interface intuitive permettant l'ajout, modification et suppression d'événements avec gestion des contacts liés et notes associées.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Symfony 7", "MySQL", "Html5", "Css3", "Bootstrap 5", "API", "Git", "GitLab", "Postman"],
      current: false,
      featured: true,
      achievements: [
        "Personnalisation de la liste des événements avec CRUD complet",
        "Affichage des détails de chaque événement et ajout de contacts liés",
        "Système de notifications et rappels automatiques",
        "Personnalisation des calendriers et gestion des événements favoris",
        "Réservation d'événements et ajout de notes associées"
      ]
    },
    {
      id: 3,
      title: "Site E-commerce Complet",
      company: "Minova Consulting",
      period: "Juillet 2023 - Septembre 2023",
      location: "Tinghir, Maroc",
      description: "Site e-commerce avec système de panier, paiement et interface d'administration",
      longDescription: "Conception et réalisation d'un site e-commerce complet avec personnalisation de la liste des produits, système de panier intelligent avec calcul automatique des prix, intégration de systèmes de paiement multiples et interface d'administration pour la gestion des produits, catégories et commandes. Système de suppression automatique des articles et gestion complète de l'inventaire.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel 9", "Html5", "Css3", "Bootstrap 5", "Git", "GitLab"],
      current: false,
      featured: false,
      achievements: [
        "Personnalisation de la liste des produits avec consultation et affichage des détails",
        "Ajout des produits au panier, calcul du prix total, prix par quantité",
        "Redirection vers le paiement et système de paiement avec choix de la méthode",
        "Partie administrateur : gestion des produits et des catégories",
        "Consultation des commandes et suppression automatique des articles"
      ]
    },
    {
      id: 4,
      title: "Système de Gestion des Parcs Automobiles",
      company: "Minova Consulting",
      period: "Mai 2022 - Juillet 2022",
      location: "Tinghir, Maroc",
      description: "Application de gestion complète des parcs automobiles avec suivi en temps réel",
      longDescription: "Conception et réalisation d'un système complet de gestion des parcs automobiles permettant la gestion des informations des véhicules (matricule, modèle, dates d'entrée et de sortie), mise à jour automatique du statut des véhicules, et interface utilisateur intuitive pour la gestion des enregistrements. Système de suivi en temps réel avec fonctionnalités d'ajout, modification et suppression.",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "MySQL", "Html5", "Css3", "Bootstrap 5"],
      current: false,
      featured: false,
      achievements: [
        "Gestion des informations des véhicules : matricule, modèle, dates d'entrée et de sortie",
        "Mise à jour automatique du statut des véhicules",
        "Fonctionnalités d'ajout, de modification et de suppression des véhicules",
        "Interface utilisateur intuitive pour la gestion des enregistrements"
      ]
    },
    {
      id: 5,
      title: "Projets Collaboratifs - Gestion des Équipes",
      company: "Imperium",
      period: "Décembre 2024 - Présent",
      location: "Casablanca, Maroc",
      description: "Interface interactive pour la gestion des projets et des tâches d'équipe",
      longDescription: "Développement d'une interface interactive avancée pour la gestion des projets collaboratifs avec intégration de tableaux de bord, suivi de l'avancement avec des indicateurs visuels, implémentation des rôles et permissions pour la gestion des équipes. Système de collaboration en temps réel avec notifications et mise à jour automatique des statuts.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Tailwind CSS", "Metronic", "Symfony", "Git", "GitLab"],
      current: true,
      featured: false,
      achievements: [
        "Conception et développement d'une interface interactive pour la gestion des projets et des tâches",
        "Intégration des tableaux de bord et suivi de l'avancement avec des indicateurs visuels",
        "Implémentation des rôles et permissions pour la gestion des équipes",
        "Technologies : React.js, Tailwind CSS, Metronic, Symfony, Postman, Git, GitLab"
      ]
    },
  
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: any; featured?: boolean }> = ({ project, featured = false }) => (
    <div className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
      featured ? 'lg:col-span-2' : ''
    }`}>
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Badge statut */}
        {project.current && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            En cours
          </div>
        )}
        
        {/* Overlay avec boutons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedProject(project.id)}
              className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-200"
              title="Voir les détails"
            >
              <Eye size={20} />
            </button>
            <button
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
              title="Projet professionnel"
            >
              <Code size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
            {project.company}
          </span>
        </div>
        
        <div className="flex items-center text-gray-200 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span className="mr-4">{project.period}</span>
          <MapPin size={14} className="mr-1" />
          <span>{project.location}</span>
        </div>
        
        <p className="text-gray-200 text-sm mb-3 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez mes réalisations professionnelles et projets personnels
          </p>
        </div>

        {/* Projets Mis en Avant */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Projets Principaux
          </h3>
          <div className="grid lg:grid-cols-4 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Autres Projets */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Autres Réalisations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <div className="text-gray-600 dark:text-gray-400">Projets Réalisés</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-400">Entreprises</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Années d'Expérience</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
        </div>

        {/* Appel à l'action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Intéressé par mon travail ? Discutons de votre prochain projet !
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contactez-moi
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* Modal Projet */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" onClick={() => setSelectedProject(null)}></div>

            <div className="inline-block align-bottom bg-white dark:bg-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>

                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedProjectData.title}
                    </h3>
                    {selectedProjectData.current && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                        En cours
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center mr-6">
                      <Users size={16} className="mr-2" />
                      {selectedProjectData.company}
                    </div>
                    <div className="flex items-center mr-6">
                      <Calendar size={16} className="mr-2" />
                      {selectedProjectData.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {selectedProjectData.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProjectData.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Réalisations clés
                    </h4>
                    <ul className="space-y-2">
                      {selectedProjectData.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
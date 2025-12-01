import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Calendar, MapPin, Users, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "LineUp Cinema Platform",
      company: "Imperium",
      period: "December 2024 - Present",
      location: "Casablanca, Morocco",
      description:
        "Advanced cinema platform with a modern user interface for browsing and managing movies.",
      longDescription:
        "Development of a complete cinema platform with an advanced UI allowing users to view upcoming and archived movies. Implementation of advanced filters, real-time notification system, sharing features, and display of the most viewed movies. Performance optimization and enhanced user experience with smooth animations and responsive design.",
      image:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Metronic",
        "Symfony",
        "Postman",
        "Git",
        "GitLab"
      ],
      current: true,
      featured: true,
      achievements: [
        "Developed the user interface for movie visualization",
        "Implemented advanced filters and notification management",
        "Added sharing features and display of top-viewed movies",
        "Optimized performance and overall user experience"
      ]
    },
    {
      id: 2,
      title: "Event Management Platform",
      company: "3W Media",
      period: "February 2024 - December 2024",
      location: "Casablanca, Morocco",
      description:
        "Complete event management system with advanced customization features.",
      longDescription:
        "Development of an end-to-end event management platform with customizable event lists, notification system, automatic reminders, personalized calendar handling, and event reservation system. The interface allows adding, editing, deleting events, linking contacts, and adding notes.",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: [
        "React.js",
        "Symfony 7",
        "MySQL",
        "Html5",
        "Css3",
        "Bootstrap 5",
        "API",
        "Git",
        "GitLab",
        "Postman"
      ],
      current: false,
      featured: true,
      achievements: [
        "Customized event list with complete CRUD",
        "Displayed event details with linked contacts",
        "Implemented notifications and automatic reminders",
        "Customized calendars and favorites management",
        "Event reservation system with linked notes"
      ]
    },
    {
      id: 3,
      title: "Complete E-commerce Website",
      company: "Minova Consulting",
      period: "July 2023 - September 2023",
      location: "Tinghir, Morocco",
      description:
        "E-commerce website with cart system, payment integration, and admin dashboard.",
      longDescription:
        "Design and development of a complete e-commerce platform with product listing customization, smart cart system with automatic pricing calculations, integration of multiple payment methods, and an admin interface for managing products, categories, and orders. Automatic product removal and full inventory management.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel 9", "Html5", "Css3", "Bootstrap 5", "Git", "GitLab"],
      current: false,
      featured: false,
      achievements: [
        "Customized product listing with detail display",
        "Added items to cart with total and quantity calculations",
        "Integrated payment redirection and payment method selection",
        "Admin panel: product and category management",
        "Order consultation and automatic product removal"
      ]
    },
    {
      id: 4,
      title: "Vehicle Fleet Management System",
      company: "Minova Consulting",
      period: "May 2022 - July 2022",
      location: "Tinghir, Morocco",
      description:
        "Complete fleet management system with real-time vehicle status updates.",
      longDescription:
        "Design and development of a complete fleet management system allowing vehicle information management (license plate, model, entry/exit dates), automatic status updates, and an intuitive interface for record handling. Includes add, edit, delete features and real-time tracking.",
      image:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "MySQL", "Html5", "Css3", "Bootstrap 5"],
      current: false,
      featured: false,
      achievements: [
        "Managed vehicle info: plate, model, entry/exit dates",
        "Automatic vehicle status updates",
        "CRUD operations for vehicle management",
        "Intuitive UI for managing all records"
      ]
    },
    {
      id: 5,
      title: "Collaborative Projects – Team Management",
      company: "Imperium",
      period: "December 2024 - Present",
      location: "Casablanca, Morocco",
      description:
        "Interactive platform for managing projects and team tasks.",
      longDescription:
        "Development of an advanced interactive interface for collaborative project management with dashboard integration, progress tracking with visual indicators, and implementation of roles and permissions. Real-time collaboration features with notifications and automatic status updates.",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React.js", "Tailwind CSS", "Metronic", "Symfony", "Git", "GitLab"],
      current: true,
      featured: false,
      achievements: [
        "Designed and developed an interactive interface for project and task management",
        "Integrated dashboards with visual progress indicators",
        "Implemented roles and permissions for team management",
        "Technologies: React.js, Tailwind CSS, Metronic, Symfony, Postman, Git, GitLab"
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard: React.FC<{ project: any; featured?: boolean }> = ({
    project,
    featured = false
  }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Status Badge */}
        {project.current && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            In Progress
          </div>
        )}

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedProject(project.id)}
              className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-200"
              title="View details"
            >
              <Eye size={20} />
            </button>
            <button
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
              title="Professional project"
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my professional and personal achievements
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-4 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in my work? Let's discuss your next project!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Me
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={() => setSelectedProject(null)}
            ></div>

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
                        In Progress
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
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProjectData.achievements.map(
                        (achievement: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Close
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

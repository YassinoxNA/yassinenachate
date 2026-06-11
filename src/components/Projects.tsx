import React, { useState } from "react";
import {
  Eye,
  X,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

const projects = [
  {
    id: 1,
    title: "Stock Management System",
    company: "Freelance",
    period: "2026",
    location: "Marrakech, Morocco",
    description:
      "Modern stock and inventory management platform for businesses.",
    longDescription:
      "Complete stock management solution with product management, inventory tracking, sales, suppliers, invoices, statistics dashboard, and responsive admin panel.",
    images: [
      "./assets/images/stock/1.png",
      "./assets/images/stock/2.png",
      "./assets/images/stock/3.png",
      "./assets/images/stock/4.png"
    ],
    technologies: [
      "React.js",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "Git"
    ],
    current: true,
    featured: true,
  },

  {
    id: 2,
    title: "LineUp Cinema Platform",
    company: "Imperium",
    period: "December 2024 - Present",
    location: "Casablanca, Morocco",
    description:
      "Advanced cinema platform with a modern user interface for browsing and managing movies.",
    longDescription:
      "Complete cinema platform with advanced filters, notifications, favorites, and optimized performance.",
    images: [
      "./assets/images/lineup/1.png",
      "./assets/images/lineup/2.png",
      "./assets/images/lineup/3.png",
      "./assets/images/lineup/4.png",
      "./assets/images/lineup/5.png",
      "./assets/images/lineup/6.png",
      "./assets/images/lineup/7.png"
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Symfony",
      "Git",
      "GitLab"
    ],
    current: true,
    featured: true,
  },

  {
    id: 3,
    title: "Event Management Platform",
    company: "3W Media",
    period: "February 2024 - December 2024",
    location: "Casablanca, Morocco",
    description:
      "Complete event and calendar management system with reminders and customization.",
    longDescription:
      "Event management solution with calendars, reminders, contacts, notes, and user settings.",
    images: [
      "./assets/images/events/1.png",
      "./assets/images/events/2.png",
      "./assets/images/events/3.png",
      "./assets/images/events/4.png",
      "./assets/images/events/5.png",
      "./assets/images/events/6.png",
      "./assets/images/events/7.png",
      "./assets/images/events/8.png"
    ],
    technologies: [
      "React.js",
      "Symfony 7",
      "MySQL",
      "Bootstrap"
    ],
    current: false,
    featured: true,
  },

  {
    id: 4,
    title: "Share+ – Social Media Management Platform",
    company: "Imperium",
    period: "December 2025 - Present",
    location: "Casablanca, Morocco",
    description:
      "All-in-one social media management platform for content creation, scheduling, and analytics.",
    longDescription:
      "Multi-network social media management platform allowing content creation, drag-and-drop scheduling, automated publishing, real-time analytics dashboards, and collaborative team workflows.",
    images: [
      "./assets/images/shareplus/1.png",
      "./assets/images/shareplus/2.png",
      "./assets/images/shareplus/3.png"
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Symfony",
      "REST API",
      "Postman",
      "Git",
      "GitLab"
    ],
    current: true,
    featured: true,
  },

  {
    id: 5,
    title: "Project+ – Collaborative Project Management Platform",
    company: "Imperium",
    period: "December 2025 - Present",
    location: "Casablanca, Morocco",
    description:
      "Collaborative platform for managing projects, tasks, and teams.",
    longDescription:
      "Project management solution with interactive dashboards, task tracking, role-based permissions, activity logs, and real-time notifications.",
    images: [
      "./assets/images/projectplus/1.png",
      "./assets/images/projectplus/2.png",
      "./assets/images/projectplus/3.png",
      "./assets/images/projectplus/4.png",
      "./assets/images/projectplus/5.png",
      "./assets/images/projectplus/6.png",
      "./assets/images/projectplus/7.png"
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Metronic",
      "Symfony",
      "Git",
      "GitLab"
    ],
    current: true,
    featured: false,
  },
];

  /* ---------------- PROJECT CARD ---------------- */
  const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const next = () =>
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );

    const prev = () =>
      setCurrentImage((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );

    return (
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
        {/* IMAGE SLIDER */}
       <div className="relative h-64 group">
  <img
    src={project.images[currentImage]}
    alt={project.title}
    className="w-full h-full object-cover transition-all duration-500"
  />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

  {/* PREVIOUS */}
  {project.images.length > 1 && (
    <button
      onClick={prev}
      className="absolute left-3 top-1/2 -translate-y-1/2
                 z-30 pointer-events-auto
                 bg-white/80 hover:bg-white
                 text-gray-800 px-3 py-1 rounded-full"
    >
      ‹
    </button>
  )}

  {/* NEXT */}
  {project.images.length > 1 && (
    <button
      onClick={next}
      className="absolute right-3 top-1/2 -translate-y-1/2
                 z-30 pointer-events-auto
                 bg-white/80 hover:bg-white
                 text-gray-800 px-3 py-1 rounded-full"
    >
      ›
    </button>
  )}

  {/* OVERLAY (ne bloque plus les clics) */}
  <div
    className="absolute inset-0 flex items-center justify-center
               opacity-0 group-hover:opacity-100 transition-opacity
               pointer-events-none z-20"
  >
    {/* Eye button */}
    <button
      onClick={() => setSelectedProject(project.id)}
      className="pointer-events-auto
                 bg-black/50 hover:bg-black/70
                 p-2 rounded-full"
    >
      <Eye className="text-white" size={42} />
    </button>
  </div>

  {/* DOTS */}
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2
                  flex gap-2 z-30">
    {project.images.map((_: any, i: number) => (
      <span
        key={i}
        onClick={() => setCurrentImage(i)}
        className={`w-2 h-2 rounded-full cursor-pointer
          ${i === currentImage ? "bg-white" : "bg-white/40"}`}
      />
    ))}
  </div>
</div>


        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-200">{project.company}</p>
        </div>
      </div>
    );
  };

  const selectedProjectData = projects.find(
    (p) => p.id === selectedProject
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A selection of my professional work
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full"
              >
                <X />
              </button>

              <img
                src={selectedProjectData.images[0]}
                className="w-full h-64 object-cover"
                alt={selectedProjectData.title}
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-2">
                {selectedProjectData.title}
              </h3>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Users className="mr-2" size={14} />
                {selectedProjectData.company}
                <Calendar className="ml-4 mr-2" size={14} />
                {selectedProjectData.period}
                <MapPin className="ml-4 mr-2" size={14} />
                {selectedProjectData.location}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {selectedProjectData.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProjectData.technologies.map(
                  (tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

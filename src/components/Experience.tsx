import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
 
{
  title: "Full Stack Developer (Freelance)",
  company: "Freelance",
  location: "Remote / Morocco",
  period: "March 2026 - Present",
  description:
    "Design and development of full-stack web applications for clients, focusing on scalable SaaS solutions and modern user experiences.",
  technologies: [
    "React.js",
    "Spring Boot",
    "PostgreSQL",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "JWT",
    "Git"
  ],
  current: true,
  projects: [
    {
      title: "Stock Management SaaS",
      tasks: [
        "Developed a complete SaaS application for stock, sales, and client management",
        "Implemented secure authentication system (JWT + email OTP)",
        "Managed products, stock levels, and automatic updates",
        "Created dashboard for sales tracking and client payments",
        "Designed responsive UI using React.js and Bootstrap",
        "Built REST APIs using Spring Boot",
        "Handled database design with PostgreSQL",
        "Prepared system for deployment on VPS / Hostinger"
      ]
    },
    {
      title: "Medical Appointment Booking System",
      tasks: [
        "Developed a web platform for managing medical appointments",
        "Implemented booking system with time slots and availability",
        "Created admin panel for managing doctors and schedules",
        "Designed responsive and user-friendly interface",
        "Integrated backend APIs for appointment management"
      ]
    }
  ]
},
    {
      title: "Full Stack Developer",
      company: "Imperium",
      location: "Casablanca, Morocco",
      period: "February 2024 - December 2025",
      description:
        "Development of advanced web platforms with a focus on performance optimization, scalability, and modern software architecture.",
      technologies: ["React.js", "Tailwind CSS", "Metronic", "Symfony", "Postman", "Git", "GitLab"],
      current: false,
      projects: [
         {
          title: "Share+ – Social Media Management Platform",
          tasks: [
            "Developed a complete multi-network social media management solution (Facebook, Instagram, LinkedIn…).",
            "Designed the marketing landing page including Hero, Features, Pricing, FAQ, Support, and Footer sections.",
            "Created a modern content editor allowing users to write, customize, and prepare cross-platform posts.",
            "Implemented a visual drag-and-drop scheduling calendar for planning and organizing posts.",
            "Built real-time analytics dashboards with engagement rate, reach, impressions, and performance indicators.",
            "Integrated 100% automated publishing system to post content across all connected networks.",
            "Developed collaborative team features: role assignment, content approval, and secure workspace.",
            "Implemented newsletter subscription with API integration and validation.",
            "Optimized UI/UX, SEO, performance, and responsiveness across all devices.",
            "Ensured smooth and scalable architecture for future features and integrations."
          ]
        }
        ,
        {
          title: "LineUp Project - Cinema Platform",
          tasks: [
            "Developed the user interface for browsing and viewing movies",
            "Implemented advanced filters (category, year, popularity, trends…) ",
            "Managed real-time notifications and favorites list",
            "Added sharing features and display of most viewed movies",
            "Optimized front-end performance (lazy loading, pagination, API caching)"
          ]
        },
        {
          title: "Project+ - Collaborative Project Management Platform",
          tasks: [
            "Designed the interface for project, task, and team management",
            "Integrated interactive dashboards with visual indicators (KPIs, progress…) ",
            "Implemented roles and permissions (Admin, Manager, Member, Guest)",
            "Managed activity logs, history tracking, and internal notifications",
            "Improved UX/UI using React.js, Tailwind CSS & Metronic"
          ]
        },
         {
      title: "Organizer – Event & Calendar Management Platform",
      tasks: [
        "Implemented full CRUD operations for events (create, edit, delete)",
        "Developed customizable calendars with themes, privacy, and multiple views",
        "Added reminders, favorites, and upcoming events panel",
        "Built a contact module linked to events",
        "Integrated notes management for each event",
        "Implemented advanced search and filtering across calendars",
        "Developed URL-based calendar subscription system",
        "Added user settings: language, region, timezone",
        "Created a modern and responsive UI using React.js & Tailwind CSS",
        "Ensured secure REST API communication with Symfony 7"
      ]
    }

      ]
    },




    {
      title: "Web Developer",
      company: "Minova Consulting",
      location: "Tinghir, Morocco",
      period: "July 2023 - September 2023",
      description:
        "Designed and developed a complete e-commerce website with cart, product management, and admin interface.",
      technologies: ["Laravel 9", "Html5", "Css3", "Bootstrap 5", "Git", "GitLab"],
      current: false,
      projects: [
        {
          title: "Minova E-commerce",
          tasks: [
            "Developed a product catalog with detailed display",
            "Managed shopping cart, total calculation, quantities, dynamic pricing",
            "Implemented checkout process & payment method",
            "Developed admin dashboard: products, categories, orders",
            "Automated product removal after order confirmation"
          ]
        }
      ]
    },

    {
      title: "Web Developer",
      company: "Minova Consulting",
      location: "Tinghir, Morocco",
      period: "May 2022 - July 2022",
      description:
        "Developed a fleet management system with automatic vehicle status updates.",
      technologies: ["PHP", "MySQL", "Html5", "Css3", "Bootstrap 5"],
      current: false,
      projects: [
        {
          title: "Fleet Management System",
          tasks: [
            "Managed vehicles: license plate, model, in/out, status",
            "Automated vehicle status based on usage date",
            "Full CRUD (add, edit, delete)",
            "Simplified UI for data management"
          ]
        }
      ]
    }
  ];

  const education = [
    {
      degree: "Engineering Degree in Information Systems",
      school: "Higher Institute of Engineering & Business",
      location: "Marrakech, Morocco",
      period: "September 2022 - September 2024",
      description: "Engineering training specialized in information systems and software development",
      type: "diploma"
    },
    {
      degree: "Professional Bachelor's in Computer Science",
      school: "Private University of Marrakech",
      location: "Marrakech, Morocco",
      period: "September 2021 - July 2022",
      description: "Professional training in computer science with a focus on development",
      type: "license"
    },
    {
      degree: "Specialized Technician Diploma in Software Development",
      school: "Institute of Applied Technology",
      location: "Tinghir, Morocco",
      period: "September 2019 - July 2021",
      description: "Technical training specialized in programming and software development",
      type: "technical"
    },
    {
      degree: "Baccalaureate in Physical Sciences",
      school: "Salah Eddine El Ayoubi High School",
      location: "Tinghir, Morocco",
      period: "September 2018 - June 2019",
      description: "Scientific high school diploma with specialization in physical sciences",
      type: "bac"
    }
  ];

  const certifications = [
    "JavaScript",
    "Becoming an AI Specialist",
    "Angular for Beginners: From Basics to Advanced Projects",
    "Docker Essentials"
  ];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case 'diploma': return '🎓';
      case 'license': return '📜';
      case 'technical': return '🔧';
      case 'bac': return '📚';
      default: return '🎓';
    }
  };

  const getEducationColor = (type: string) => {
    switch (type) {
      case 'diploma': return 'from-purple-600 to-blue-600';
      case 'license': return 'from-blue-600 to-cyan-600';
      case 'technical': return 'from-green-600 to-teal-600';
      case 'bac': return 'from-orange-600 to-red-600';
      default: return 'from-blue-600 to-purple-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- TITLE --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A rich and diverse experience in web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- WORK EXPERIENCE --- */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
              <Briefcase className="mr-3 text-blue-600" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  
                  <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    exp.current ? 'ring-2 ring-blue-600 ring-opacity-50' : ''
                  }`}>

                    {/* CURRENT BADGE */}
                    {exp.current && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Current
                      </div>
                    )}

                    {/* HEADER */}
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

                    {/* DESCRIPTION */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* PROJECTS */}
                    {exp.projects && (
                      <div className="mb-4 space-y-4">
                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex}>
                            <h5 className="font-semibold text-gray-900 dark:text-white flex items-center mb-1">
                              <span className="mr-2">📌</span> {project.title}
                            </h5>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-1">
                              {project.tasks.map((task, tIndex) => (
                                <li key={tIndex}>{task}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* TECHNOLOGIES */}
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

          {/* ---- EDUCATION + CERTIFICATIONS ---- */}
          <div className="space-y-12">

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Degrees & Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >

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

            {/* Résumé édus */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Academic Summary
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Education Level:</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">Master’s Degree (Engineer)</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialization:</span>
                  <span className="font-medium">Information Systems</span>
                </div>
                <div className="flex justify-between">
                  <span>Years of Study:</span>
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

import React from "react";
import { Heart, Target, Zap } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate",
      description: "Always exploring new technologies and best practices.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on clean architecture, performance and delivery.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovative",
      description: "Creative solutions for real-world challenges.",
    },
  ];

  return (
    <section id="about" className="py-5 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ---- Title ---- */}
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
       
        </div>

        {/* ---- Content ---- */}
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div className="space-y-6">

            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Hi! I'm <span className="font-semibold">Yassine Nachate</span>, a Full Stack Developer focused on
                building modern, scalable, and user-centric web applications. I mainly work with React
                on the Front-End, and Symfony, Laravel & Spring Boot on the Back-End.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I enjoy transforming ideas into real products through clean architecture, high-performance
                APIs and intuitive UI/UX. My goal is to build applications that are fast, reliable and
                meaningful for users.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Curious and constantly learning, I love challenges that push me to grow — whether that
                means exploring new technologies, solving complex problems, or improving existing systems.
              </p>
            </div>

            {/* ---- Highlight Cards ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

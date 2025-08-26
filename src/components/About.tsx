import React from 'react';
import { User, Heart, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
  
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionné",
      description: "Toujours à la recherche des dernières technologies"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Orienté résultats",
      description: "Focus sur la qualité et la performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovant",
      description: "Solutions créatives pour chaque défi"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive au quotidien
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Bonjour ! Je suis Yassine Nachate, développeur Front-End , je me spécialise dans la création d'interfaces 
                utilisateur modernes et performantes en utilisant React, Angular et les dernières technologies web.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Mon expertise s'étend du développement de plateformes cinématographiques complexes 
                aux systèmes de gestion d'événements, en passant par des solutions e-commerce innovantes. 
                Je maîtrise l'ensemble de l'écosystème JavaScript moderne, incluant TypeScript, 
                Tailwind CSS, et les frameworks backend comme Symfony et Laravel.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionné par l'apprentissage continu, je me forme régulièrement aux nouvelles 
                technologies et méthodologies. Mon objectif est de créer des expériences utilisateur 
                exceptionnelles qui allient performance, accessibilité et design moderne.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
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
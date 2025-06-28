import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Styling & UI",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "CSS3", level: 90 },
        { name: "HTML5", level: 95 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 80 },
        { name: "Symfony", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Outils & Autres",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitLab", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  const languages = [
    { name: "Arabe", level: 100, description: "Langue maternelle" },
    { name: "Français", level: 85, description: "Courant" },
    { name: "Anglais", level: 70, description: "Intermédiaire" }
  ];

  const SkillBar: React.FC<{ skill: { name: string; level: number }; delay: number; color: string }> = 
    ({ skill, delay, color }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: `${delay}ms`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions exceptionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Langues */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Langues
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {lang.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {lang.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${lang.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  {lang.level}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Autres compétences */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Autres Compétences & Qualités
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Esprit d\'équipe', 'Sérieux', 'Ponctuel', 'Agile/Scrum', 'API REST',
              'Responsive Design', 'Performance Optimization', 'UML', 'Merise',
              'Modélisation', 'MongoDB', 'SQL Server', 'Oracle'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
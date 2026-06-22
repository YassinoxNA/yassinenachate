import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Heart,
  Target,
  Zap,
} from "lucide-react";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Full Stack Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 600);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* --- PROFILE IMAGE --- */}
        <div className="mb-8">
          <div className="relative mx-auto w-48 h-48 mb-8">
            <img
              src="./assets/images/Yasine.jpg"
              alt="Yassine Nachate"
              className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
          </div>
        </div>

        {/* --- NAME / ROLE --- */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Yassine Nachate
        </h1>

        <div className="h-20 mb-8">
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* --- INTRO TEXT --- */}
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate Full Stack Developer specializing in modern Front-End applications with React,
          and robust Back-End development using Symfony, Laravel, and Spring Boot. I build secure,
          scalable and high-performance web solutions powered by RESTful APIs.
        </p>

        {/* --- CONTACT ROW --- */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <MapPin size={20} />
            <span>Rabat, Morocco</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Mail size={20} />
            <span>yassinenachat4@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Phone size={20} />
            <span>+212 653 321215</span>
          </div>
        </div>

        {/* --- SOCIAL ICONS --- */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/yassine-nachate-357201229"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/YassinoxNA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github size={24} />
          </a>
        </div>

        {/* --- CTA BUTTONS (INCLUDING CV) --- */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </button>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Contact Me
          </a>

          {/* ✅ DOWNLOAD CV BUTTON */}
          <button
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.open('/assets/cv/YassineNachate.pdf', '_blank')}
          >
            Download CV
          </button>
        </div>

        {/* --- ABOUT ME SECTION (INTEGRATED) --- */}
        {/* <div className="max-w-4xl mx-auto mt-24">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h3>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm <span className="font-semibold">Yassine Nachate</span>, a Full Stack Developer with a
            strong focus on building modern, scalable, and user-centric web applications. I work
            mainly with React on the Front-End and Symfony, Laravel & Spring Boot on the Back-End.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I enjoy transforming ideas into real products through clean architecture, high-performance
            APIs and intuitive UI/UX. My goal is to deliver applications that are fast, reliable and
            meaningful for users.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Curious and constantly learning, I love challenges that push me to grow — whether that
            means exploring new technologies, solving complex problems, or improving existing systems.
          </p>

         
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Passionate
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Always exploring new tech and best practices.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Results-Driven
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Focused on quality, performance and delivery.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Innovative
                </h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Creative solutions for real-world challenges.
              </p>
            </div>
          </div>
        </div> */}

        {/* --- SCROLL ARROW --- */}
        <div className="mt-16 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

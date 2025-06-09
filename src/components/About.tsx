import React from 'react';
import { Code, Zap, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AmanPhoto from '../assets/Aman_photo.jpg'; // adjust the path based on your file location


const About: React.FC = () => {
  const { ref, inView } = useScrollAnimation();

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '60+' },
    { icon: Users, label: 'Happy Clients', value: '55+' },
    { icon: Zap, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Awards Won', value: '6+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
                  <img 
                    src={AmanPhoto} 
                    alt="Aman R Saini" 
                    className="w-72 h-72 object-cover rounded-full" 
                  />

                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Passionate Web Developer & Designer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over 3 years of experience in freelance web development, I specialize in 
                creating modern, responsive websites that not only look stunning but also deliver 
                exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm committed to understanding your business goals and translating them into 
                digital solutions that drive results. From small business websites to complex 
                web applications, I bring creativity, technical expertise, and attention to detail 
                to every project.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Trophy, 
  FolderOpen, 
  Mail, 
  MessageCircle, 
  Linkedin,
  Github,
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  ExternalLink,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'certificates', 'experience', 'achievements', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'SQL', icon: Database, color: 'bg-blue-500' },
    { name: 'Python', icon: Code, color: 'bg-green-500' },
    { name: 'Excel', icon: FileSpreadsheet, color: 'bg-emerald-500' },
    { name: 'Tableau', icon: BarChart3, color: 'bg-purple-500' }
  ];

  const certificates = [
    {
      title: 'Tableau for Finance',
      platform: 'Coursera',
      date: 'March 2024',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'SQL 50 on LeetCode',
      platform: 'LeetCode',
      date: 'February 2024',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Python for Data Analysis',
      platform: 'DataCamp',
      date: 'January 2024',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'TechCorp Solutions',
      period: 'Jun 2023 - Aug 2023',
      contributions: [
        'Analyzed customer behavior data using SQL and Python',
        'Created interactive dashboards in Tableau',
        'Improved data processing efficiency by 25%'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'UIN Syarif Hidayatullah Jakarta',
      period: 'Sep 2022 - May 2023',
      contributions: [
        'Conducted statistical analysis on economic development data',
        'Prepared research reports and visualizations',
        'Supported faculty research projects'
      ]
    }
  ];

  const achievements = [
    {
      title: 'National Data Science Competition Finalist',
      description: 'Top 10 finalist in the Indonesian Data Science Challenge 2023',
      date: '2023'
    },
    {
      title: 'Dean\'s List Recognition',
      description: 'Achieved Dean\'s List for academic excellence in 2022',
      date: '2022'
    },
    {
      title: 'Best Research Paper Award',
      description: 'Won best undergraduate research paper in Development Economics',
      date: '2023'
    }
  ];

  const projects = [
    {
      title: 'E-commerce Sales Dashboard',
      description: 'Interactive Tableau dashboard analyzing sales trends and customer behavior for an e-commerce platform.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      tech: ['Tableau', 'SQL', 'Excel'],
      github: '#'
    },
    {
      title: 'Economic Development Analysis',
      description: 'Python-based analysis of regional economic indicators and their impact on development outcomes.',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      github: '#'
    },
    {
      title: 'Customer Segmentation Model',
      description: 'Machine learning model to segment customers based on purchasing behavior and demographics.',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      tech: ['Python', 'Scikit-learn', 'SQL'],
      github: '#'
    },
    {
      title: 'Financial Portfolio Tracker',
      description: 'Real-time portfolio tracking application with risk analysis and performance metrics.',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      tech: ['Excel', 'VBA', 'Power BI'],
      github: '#'
    }
  ];

  return (
    <div className="font-inter bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yusuf Bilal
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <User size={64} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Yusuf Bilal
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
                Data Analyst
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                "Turning Data into Insightful Stories"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-12 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate Data Analyst with a strong foundation in Development Economics from UIN Syarif Hidayatullah Jakarta. My journey in data analysis began during my undergraduate studies, where I discovered the power of transforming raw data into meaningful insights that drive decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With expertise in SQL, Python, Excel, and Tableau, I specialize in uncovering patterns and trends that tell compelling stories. My background in economics provides me with a unique perspective on data interpretation, allowing me to bridge the gap between technical analysis and business strategy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm constantly learning and expanding my skill set to stay at the forefront of data analytics. My goal is to help organizations make data-driven decisions that create positive impact and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Bachelor's Degree in Development Economics
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    UIN Syarif Hidayatullah Jakarta
                  </p>
                  <p className="text-gray-600 mb-4">
                    Graduated with a focus on economic development, statistical analysis, and research methodology.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
                      GPA: 3.34
                    </div>
                    <div className="text-gray-500">
                      2020 - 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.name}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-blue-600 mr-3" />
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${cert.color}`}>
                    {cert.platform}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.contributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <Trophy size={24} className="text-yellow-500 mr-3" />
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <FolderOpen size={48} className="text-white opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                    <Github size={20} className="mr-2" />
                    View on GitHub
                    <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and data-driven projects. Let's turn your data into insights!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <a
              href="mailto:yusuf.bilal@example.com"
              className="flex items-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Mail size={24} className="text-red-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">yusuf.bilal@example.com</p>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/yusufbilal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <Linkedin size={24} className="text-blue-600 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-semibold text-gray-900">LinkedIn</p>
                <p className="text-gray-600">Connect with me</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <MessageCircle size={24} className="text-green-500 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-gray-600">Quick chat</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Yusuf Bilal. Crafted with React.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
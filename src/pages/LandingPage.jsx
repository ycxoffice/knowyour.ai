import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Database,
  Cpu,
  Users,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";

const ModernLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const section = Math.floor(window.scrollY / window.innerHeight);
      setActiveSection(section);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Models Database",
      description: "Explore LLMs, CNNs, RNNs, GANs",
      color: "from-pink-600 to-purple-600",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Use Case Analysis",
      description: "Deep dive into AI applications",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global AI Ecosystem",
      description: "Map worldwide AI innovation",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Future of AI",
      description: "Track emerging AI trends",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              KnowYourAI
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7298341188724506625",
                  "_blank"
                )
              }
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-opacity"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),rgba(0,0,0,0.5))]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500/30 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/30 rounded-full filter blur-3xl animate-float-delay"></div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Know Your AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            Discover the world's most comprehensive AI companies database
          </p>
          <button
            onClick={() => navigate("/CompanyList")}
            className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-all duration-300 animate-fade-in-delay-2"
          >
            Explore Now
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Brain className="w-16 h-16 text-blue-500/50" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-delay">
            <Cpu className="w-12 h-12 text-purple-500/50" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float">
            <Database className="w-14 h-14 text-pink-500/50" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative min-h-screen bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Discover the Future of AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${feature.color} blur-3xl -z-10`}
                ></div>
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="relative min-h-screen bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1000+", label: "Companies", icon: <Database /> },
              { value: "5000+", label: "AI Models", icon: <Brain /> },
              { value: "10K+", label: "Patents", icon: <Database /> },
              { value: "50K+", label: "Connections", icon: <Users /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  {React.cloneElement(stat.icon, {
                    className: "w-12 h-12 text-blue-500",
                  })}
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {stat.value}
                  </span>
                  <span className="text-gray-400">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the revolution in AI intelligence. Access the world's most
            comprehensive AI database today.
          </p>
          <button className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default ModernLandingPage;

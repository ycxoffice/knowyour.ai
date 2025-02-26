import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Database,
  Cpu,
  Users,
  ArrowRight,
  Globe,
  Sparkles,
  ChevronDown,
  Layers,
  Code,
  Zap,
  Star,
} from "lucide-react";

const FuturisticLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };

      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll(".parallax-element");
        elements.forEach((el) => {
          const speed = el.getAttribute("data-speed");
          const x = mousePosition.current.x * speed;
          const y = mousePosition.current.y * speed;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    // Scroll effects
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const section = Math.floor(window.scrollY / window.innerHeight);
      setActiveSection(section);

      // Fade in elements when they enter viewport
      const fadeElements = document.querySelectorAll(".fade-in-element");
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Futuristic features grid
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Advanced AI Models",
      description:
        "Comprehensive database of LLMs, CNNs, RNNs, GANs and transformers",
      color: "from-fuchsia-600 to-purple-600",
      gradient:
        "conic-gradient(from 225deg at 50% 50%, #ff00cc, #3300ff, #00ffff, #ff00cc)",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Use Case Analysis",
      description: "Deep dive into AI applications across industries",
      color: "from-blue-600 to-cyan-600",
      gradient:
        "conic-gradient(from 90deg at 50% 50%, #0066ff, #00ccff, #00ffcc, #0066ff)",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global AI Ecosystem",
      description: "Interactive map of worldwide AI innovation hubs",
      color: "from-green-600 to-teal-600",
      gradient:
        "conic-gradient(from 45deg at 50% 50%, #00cc66, #00cccc, #0099ff, #00cc66)",
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Future of AI",
      description: "Track emerging AI trends and breakthroughs",
      color: "from-orange-600 to-red-600",
      gradient:
        "conic-gradient(from 315deg at 50% 50%, #ff3300, #ff0099, #cc00ff, #ff3300)",
    },
  ];

  // Advanced stats with animated counters
  const stats = [
    {
      value: "1,000+",
      label: "Companies",
      icon: <Database />,
      accent: "#6366f1",
    },
    { value: "5,000+", label: "AI Models", icon: <Brain />, accent: "#8b5cf6" },
    { value: "10K+", label: "Patents", icon: <Code />, accent: "#ec4899" },
    { value: "50K+", label: "Connections", icon: <Users />, accent: "#06b6d4" },
  ];

  // 3D Card effect component
  const Card3D = ({ children, className }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (y - 0.5) * 10;
      const rotateY = (0.5 - x) * 10;

      setRotation({ x: rotateX, y: rotateY });
      setGlowPosition({ x: x * 100, y: y * 100 });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setGlowPosition({ x: 50, y: 50 });
    };

    return (
      <div
        ref={cardRef}
        className={`relative transform transition-transform duration-200 perspective-1000 ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl opacity-80"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.3) 0%, rgba(0, 0, 0, 0) 60%)`,
          }}
        />
        {children}
      </div>
    );
  };

  return (
    <div className="bg-black text-white overflow-hidden relative">
      {/* Animated background grid */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(20, 20, 40, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(20, 20, 40, 0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,50,80,0.15),rgba(0,0,0,0.7))]"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-indigo-500/20 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur rounded-lg"></div>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                KnowYourAI
              </span>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7298341188724506625",
                  "_blank"
                )
              }
              className="relative px-6 py-2 overflow-hidden group"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative flex items-center text-white font-medium">
                Subscribe <Star className="ml-2 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Animated hero background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,50,80,0.2),rgba(0,0,0,0.5))]"></div>

          {/* Floating orbs */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full parallax-element"
            data-speed="20"
            style={{
              background:
                "radial-gradient(circle at center, rgba(99, 102, 241, 0.15), transparent 60%)",
              filter: "blur(50px)",
            }}
          ></div>

          <div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full parallax-element"
            data-speed="30"
            style={{
              background:
                "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 70%)",
              filter: "blur(40px)",
              animation: "pulse-slow 8s infinite alternate",
            }}
          ></div>

          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full parallax-element"
            data-speed="25"
            style={{
              background:
                "radial-gradient(circle at center, rgba(236, 72, 153, 0.15), transparent 70%)",
              filter: "blur(45px)",
              animation: "pulse-slow 12s infinite alternate-reverse",
            }}
          ></div>
        </div>

        {/* Floating neural network nodes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full parallax-element"
              data-speed={Math.random() * 20 + 10}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                background: `rgba(${Math.random() * 100 + 100}, ${
                  Math.random() * 100 + 100
                }, 255, ${Math.random() * 0.5 + 0.5})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${
                  Math.random() * 10 + 5
                }px rgba(99, 102, 241, 0.6)`,
                animation: `float ${
                  Math.random() * 10 + 10
                }s infinite ease-in-out alternate`,
              }}
            />
          ))}

          {/* Connection lines using SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {[...Array(10)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                style={{
                  animation: `pulse-opacity ${
                    Math.random() * 5 + 5
                  }s infinite alternate`,
                }}
              />
            ))}
          </svg>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="relative mb-8 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur rounded-xl"></div>
            <h1 className="relative text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Know Your AI
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto animate-fade-in-delay relative">
            <span className="bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-lg px-6 py-2 backdrop-blur-sm">
              Discover the world's most comprehensive AI companies database
            </span>
          </p>

          <button
            onClick={() => navigate("/CompanyList")}
            className="group relative px-10 py-6 overflow-hidden rounded-full bg-black"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-500 ease-out group-hover:w-full"></div>
            <div className="relative flex items-center justify-center text-lg font-semibold">
              Explore Now
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-10 h-10 text-white/70" />
          </div>
        </div>
      </section>

      {/* Features Grid with 3D Cards */}
      <section id="features" className="relative py-32 bg-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/5 to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-element">
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur rounded-lg"></div>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Discover the Future of AI
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card3D key={index} className="fade-in-element">
                <div className="group relative p-8 rounded-2xl bg-[#0A0A0A] border border-gray-800 h-full overflow-hidden z-10">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: feature.gradient,
                      opacity: 0.07,
                    }}
                  ></div>

                  <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="flex items-start space-x-6 relative z-10">
                    <div className={`p-3 rounded-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-purple-500/80 opacity-80"></div>
                      <div className="relative">{feature.icon}</div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Perspective */}
      <section id="stats" className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
            {stats.map((stat, index) => (
              <Card3D key={index} className="h-full fade-in-element">
                <div className="relative p-8 rounded-2xl bg-[#0A0A0A] border border-gray-800 h-full z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.accent}20, transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                  ></div>

                  <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                    <div className="p-3 rounded-full relative">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: `${stat.accent}20` }}
                      ></div>
                      <div className="relative" style={{ color: stat.accent }}>
                        {stat.icon}
                      </div>
                    </div>

                    <span
                      className="text-4xl font-bold bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, white, ${stat.accent})`,
                      }}
                    >
                      {stat.value}
                    </span>

                    <span className="text-gray-400">{stat.label}</span>
                  </div>

                  {/* Decorative corners */}
                  <div
                    className="absolute top-0 left-0 w-4 h-4 border-t border-l"
                    style={{ borderColor: stat.accent }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 w-4 h-4 border-t border-r"
                    style={{ borderColor: stat.accent }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 w-4 h-4 border-b border-l"
                    style={{ borderColor: stat.accent }}
                  ></div>
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 border-b border-r"
                    style={{ borderColor: stat.accent }}
                  ></div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with dimensional depth */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/5 to-black"></div>

          {/* 3D Grid Floor */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[400px] perspective-1000"
            style={{
              transform: "rotateX(60deg)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              opacity: 0.5,
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-element">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur rounded-lg"></div>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Ready to Explore?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative">
            <span className="bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-lg px-6 py-2 backdrop-blur-sm">
              Join the revolution in AI intelligence. Access the world's most
              comprehensive AI database today.
            </span>
          </p>

          <button className="relative px-12 py-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Get Started Now
              </span>
              <Zap className="w-6 h-6 ml-4 text-indigo-400 group-hover:animate-pulse" />
            </div>
          </button>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(15px);
          }
          50% {
            transform: translateY(-30px) translateX(0px);
          }
          75% {
            transform: translateY(-15px) translateX(-15px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-opacity {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        .fade-in-element {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-in-element.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default FuturisticLandingPage;

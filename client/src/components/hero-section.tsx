import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Smartphone, Cloud } from "lucide-react";

export default function HeroSection() {
  const [currentTech, setCurrentTech] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const technologies = [
    { icon: Code, text: "Full-Stack Developer" },
    { icon: Database, text: "Database Designer" },
    { icon: Smartphone, text: "Responsive Web Apps" },
    { icon: Cloud, text: "Cloud Enthusiast" }
  ];

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Rotate tech text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  // Particle Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    const particles: any[] = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.opacity})`;
        ctx.fill();
      });

      const maxDistance = window.innerWidth < 768 ? 80 : 100;

      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((other) => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.1 *
              (1 - distance / maxDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE - TEXT */}
          <div className="text-center md:text-left">

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-blue-400">Mahesh K</span>
            </h1>

            {/* Rotating Tech */}
            <div className="text-xl sm:text-2xl text-blue-200 mb-6 h-12 flex items-center justify-center md:justify-start">
              <div className="flex items-center space-x-3 transition-all duration-500">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 transition-all duration-500 ${
                        index === currentTech
                          ? "opacity-100 scale-110"
                          : "opacity-30 scale-95"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span>{tech.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              Engineering Graduate passionate about building scalable applications,
              secure systems, and solving real-world problems using technology and
              strategic thinking.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
                onClick={scrollToProjects}
              >
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img
                  src="https://ik.imagekit.io/MAHESHID/IMG_20240929_131335.jpg.jpeg"
                  alt="Mahesh K"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl -z-10 rounded-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
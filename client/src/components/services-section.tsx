import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, TrendingUp, Shield, Rocket } from "lucide-react";

const builds = [
  {
    title: "Scalable Web Applications",
    description:
      "I design and develop responsive full-stack web applications using modern frameworks like React.js and Node.js with clean UI and optimized performance.",
    category: "Full-Stack Development",
    icon: Code,
  },
  {
    title: "Secure Data Systems",
    description:
      "I build secure systems with authentication, database management, and structured backend logic. Focused on reliability and data integrity.",
    category: "Backend & Database",
    icon: Database,
  },
  {
    title: "AI-Driven Solutions",
    description:
      "I explore AI-powered systems including intelligent screening platforms and prompt engineering for automation and innovation.",
    category: "AI & Innovation",
    icon: Brain,
  },
  {
    title: "Marketing Strategy & Branding",
    description:
      "I develop complete marketing strategies including positioning, branding, audience targeting, and digital growth planning for products and startups.",
    category: "Strategy & Growth",
    icon: TrendingUp,
  },
  {
    title: "Business & Deal Closing",
    description:
      "Strong communication and negotiation skills with the ability to convert leads into clients and build long-term professional relationships.",
    category: "Business Skills",
    icon: Rocket,
  },
  {
    title: "System Security & Architecture",
    description:
      "I focus on designing structured system architectures with authentication, OTP verification, and secure data workflows.",
    category: "System Design",
    icon: Shield,
  },
];

export default function WhatIBuildSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-blue-600">I Build</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining technology, strategy, and business thinking to create impactful digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builds.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                <CardContent className="p-8">

                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      {item.category}
                    </span>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
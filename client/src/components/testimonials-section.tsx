import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lightbulb, Rocket, Award, Trophy, BookOpen } from "lucide-react";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Impact & <span className="text-blue-400">Recognition</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Real-world execution, innovation-driven mindset, and continuous learning journey.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Shield className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">
                Biometric Healthcare System
              </h3>
              <p className="text-blue-200 text-sm">
                Developed fingerprint + OTP-based Patient History Access System for secure emergency medical data access.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">
                Patent-Oriented Innovation
              </h3>
              <p className="text-blue-200 text-sm">
                Preparing documentation and exploring patent filing for healthcare system concept.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Rocket className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">
                3D Real Estate Dashboard
              </h3>
              <p className="text-blue-200 text-sm">
                Built AutoCAD-to-3D visualization platform with role-based access and secure dashboard system.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-6 text-center">
              <Award className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">
                Marketing & Branding Strategy
              </h3>
              <p className="text-blue-200 text-sm">
                Designed marketing strategies, branding systems, and revenue-focused digital solutions.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Certifications Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            Certifications & Learning
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4">

          <Badge className="px-4 py-2 bg-blue-600/20 text-blue-300 border border-blue-400/30">
            Python Certification – SoloLearn
          </Badge>

          <Badge className="px-4 py-2 bg-green-600/20 text-green-300 border border-green-400/30">
            C Programming – Bharathidasan University (2019)
          </Badge>

          <Badge className="px-4 py-2 bg-purple-600/20 text-purple-300 border border-purple-400/30">
            Cambridge BEC – 2022
          </Badge>

          <Badge className="px-4 py-2 bg-orange-600/20 text-orange-300 border border-orange-400/30">
            Acquiring Data – NASSCOM
          </Badge>

          <Badge className="px-4 py-2 bg-pink-600/20 text-pink-300 border border-pink-400/30">
            Digital Marketing & E-commerce – Coursera
          </Badge>

          <Badge className="px-4 py-2 bg-yellow-600/20 text-yellow-300 border border-yellow-400/30">
            Java – QSpiders
          </Badge>

          <Badge className="px-4 py-2 bg-indigo-600/20 text-indigo-300 border border-indigo-400/30">
            Full-Stack Web Development (Self-Learning)
          </Badge>

          <Badge className="px-4 py-2 bg-red-600/20 text-red-300 border border-red-400/30">
            Healthcare System Innovation Project
          </Badge>

        </div>

      </div>
    </section>
  );
}
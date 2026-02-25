import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Target, Lightbulb, GraduationCap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A practical engineer who blends technology, creativity, and real-world
            problem solving to build meaningful digital solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Who I Am */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Who I Am</h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              I am a practical, idea-driven engineering student who doesn’t just study concepts — I build real solutions.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              I constantly think:
              <br />
              • What real problem exists?
              <br />
              • How can technology solve it simply?
              <br />
              • How can this be useful in real life?
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              This mindset has helped me build full-stack healthcare systems, 3D visualization dashboards, and real-world web applications.
            </p>
          </div>

          {/* Core Strength */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">My Core Strength</h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              I focus on solving real-world problems — especially in healthcare,
              emergency systems, real estate visualization, and user accessibility.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              I combine technical skills (React, Firebase, databases, authentication)
              with creativity (UI design, branding, digital content).
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              I enjoy building systems that are secure, practical, and scalable.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  B.E – Computer Science & Engineering
                </h4>
                <p className="text-gray-600 text-sm">
                  Panimalar Engineering College – 2027
                </p>
                <p className="text-blue-600 font-medium mt-2">
                  CGPA: 7.4 / 10
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white border-green-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Class XII – CBSE
                </h4>
                <p className="text-gray-600 text-sm">
                  Mahatma Global Gateway School – 2023
                </p>
                <p className="text-green-600 font-medium mt-2">
                  70%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Class X – CBSE
                </h4>
                <p className="text-gray-600 text-sm">
                  Vairams Public School – 2021
                </p>
                <p className="text-purple-600 font-medium mt-2">
                  58%
                </p>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Vision Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Where I’m Headed
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              I aim to work in product-based companies, health-tech, gov-tech,
              or SaaS startups — building scalable systems that create real-world
              impact. I am continuously learning, experimenting, and improving.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
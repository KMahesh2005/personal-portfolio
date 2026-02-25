import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Patient History Access System",
    year: "2025",
    category: "Healthcare | Security",
    imageUrl:
      "https://ik.imagekit.io/maheshk/pexels-rdne-6129579%20(1).jpg?updatedAt=1751631237423",
    description:
      "A fingerprint-based emergency medical data access system with OTP verification, guardian access, and hospital authentication. Designed for secure real-time emergency healthcare access.",
    technologies: [
      "React",
      "Firebase",
      "JavaScript",
      "Fingerprint Devices",
      "OTP & SMS APIs"
    ],
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    title: " Builders – 3D Dashboard",
    year: "2025",
    category: "Real Estate | Full-Stack",
    imageUrl:
      "https://ik.imagekit.io/maheshk/Screenshot%202025-07-03%20224817.png?updatedAt=1751563376074",
    description:
      "Full-stack platform converting AutoCAD designs into interactive 3D models with role-based access, secure login, and client-wise management dashboard.",
    technologies: [
      "React",
      "Firebase",
      "Cloudinary",
      "JavaScript",
      "3D Model Viewer"
    ],
    projectUrl: "https://github.com/KMahesh2005",
    githubUrl: "https://github.com/KMahesh2005",
  },
  {
    title: "Patient Management System",
    year: "2024",
    category: "Web Application",
    imageUrl:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a590e",
    description:
      "Hospital-oriented web application with patient registration, backend logic, and database management using PHP & MySQL.",
    technologies: ["React", "PHP", "MySQL"],
    projectUrl: "https://github.com/KMahesh2005",
    githubUrl: "https://github.com/KMahesh2005",
  },
  {
    title: "Company Portfolio Website (AI Enabled)",
    year: "2025",
    category: "Branding | Web",
    imageUrl:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    description:
      "Modern portfolio website with AI-assisted features for branding, service showcase, and client engagement.",
    technologies: ["React", "UI/UX", "AI Tools"],
    projectUrl: "https://github.com/KMahesh2005",
    githubUrl: "https://github.com/KMahesh2005",
  },
  {
    title: "AutoCAD → 3D Visualization Project",
    year: "2025",
    category: "Architecture | 3D",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    description:
      "Converted 2D AutoCAD house plans into 3D visualization models for real estate presentations and integrated them into a client dashboard.",
    technologies: ["AutoCAD", "React", "GLTF/GLB"],
    projectUrl: "https://github.com/KMahesh2005",
    githubUrl: "https://github.com/KMahesh2005",
  },
  {
    title: "Marketing & Digital Design Projects",
    year: "2024-2025",
    category: "Marketing | Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    description:
      "Developed branding strategies, UI designs, visiting cards, cinematic edits, and revenue-focused creative content for startups and personal brands.",
    technologies: ["Brand Strategy", "Canva", "UI Design", "Content Marketing"],
    projectUrl: "https://github.com/KMahesh2005",
    githubUrl: "https://github.com/KMahesh2005",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful full-stack applications, secure healthcare systems,
            3D real estate dashboards, and marketing-driven digital solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white border-gray-200 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-sm">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {project.category}
                  </Badge>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-blue-700 border-blue-200 bg-blue-50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
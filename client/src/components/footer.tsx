import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Code2,
  Download,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ---------- About ---------- */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Mahesh<span className="text-blue-400"> K</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Practical engineer focused on building secure systems,
              full-stack applications, and real-world digital solutions
              that create meaningful impact.
            </p>

            {/* 🔥 Resume Download Button Only */}
            <div className="flex pt-2">
              <a
                href="/Mahesh_K_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium border border-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/in/mahesh-k-4641ba311/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/KMahesh2005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/itzz_mahesh12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://leetcode.com/u/K_Mahesh12/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ---------- Projects ---------- */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Projects</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors">
                Patient History Access System
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Builders – 3D Dashboard
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Patient Management System
              </li>
              <li className="hover:text-blue-400 transition-colors">
                AutoCAD → 3D Visualization
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Company Portfolio Website
              </li>
              <li className="hover:text-blue-400 transition-colors">
                Marketing & Digital Design Projects
              </li>
            </ul>
          </div>

          {/* ---------- Technical Skills ---------- */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Technical Skills
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>React.js & JavaScript</li>
              <li>Node.js</li>
              <li>Java & Python</li>
              <li>PHP & MySQL</li>
              <li>Firebase (Auth & Firestore)</li>
              <li>Oracle SQL</li>
              <li>Git & VS Code</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>

          {/* ---------- Contact Info ---------- */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-gray-300">

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <div className="text-sm">
                  <div>maheshkkailasam@gmail.com</div>
                  <div>kmahe.1226@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-sm">
                  +91 7010117969
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  Pudukkottai <br />
                  Tamil Nadu, India
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ---------- Bottom Bar ---------- */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-gray-400 text-sm">
              © {currentYear} Mahesh K. All rights reserved.
            </div>

            <div className="text-gray-400 text-sm">
              Designed & Developed by Mahesh
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
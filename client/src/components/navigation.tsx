import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("top");
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "services", label: "What I Build" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex items-center h-20 transition-all duration-300 ${
            isScrolled ? "justify-center" : "justify-between"
          }`}
        >
          {/* ---------- Brand Name ---------- */}
          {!isScrolled && (
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection("top")}
            >
              <span className="text-white">
                Mah<span className="text-blue-500">e</span>
              </span>
            </div>
          )}

          {/* ---------- Desktop Navigation ---------- */}
          <div
            className={`hidden md:flex items-center space-x-8 ${
              isScrolled ? "" : ""
            }`}
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-colors duration-300 hover:text-blue-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {label}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact
            </Button>
          </div>

          {/* ---------- Mobile Menu Button ---------- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* ---------- Mobile Dropdown Menu ---------- */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
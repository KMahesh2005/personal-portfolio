import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your credentials
emailjs.init('bg7IsOHnHCXETESAK');

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_css26nj', // Your Service ID
        'template_hxclz2j', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: 'maheshkkailasam@gmail.com'
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+917010117969";
    const message = "Hello CompanyName, I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:maheshkkailasam@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917010117969";
  };

  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/QQGt7dEUv86E6qN48", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to transform your ideas into powerful digital solutions? 
            Get in touch with today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Tell me about your project requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <div className="flex items-center justify-center gap-3">
                    <img 
                      src="https://ik.imagekit.io/maheshk/Screenshot_2025-07-04_190757-removebg-preview.png?updatedAt=1751636352373" 
                      alt="WhatsApp" 
                      width={24} 
                      height={24}
                      className="w-6 h-6"
                    />
                    <span>Contact through WhatsApp</span>
                  </div>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative ideas, 
                or collaboration on impactful projects.Feel free to reach out — let’s build something meaningful together.
              </p>
            </div>

            <div className="grid gap-6">
              <div 
                className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={handleEmailClick}
              >
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-blue-200">kmahe.1226@gmail.com</p>
                  <p className="text-blue-200">maheshkkailasam@gmail.com</p>
                </div>
              </div>

              <div 
                className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={handlePhoneClick}
              >
                <Phone className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-blue-200">+91 7010117969</p>
                </div>
              </div>

              <div 
                className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 cursor-pointer transition-colors"
                onClick={handleMapClick}
              >
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-blue-200">Pudukkottai</p>
                  <p className="text-blue-200">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-lg border border-white/20">
                <Clock className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-blue-200">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-blue-200">Saturday: 10:00 AM - 2:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    healthcare: {
      text:
        "🏥 Patient History Access System\n\nA secure healthcare platform using OTP + fingerprint authentication.\n\n• Emergency lock-screen access\n• Guardian verification\n• Firebase authentication\n• Real-time patient alerts\n\nBuilt to solve real emergency medical access problems.",
    },
    techstack: {
      text:
        "💻 My Technical Stack:\n\n• React & JavaScript\n• Firebase (Auth + Firestore)\n• PHP & MySQL\n• Java & Python\n• Role-based access systems\n• Biometric & OTP integration\n\nI focus on building secure, real-world systems.",
    },
    internships: {
      text:
        "🚀 Yes! I'm actively looking for internships and product-based roles.\n\nInterested in:\n• Full-Stack Development\n• Frontend Roles\n• Health-Tech & SaaS\n\nOpen to innovative teams.",
    },
    github: {
      text:
        "🔗 GitHub:\nhttps://github.com/KMahesh2005\n\nYou’ll find my healthcare system and 3D dashboard projects there.",
    },
    contact: {
      text:
        "📧 maheshkkailasam@gmail.com\n📞 +91 7010117969\n📍 Tamil Nadu, India\n\nFeel free to reach out!",
    },
  };

  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      text:
        "Hi 👋 I'm Mahesh AI.\n\nYou can explore my work using the options below.",
      sender: "bot",
      showOptions: true,
    },
  ]);

  const handleOptionSelect = (option: string) => {
    setChatHistory((prev) => [
      ...prev,
      { id: prev.length + 1, text: option, sender: "user" },
    ]);

    let response;

    switch (option) {
      case "Tell me about your healthcare project":
        response = botResponses.healthcare;
        break;
      case "What technologies do you use?":
        response = botResponses.techstack;
        break;
      case "Are you open to internships?":
        response = botResponses.internships;
        break;
      case "Show your GitHub":
        response = botResponses.github;
        break;
      case "How can I contact you?":
        response = botResponses.contact;
        break;
      default:
        response = { text: "Thanks for your interest!" };
    }

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: response.text,
          sender: "bot",
          showOptions: true,
        },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="relative group">
          <div className="relative h-20 w-20 transition-all duration-300 group-hover:scale-110 group-active:scale-95">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

            {/* AI Robot GIF (KEPT) */}
            <img
              src="https://ik.imagekit.io/maheshk/bot-unscreen.gif?updatedAt=1751704783504"
              alt="Mahesh AI Assistant"
              width={80}
              height={80}
              className="rounded-full border-2 border-blue-500 shadow-xl transition-transform duration-300 group-hover:rotate-6"
            />

            {/* Online Indicator */}
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-400 rounded-full animate-pulse ring-2 ring-white"></div>
          </div>

          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask About My Work
          </div>
        </button>
      ) : (
        <div className="w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://ik.imagekit.io/maheshk/bot-unscreen.gif?updatedAt=1751704783504"
                alt="Mahesh AI"
                width={40}
                height={40}
                className="rounded-full border-2 border-white/30"
              />
              <div>
                <h3 className="font-semibold text-lg">Mahesh AI</h3>
                <p className="text-xs text-blue-100 opacity-80">
                  Portfolio Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto bg-gradient-to-b from-white to-blue-50">
            {chatHistory.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-800 shadow-sm border border-gray-100"
                  }`}
                >
                  {message.text.split("\n").map((line, i) => (
                    <p key={i} className="mb-1 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          <div className="p-4 border-t border-gray-200 bg-white">
            {chatHistory[chatHistory.length - 1].showOptions && (
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Tell me about your healthcare project",
                  "What technologies do you use?",
                  "Are you open to internships?",
                  "Show your GitHub",
                  "How can I contact you?",
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
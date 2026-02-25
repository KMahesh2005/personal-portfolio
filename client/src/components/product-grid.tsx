import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

export function productgrid() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/1oGTwg74f5if6hNIKVnC8KAM8vD6CKwVn1wjOvpgdDwVuF1q_fdMbaa6z/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    setSuccessMessage("");

    try {
      // Validate email format first
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Please enter a valid email address");
      }

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        mode: "no-cors" // Important for Apps Script CORS handling
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      setSuccessMessage("Thank you for subscribing!");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error 
          ? err.message 
          : "Failed to subscribe. Please try again later."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 shadow-lg backdrop-blur-sm">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Join Our Newsletter
        </h3>
        <p className="text-slate-300">
          Get exclusive updates and early access to new features.
        </p>
      </div>

      {status === "success" ? (
        <div className="flex items-center justify-center gap-2 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <p className="text-emerald-100">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              size="lg"
              className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>

          {status === "error" && (
            <p className="text-rose-400 text-sm text-center">{error}</p>
          )}

          <p className="text-slate-400 text-xs text-center">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
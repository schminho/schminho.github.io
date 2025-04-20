import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail } from "lucide-react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@") || !message.trim()) return;

    setIsSubmitting(true);

    const templateParams = {
      email,
      message,
      subject: "Neue Nachricht",
      meta_info: "ptr-is-a-dev", // 👈 your hidden variable
    };

    try {
      await emailjs.send(
        "service_bjbk9je",
        "template_3yld2au",
        templateParams,
        "QBKmfFIepPyQKLcxf"
      );

      setSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6">
      {submitted ? (
        <p className="text-purple-900 font-medium text-lg">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto text-left"
        >
          <input type="hidden" name="meta_info" value="ptr-is-a-dev" />

          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-1 p-3 rounded-lg 
             bg-purple-300 text-gray-600 placeholder-gray-600
             focus:outline-none focus:ring-1 focus:ring-purple-300 resize-none"
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full mt-1 p-3 rounded-lg 
             bg-purple-300 text-gray-600 placeholder-gray-600
             focus:outline-none focus:ring-1 focus:ring-purple-300 resize-none"
          />

          {/* ✅ Button wrapper handles responsive alignment */}
          <div className="w-full sm:w-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2
                         px-6 py-3 bg-purple-600 text-white rounded-full
                         hover:bg-purple-700 transition-colors
                         w-full sm:w-auto"
            >
              <Mail size={20} />
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

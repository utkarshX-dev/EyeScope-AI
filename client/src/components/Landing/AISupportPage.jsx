import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupportIntroPage() {
  const [suggestions] = useState([
    "How do I upload a retinal scan?",
    "What diseases can EyeScope detect?",
    "Find nearby eye clinics",
  ]);
  const [customQuery, setCustomQuery] = useState("");
  const navigate = useNavigate();

  const handleStartChat = (query = "") => {
    navigate("/ai-chat", { state: { query } });
  };

  return (
    <section className="w-full flex justify-center items-start px-4 pt-8 pb-4">
      <div className="w-full max-w-2xl rounded-3xl bg-muted/10 border border-border shadow-xl backdrop-blur-md p-6 text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-primary">
          Need Help?
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground">
          Confused? Ask EyeScope AI! Get instant support for your eye care queries.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {suggestions.map((text, idx) => (
            <button
              key={idx}
              onClick={() => handleStartChat(text)}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
            >
              {text}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-2 items-center justify-center">
          <input
            type="text"
            placeholder="Hi! I am Scope AI"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleStartChat(customQuery)}
            className="flex-1 w-full sm:w-auto px-4 py-2 rounded-xl border border-blue-300 text-foreground placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow transition-all bg-background"
          />
          <button
            onClick={() => handleStartChat(customQuery)}
            className="px-6 py-2 rounded-xl bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-all"
          >
            Start Chat
          </button>
        </div>
      </div>
    </section>
  );
}

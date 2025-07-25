import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import dayjs from "dayjs";

export default function AiChatBotPage() {
  const location = useLocation();
  const initialQuery = location.state?.query || "";

  const [messages, setMessages] = useState(
    initialQuery
      ? [
          {
            sender: "user",
            text: initialQuery,
            time: dayjs().format("hh:mm A"),
          },
        ]
      : []
  );
  const [input, setInput] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef();

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const sendToGemini = async (prompt) => {
    setIsLoading(true);
    try {
      const resp = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
      });

      const text =
        resp?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response generated.";
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text, time: dayjs().format("hh:mm A") },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Oops! Something went wrong. Try again later.",
          time: dayjs().format("hh:mm A"),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const prompt = input.trim();
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: prompt, time: dayjs().format("hh:mm A") },
    ]);
    setInput("");
    sendToGemini(prompt);
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  function styleMarkup(text) {
    let styled = text.replace(
      /\*\*(.*?)\*\*/gs,
      '<strong class="font-bold text-blue-700">$1</strong>'
    );

    styled = styled.replace(
      /\*(.*?)\*/gs,
      '<em class="italic text-blue-500">$1</em>'
    );

    styled = styled.replace(
      /`(.*?)`/gs,
      '<code class="bg-blue-50 text-blue-700 px-1 rounded font-mono text-sm">$1</code>'
    );

    styled = styled.replace(
      /^### (.*)$/gm,
      '<h3 class="text-lg font-bold mt-4 mb-2 text-blue-600">$1</h3>'
    );
    styled = styled.replace(
      /^## (.*)$/gm,
      '<h2 class="text-xl font-bold mt-6 mb-3 text-blue-700">$1</h2>'
    );
    styled = styled.replace(
      /^# (.*)$/gm,
      '<h1 class="text-2xl font-extrabold mt-8 mb-4 text-blue-800">$1</h1>'
    );

    styled = styled.replace(
      /^\s*[-*] (.*)$/gm,
      '<li class="ml-4 list-disc">$1</li>'
    );

    styled = styled.replace(
      /^\s*\d+\.\s(.*)$/gm,
      '<li class="ml-4 list-decimal">$1</li>'
    );

    styled = styled.replace(/(<li.*?>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
    return styled;
  }


  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground py-12">
      
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-6 px-8 font-extrabold text-2xl shadow-lg text-center rounded-t-3xl w-full max-w-3xl mx-auto mb-2">
        <span>EyeScope AI Chat Support</span>
      </header>

      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-muted/30 scroll-smooth pb-32 w-full max-w-3xl mx-auto rounded-b-3xl"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-[75%] space-y-1">
              <div
                className={`px-6 py-4 text-base rounded-2xl whitespace-pre-wrap break-words shadow-md transition-all duration-200 ${
                  msg.sender === "ai"
                    ? "bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                    : "bg-blue-600 text-white"
                }`}
                dangerouslySetInnerHTML={{ __html: styleMarkup(msg.text) }}
              />
              <p className="text-xs text-muted-foreground text-right pr-2">
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-900 px-6 py-3 rounded-2xl text-base text-blue-500 shadow-sm animate-pulse">
              EyeScope AI is thinking...
            </div>
          </div>
        )}
      </div>

      <footer className="p-6 bg-white dark:bg-gray-900 border-t shadow-lg flex gap-4 sticky bottom-0 z-10 w-full max-w-3xl mx-auto rounded-b-3xl">
        <input
          type="text"
          className="flex-1 border border-blue-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-blue-400 text-base bg-background text-foreground"
          placeholder="Ask something about your eye health..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="px-8 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
          onClick={handleSend}
        >
          Send
        </button>
      </footer>
    </section>
  );
}

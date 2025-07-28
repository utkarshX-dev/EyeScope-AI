import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";

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
      '<strong class="font-bold text-primary">$1</strong>'
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
     <section className="flex flex-col items-center justify-center min-h-screen bg-transparent text-foreground py-0">
      <div className="w-full max-w-3xl mx-auto flex flex-col rounded-3xl shadow-2xl border border-border bg-background/90 dark:bg-[#101828]/90 overflow-hidden min-h-[80vh]">
        <header className="flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-md ">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">EyeScope AI Chat</h1>
            <p className="mt-1 text-xs text-white font-medium">Your personal retina health assistant</p>
          </div>
        </header>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 bg-transparent scroll-smooth"
        >
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 opacity-60">
              <span className="text-6xl mb-4">🤖</span>
              <p className="text-lg font-semibold text-muted-foreground text-center">
                Ask anything about your eye health, retina scans, or EyeScope features!
              </p>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`relative max-w-[80%] sm:max-w-[70%] rounded-2xl px-6 py-4 shadow-lg transition-all duration-200
                  ${msg.sender === "ai"
                    ? "bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 border border-blue-100 dark:border-blue-900"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-blue-400/30"}
                `}
              >
                {msg.sender === "ai" && (
                  <span className="absolute -left-8 top-2 text-blue-500 text-xl hidden sm:block">🤖</span>
                )}
                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: styleMarkup(msg.text) }}
                />
                <span className="block text-xs text-muted-foreground mt-2 text-right">{msg.time}</span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/90 dark:bg-gray-900/90 px-6 py-3 rounded-2xl text-base text-blue-500 shadow-sm animate-pulse border border-blue-100 dark:border-blue-900">
                EyeScope AI is thinking...
              </div>
            </div>
          )}
        </div>

        <footer className="p-6 bg-background/80 dark:bg-[#101828]/80 border-t border-border flex gap-3 items-center sticky bottom-0 z-10 w-full">
          <input
            type="text"
            className="flex-1 w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black shadow transition-all bg-background"
            placeholder="Type your question about eye health..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading}
          />

          <Button
           className="px-6 "
            onClick={handleSend}
            disabled={isLoading}
          >
            Send
          </Button>
        </footer>
      </div>
    </section>
  );
}
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { marked } from "marked";

export default function AiChatBotPage() {
  const location = useLocation();
  const initialQuery = location.state?.query || "";

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef();
  const initialQueryHandled = useRef(false);
  const [typingText, setTypingText] = useState("");
  const [fullText, setFullText] = useState("");
  const typingInterval = useRef(null);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const sendToGemini = async (prompt) => {
    setIsLoading(true);
    try {
      const concise = !/define whole|explain in detail|full details|elaborate|expand/i.test(prompt);
      const conciseInstruction = concise
        ? "Always answer in a concise, crisp manner. Only provide detailed or long explanations if the user explicitly asks for 'define whole', 'explain in detail', or similar."
        : "You can provide a detailed, elaborate answer as requested by the user.";

      const resp = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          systemInstruction: `
You are EyeScope AI, a helpful assistant for retina health and eye care.
${conciseInstruction}
Always answer questions related to eye health, retina scans, diseases, treatments, clinics, and EyeScope features.

EyeScope AI is a lightweight, AI-powered platform for early detection of retinal diseases. It leverages a custom-trained CNN model for multi-class classification and is optimized for both clinical and low-resource environments.

The Challenge
Blindness remains a major health concern in low-resource regions, with 70% of cases preventable through early diagnosis. EyeScope bridges the diagnostic gap with a fast, scalable, and low-cost AI solution, especially useful in rural India.

The Technology
Our custom-trained CNN processes real-world annotated retinal images across 7 disease classes. With over 90% validation accuracy, it supports webcam input, batch uploads, Grad-CAM visualizations, and automated report generation.

Deployment Features
Multi-image batch upload & live camera integration
Real-time inference with Grad-CAM visual feedback
Voice-guided interface in English and Hindi
PDF and CSV report generation
Hospital locator powered by OpenStreetMap
Use Cases
Primary healthcare centers & rural clinics
Mass school & workplace screenings
Elderly care and home diagnostics
Mobile eye camps and telemedicine"
Important: If the user asks about anything outside eye care, politely say: "Sorry, I can only assist with eye health and retina-related queries."
`,
        },
      });

      const text =
        resp?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response generated.";
      setFullText(text);
      setTypingText("");
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

  useEffect(() => {
    if (!fullText) return;

    let index = 0;
    let currentText = "";

    typingInterval.current = setInterval(() => {
      currentText += fullText[index];
      setTypingText(currentText);
      index++;

      if (index >= fullText.length) {
        clearInterval(typingInterval.current);

        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: fullText, time: dayjs().format("hh:mm A") },
        ]);

        setTypingText("");
        setFullText("");
      }
    }, 30);

    return () => clearInterval(typingInterval.current);
  }, [fullText]);

  const handleStop = () => {
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: fullText, time: dayjs().format("hh:mm A") },
      ]);
      setTypingText("");
      setFullText("");
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
    if (initialQuery && !initialQueryHandled.current) {
      setMessages([
        {
          sender: "user",
          text: initialQuery,
          time: dayjs().format("hh:mm A"),
        },
      ]);
      sendToGemini(initialQuery);
      setInput("");
      initialQueryHandled.current = true;
    }
  }, [initialQuery]);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function styleMarkup(text) {
    return marked.parse(text);
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-transparent text-foreground py-0 mb-10">
      <div
        className="w-full max-w-3xl mx-auto flex flex-col rounded-3xl shadow-2xl border border-border bg-background/90 dark:bg-[#101828]/90 overflow-hidden"
        style={{ minHeight: "90vh", maxHeight: "90vh" }}
      >
        <header className="flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-md ">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              EyeScope AI Chat
            </h1>
            <p className="mt-1 text-xs text-white font-medium">
              Your personal retina health assistant
            </p>
          </div>
        </header>

        <div
          ref={chatRef}
          className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 bg-transparent scroll-smooth"
          style={{ maxHeight: "calc(90vh - 120px)" }}
        >
          {messages.length === 0 && !typingText && (
            <div className="flex flex-col items-center justify-center h-64 opacity-60">
              <span className="text-6xl mb-4">🤖</span>
              <p className="text-lg font-semibold text-muted-foreground text-center">
                Ask anything about your eye health, retina scans, or EyeScope
                features!
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`relative max-w-[80%] sm:max-w-[70%] rounded-2xl px-6 py-4 shadow-lg transition-all duration-200
                  ${
                    msg.sender === "ai"
                      ? "bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 border border-blue-100 dark:border-blue-900"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border border-blue-400/30"
                  }
                `}
              >
                {msg.sender === "ai" && (
                  <span className="absolute -left-8 top-2 text-blue-500 text-xl hidden sm:block">
                    🤖
                  </span>
                )}
                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: styleMarkup(msg.text) }}
                />
                <span
                  className="block text-xs mt-2 text-right"
                  style={{ color: msg.sender === "ai" ? "#222" : undefined }}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {typingText && (
            <div className="flex justify-start">
              <div className="relative max-w-[80%] sm:max-w-[70%] rounded-2xl px-6 py-4 shadow-lg bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 border border-blue-100 dark:border-blue-900">
                <span className="absolute -left-8 top-2 text-blue-500 text-xl hidden sm:block">
                  🤖
                </span>
                <div
                  className="prose prose-sm max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: styleMarkup(typingText) }}
                />
                <span
                  className="block text-xs mt-2 text-right"
                  style={{ color: "#222" }}
                >
                  {dayjs().format("hh:mm A")}
                </span>
              </div>
            </div>
          )}

          <div className="mb-8" />
        </div>

        <footer className="p-6 bg-background/80 dark:bg-[#101828]/80 border-t border-border flex gap-3 items-center sticky bottom-0 z-10 w-full">
          <input
            type="text"
            className="flex-1 w-full sm:w-auto px-4 py-2 rounded-xl border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black shadow transition-all bg-background"
            placeholder="Type your question about eye health..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isLoading || fullText}
          />
          <Button className="px-6" onClick={handleSend} disabled={isLoading || fullText}>
            Send
          </Button>
          {fullText && (
            <Button
              className="px-3"
              variant="ghost"
              onClick={handleStop}
              type="button"
              title="Stop"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </footer>
      </div>
    </section>
  );
}
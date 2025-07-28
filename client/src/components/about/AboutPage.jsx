import { Lightbulb, Cpu, Rocket, Activity } from "lucide-react";

export default function AboutSection() {
  const sections = [
    {
      icon: Lightbulb,
      title: "The Challenge",
      content:
        "Blindness remains a major health concern in low-resource regions, with 70% of cases preventable through early diagnosis. EyeScope bridges the diagnostic gap with a fast, scalable, and low-cost AI solution, especially useful in rural India.",
    },
    {
      icon: Cpu,
      title: "The Technology",
      content:
        "Our custom-trained CNN processes real-world annotated retinal images across 7 disease classes. With over 90% validation accuracy, it supports webcam input, batch uploads, Grad-CAM visualizations, and automated report generation.",
    },
    {
      icon: Rocket,
      title: "Deployment Features",
      list: [
        "Multi-image batch upload & live camera integration",
        "Real-time inference with Grad-CAM visual feedback",
        "Voice-guided interface in English and Hindi",
        "PDF and CSV report generation",
        "Hospital locator powered by OpenStreetMap",
      ],
    },
    {
      icon: Activity,
      title: "Use Cases",
      list: [
        "Primary healthcare centers & rural clinics",
        "Mass school & workplace screenings",
        "Elderly care and home diagnostics",
        "Mobile eye camps and telemedicine",
      ],
    },
  ];

  return (
    <section className="relative bg-background py-10 px-6 sm:px-12 lg:px-24 text-foreground">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4 animate-in fade-in slide-in-from-top-5">
            About EyeScope AI 
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-5 delay-100">
            EyeScope AI is a lightweight, AI-powered platform for early detection of retinal diseases.
            It leverages a custom-trained CNN model for multi-class classification and is optimized for both clinical and low-resource environments.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 animate-in fade-in zoom-in duration-300">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-card border border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 hover:shadow-xl hover:border-primary/60 transition duration-300 group overflow-hidden hover:scale-[1.03]"
            >
              {/* Shimmer effect */}
              <span className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <span className="block w-full h-full shimmer-gradient" />
              </span>
              <div className="flex items-center gap-3 mb-4 text-neutral-700 dark:text-neutral-200 relative z-10">
                <section.icon className="w-6 h-6" />
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>

              {section.content && (
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 leading-relaxed relative z-10">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .shimmer-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, rgba(13,110,253,0.08) 10%, rgba(102,217,255,0.18) 40%, rgba(13,110,253,0.08) 80%);
            background-size: 200% 200%;
            animation: shimmer-move 1.2s linear infinite;
            border-radius: 1rem;
            filter: blur(2px);
            opacity: 0.8;
          }
          .group:hover .shimmer-gradient {
            opacity: 1;
          }
          @keyframes shimmer-move {
            0% {
              background-position: left top;
            }
            100% {
              background-position: right bottom;
            }
          }
        `}
      </style>
    </section>
  );
}
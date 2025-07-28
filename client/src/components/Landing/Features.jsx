export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description:
        "Detects 7 types of retinal diseases using CNN models trained on real medical datasets.",
    },
    {
      title: "Multiple Input Modes",
      description:
        "Upload a single image, batch of scans, or use your live webcam directly.",
    },
    {
      title: "Voice & Language Support",
      description:
        "Voice assistant with Hindi-English toggle for inclusivity and ease of use.",
    },
    {
      title: "Nearby Hospital Finder",
      description:
        "Detects your location and shows nearby eye-care centers using OpenStreetMap.",
    },
  ];

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight text-center">
        Why EyeScope AI Stands Out
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-10 lg:px-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative flex flex-col justify-between min-h-[140px] overflow-hidden rounded-xl border border-border bg-muted/20 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 text-left">
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

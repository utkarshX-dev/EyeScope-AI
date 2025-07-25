import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div className="max-w-2xl text-center space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="block">Welcome to</span>
        <span className="block text-primary">EyeScope AI</span>
      </h1>
<p className="text-2xl sm:text-3xl font-bold text-accent-foreground min-h-[3.5rem] transition-all animate-fade-in-down text-center">
  <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight leading-snug inline-block">
    <Typewriter
      words={[
        "Instantly analyze retinal images",
        "Get accurate disease predictions",
        "Empowering eye care with AI",
        "Get treatment advice instantly",
      ]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={40}
      delaySpeed={1000}
    />
  </span>
</p>


      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="px-8 py-6 text-base font-semibold">
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-6 text-base font-semibold border-muted hover:border-primary"
        >
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
}

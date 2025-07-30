import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <div className="max-w-2xl text-center space-y-6 mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="block">Welcome to</span>
        <span className="block">EyeScope AI</span>
      </h1>

      <p className="text-2xl sm:text-3xl font-bold text-accent-foreground text-center">
        <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight leading-snug inline-block h-20 flex items-center justify-center">
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

      <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
        <div className="flex-shrink-0">
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold"
          >
            Get Started
          </Button>
        </div>

        <div className="flex-shrink-0">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-semibold border-muted hover:border-primary"
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

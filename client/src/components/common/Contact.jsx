import { Mail, Github, Linkedin, Code, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-background border border-border rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight">Contact EyeScope AI</h1>
        <p className="text-center text-lg text-muted-foreground mb-8">
          We’d love to hear from you! Reach out for support, feedback, or collaboration.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1 flex flex-col items-center gap-3">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-semibold">Email</h2>
            <a
              href="mailto:support@eyescope.ai"
              className="text-base underline hover:text-primary transition"
            >
              support@eyescope.ai
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-3">
            <Github className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-semibold">GitHub</h2>
            <a
              href="https://github.com/your-org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline hover:text-primary transition"
            >
              github.com/your-org
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-3">
            <Linkedin className="w-8 h-8 text-primary" />
            <h2 className="text-xl font-semibold">LinkedIn</h2>
            <a
              href="https://linkedin.com/in/your-team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base underline hover:text-primary transition"
            >
              linkedin.com/in/your-team
            </a>
          </div>
        </div>

        <div className="text-center pt-10">
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
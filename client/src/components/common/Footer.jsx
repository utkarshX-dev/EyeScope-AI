import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative bg-background text-muted-foreground border-t border-border overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-tight text-primary">EyeScope AI</h2>
            <p className="text-sm mt-1">Smart Retina Disease Detection for All</p>
            <p className="text-xs mt-2">
              &copy; {new Date().getFullYear()} EyeScope AI. All rights reserved.
            </p>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex gap-4 items-center">
            <Link
              to="https://github.com/your-org-or-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <GitHubIcon className="text-foreground" sx={{ fontSize: 22 }} />
            </Link>
            <Link
              to="mailto:support@eyescope.ai"
              aria-label="Email"
              className="hover:scale-110 transition-transform"
            >
              <EmailIcon sx={{ fontSize: 22, color: "#0072c6" }} />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center items-center select-none mt-4 mb-8">
  <h1
    className="w-full text-center text-[8vw] font-extrabold tracking-tight uppercase"
    style={{
      background: "linear-gradient(to bottom, #0d6efd 0%, #228be6 60%, #66d9ff 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      opacity: 1,
      letterSpacing: "0.1em",
      lineHeight: 1,
      userSelect: "none",
      filter: "drop-shadow(0 2px 16px rgba(13,110,253,0.25))",
      textShadow: "0 2px 24px rgba(13,110,253,0.25)",
    }}
  >
    EYESCOPE AI
  </h1>
</div>
    </footer>
  );
}
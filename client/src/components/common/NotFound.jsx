import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-6 bg-background text-foreground text-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">404</h1>
        <p className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
          Page Not Found
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          Sorry, the page you are looking for doesn’t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full font-semibold shadow-md bg-blue-700 text-white hover:bg-blue-800 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

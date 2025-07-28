import React from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center tracking-tight">
        My Profile
      </h1>
      <div className="bg-background rounded-2xl shadow-lg border border-border p-8 flex flex-col items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center overflow-hidden shadow">
          <span className="text-5xl text-primary font-bold">👤</span>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-1">Your Name</h2>
          <p className="text-muted-foreground mb-2">your.email@example.com</p>
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            Member
          </span>
        </div>
        <div className="w-full flex flex-col gap-2 mt-6">
          <Link to="/profile/edit">
            <button className="w-full py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition">
              Edit Profile
            </button>
          </Link>
          <Link to="/logout">
            <button className="w-full py-2 rounded-lg bg-muted text-foreground font-semibold hover:bg-muted/70 transition">
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button"; 

export function ModeToggle() {
  const [theme, setTheme] = useState("theme-zinc");

  useEffect(() => {
    const current = localStorage.getItem("theme") || "theme-zinc";
    document.documentElement.className = current;
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "theme-zinc" ? "theme-slate" : "theme-zinc";
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "theme-zinc" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
}

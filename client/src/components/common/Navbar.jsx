import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Menu, X } from "lucide-react";
import userContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { token, setToken } = useContext(userContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const navLinks = [
    ["Home", ""],
    ["About", "about"],
    ["Get Your Report", "services"],
    ["AI Chat Bot", "ai-chat"],
    ["Profile", "profile"],
  ];
  const handleAuthenticate = () => {
    if (token) {
      logout();
    } else {
      navigate("/auth");
    }
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("session_token");
    localStorage.removeItem("currUser");
    navigate("/");
  };
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent py-4">
      <nav className="h-[72px] w-full flex items-center justify-center px-4">
        <div className="w-full max-w-6xl flex items-center justify-between rounded-full border border-muted bg-background/80 text-foreground shadow-md px-6 py-3 backdrop-blur-md transition-all duration-300">
          <h1 className="text-xl font-bold tracking-tight whitespace-nowrap">
            EyeScope AI
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6 text-sm sm:text-base font-medium text-muted-foreground">
            {navLinks.map((label) => (
              <li key={label[1]}>
                <a
                  href={`/${label[1]}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {label[0]}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="transition-all duration-200 hover:bg-primary hover:text-white border-muted"
              onClick={handleAuthenticate}
            >
              {token ? "Logout" : "Login"}
            </Button>
            <ModeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-muted-foreground hover:text-primary transition" />
              ) : (
                <Menu className="w-6 h-6 text-muted-foreground hover:text-primary transition" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 w-full flex justify-center">
          <div className="w-full max-w-6xl rounded-xl border border-border bg-background/90 backdrop-blur-lg px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-5">
            <ul className="flex flex-col items-start gap-3 text-[1rem] font-semibold text-foreground">
              {navLinks.map((label) => (
                <li key={label[1]} className="w-full">
                  <a
                    href={`/${label[1]}`}
                    className="block w-full text-center px-4 py-2 rounded-md hover:bg-primary/90 hover:text-white transition-all duration-200"
                  >
                    {label[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const AiChatBotPage = lazy(() => import("./components/AiChatBox/AiChatBotPage.jsx"));
const LandingPage = lazy(() => import("./components/Landing/LandingPage.jsx"));
const Loader = lazy(() => import("./components/common/Loader.jsx"));
const Navbar = lazy(() => import("./components/common/Navbar.jsx"));
const Footer = lazy(() => import("./components/common/Footer.jsx"));
const AboutPage = lazy(() => import("./components/about/AboutPage.jsx"));
import AuthPage from "./components/auth/AuthPage.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 mt-[88px]">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/profile" element={<AuthPage />} />
              <Route path="/ai-chat" element={<AiChatBotPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

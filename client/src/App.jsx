import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { UserProvider } from "./context/UserContext.jsx";
const AiChatBotPage = lazy(() =>
  import("./components/AiChatBox/AiChatBotPage.jsx")
);
const LandingPage = lazy(() => import("./components/Landing/LandingPage.jsx"));
const Loader = lazy(() => import("./components/common/Loader.jsx"));
const Navbar = lazy(() => import("./components/common/Navbar.jsx"));
const Footer = lazy(() => import("./components/common/Footer.jsx"));
const AboutPage = lazy(() => import("./components/about/AboutPage.jsx"));
const FaqsPage = lazy(() => import("./components/faqs/FaqsPage.jsx"));
const Profile = lazy(() => import("./components/profile/Profile.jsx"));
const EditProfile = lazy(() => import("./components/profile/EditProfile.jsx"));
const Terms = lazy(() => import("./components/common/Terms.jsx"));
const Privacy = lazy(() => import("./components/common/Privacy.jsx"));
const AuthPage = lazy(() => import("./components/auth/AuthPage.jsx"));
const Contact = lazy(() => import("./components/common/Contact.jsx"));
const NotFound = lazy(() => import("./components/common/NotFound.jsx"));


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <UserProvider>
          <Navbar />
          <main className="flex-1 mt-[88px]">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/ai-chat" element={<AiChatBotPage />} />
                <Route path="/faqs" element={<FaqsPage />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;

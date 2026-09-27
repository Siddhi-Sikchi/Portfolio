import { useEffect, useState } from "react";
import Preloader from "../components/Preloader.jsx";
import Navbar from "../components/Navbar.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ResumeModal from "../components/ResumeModal.jsx";

export default function Home() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem("seenPreloader"));
  const [activeTab, setActiveTab] = useState("projects");
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("seenPreloader", "1");
    }, 3200);
    return () => clearTimeout(t);
  }, [loading]);

  // if we arrived back with a #hash (e.g. from a project detail page's "Back to Projects"),
  // scroll to that section once the page is ready
  useEffect(() => {
    if (loading) return;
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [loading]);

  const goToTab = (tab) => {
    setActiveTab(tab);
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Preloader loading={loading} />
      <ScrollProgress />
      <Navbar show={!loading} onResumeClick={() => setResumeOpen(true)} />
      <Hero
        loaded={!loading}
        onProjectsClick={() => goToTab("projects")}
        onResumeClick={() => setResumeOpen(true)}
      />
      <About onProjectsClick={() => goToTab("projects")} onResumeClick={() => setResumeOpen(true)} />
      <Portfolio activeTab={activeTab} setActiveTab={setActiveTab} />
      <Contact />
      <Footer />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

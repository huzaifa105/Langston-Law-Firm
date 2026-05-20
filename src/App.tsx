import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// View Layers
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import AttorneysView from "./components/AttorneysView";
import PracticeAreasView from "./components/PracticeAreasView";
import CaseResultsView from "./components/CaseResultsView";
import TestimonialsView from "./components/TestimonialsView";
import FAQView from "./components/FAQView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";

export default function App() {
  // Ultra-fast state routing tab states
  const [activeTab, setActiveTab] = useState<string>("home");
  
  // Storage for currently focused detail identifiers
  const [selectedPracticeAreaId, setSelectedPracticeAreaId] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);

  // Dynamic route dispatcher based on state
  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedPracticeAreaId={setSelectedPracticeAreaId}
            setSelectedBlogSlug={setSelectedBlogSlug}
          />
        );
      case "about":
        return <AboutView setActiveTab={setActiveTab} />;
      case "attorneys":
        return <AttorneysView setActiveTab={setActiveTab} />;
      case "practice-main":
      case "practice-details":
        return (
          <PracticeAreasView
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedPracticeAreaId={selectedPracticeAreaId}
            setSelectedPracticeAreaId={setSelectedPracticeAreaId}
          />
        );
      case "results":
        return <CaseResultsView setActiveTab={setActiveTab} />;
      case "testimonials":
        return <TestimonialsView setActiveTab={setActiveTab} />;
      case "faq":
        return <FAQView setActiveTab={setActiveTab} />;
      case "blog":
      case "blog-details":
        return (
          <BlogView
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            selectedBlogSlug={selectedBlogSlug}
            setSelectedBlogSlug={setSelectedBlogSlug}
          />
        );
      case "contact":
        return <ContactView />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            setSelectedPracticeAreaId={setSelectedPracticeAreaId}
            setSelectedBlogSlug={setSelectedBlogSlug}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream-100 selection:bg-gold-500 selection:text-navy-950 font-sans" id="app-root-wrapper">
      {/* Prime Header & Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedPracticeAreaId={setSelectedPracticeAreaId}
        setSelectedBlogSlug={setSelectedBlogSlug}
      />

      {/* Main Container with smooth fade effects */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (selectedPracticeAreaId || "") + (selectedBlogSlug || "")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footers */}
      <Footer
        setActiveTab={setActiveTab}
        setSelectedPracticeAreaId={setSelectedPracticeAreaId}
      />
    </div>
  );
}

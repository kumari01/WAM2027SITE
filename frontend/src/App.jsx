import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import AboutWAms from "./components/aboutWAms";
import AboutSasi from "./components/aboutSasi";
import AboutLocation from "./components/aboutLocation";
import ImportantDates from "./components/importantDates";
import ConferenceTracks from "./components/ConferenceTrack";
import Footer from "./components/footer";




function App() {


  return (
    <div className="wams-app">
      {/* SECTION 1 Top Announcement Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          IEEE Conference Record #XXXXX | International Symposium
        </div>
      </div>

      {/* SECTION 2  Navigation Bar */}
      <Navbar />

      {/* SECTION 3 Hero Section */}
      <HeroSection />

      {/* SECTION 4 About the Conference */}
      <AboutWAms />

      {/* SECTION 4.5 — About Sasi Institute of Technology and Engineering */}
      <AboutSasi />

      {/* SECTION 5 About the Location */}
      <AboutLocation />

      {/* SECTION 6 — Important Dates */}
      <ImportantDates />

      {/* SECTION 7 Conference Tracks */}
      <ConferenceTracks />

      {/* SECTION 8  Brochure Section */}
      <section className="brochure-section">
        <h2 className="section-title" style={{ marginBottom: "2rem" }}>Conference Brochure</h2>
        <button className="btn-primary" style={{ padding: "1.2rem 3rem", fontSize: "1.1rem" }}>
          Download WAMS 2026 Brochure
        </button>
      </section>

      {/* SECTION 9  Footer */}
      <Footer />

    </div>
  );
}

export default App;


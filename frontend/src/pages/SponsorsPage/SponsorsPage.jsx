import React from "react";
import "./SponsorsPage.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

const sponsorSections = [
  {
    id: "grand-sponsor",
    tier: "Grand Sponsor",
    logo: "/NASAB2.png",
    alt: "Grand sponsor logo",
    description:
      "IEEE APS is proud to be the Grand Sponsor of WAMS 2026, showcasing its dedication to advancing innovation, research, and global collaboration in antennas and propagation. Through this sponsorship, IEEE APS fosters meaningful engagement among researchers, students, and professionals worldwide.",
    website: "https://ieeeaps.org/",
  },
  {
    id: "diamond-sponsor",
    tier: "Diamond Sponsor",
    logo: "/NASA1.jpg",
    alt: "Diamond sponsor logo",
    description:
      "Novel Patent Services supports WAMS 2026 with strategic intellectual property guidance and innovation-focused patent services. Their presence reflects a strong commitment to empowering research and protecting groundbreaking ideas in wireless, antenna, and microwave technologies.",
    website: "https://www.novelpatent.com/",
  },
  {
    id: "sponsorship-brochure",
    tier: "Sponsorship Brochure",
    logo: "/SASI-LOGO-960x188-1-1.png",
    alt: "Sponsorship brochure",
    description:
      "Explore sponsorship packages, branding opportunities, and partner benefits for WAMS 2026. The brochure provides complete visibility into audience reach, on-site presence, and engagement options for organizations that want to support the conference.",
    website: "#",
  },
  {
    id: "become-a-sponsor",
    tier: "Become A Sponsor",
    logo: "/SASILOGO2.png",
    alt: "Become a sponsor",
    description:
      "Partner with WAMS 2026 and connect with a focused community of researchers, industry experts, and students. Sponsor collaborations help enable impactful sessions, student participation, and innovation-led technical exchange.",
    website: "mailto:wams2027@sasi.ac.in?subject=WAMS%20Sponsorship%20Enquiry",
  },
];

function SponsorsPage() {
  return (
    <div className="sponsors-page">
      <div className="top-bar">
        <div className="top-bar-content">
          IEEE Conference Record #69152 | Overwhelming response with 1059 paper submissions | Early bird registration open
        </div>
      </div>

      <Navbar />

      <header className="sponsors-hero">
        <h1>SPONSORS</h1>
        <div className="sponsors-hero-wave" aria-hidden="true" />
      </header>

      <main className="sponsors-main section">
        {sponsorSections.map((sponsor) => (
          <section className="sponsor-tier" key={sponsor.id} id={sponsor.id}>
            <h2>{sponsor.tier}</h2>

            <div className="sponsor-grid">
              <div className="sponsor-logo-wrap">
                <img src={sponsor.logo} alt={sponsor.alt} className="sponsor-logo" />
              </div>

              <div className="sponsor-content">
                <p>{sponsor.description}</p>
                <a
                  className="sponsor-visit-btn"
                  href={sponsor.website}
                  target={sponsor.website.startsWith("http") ? "_blank" : undefined}
                  rel={sponsor.website.startsWith("http") ? "noreferrer" : undefined}
                >
                  VISIT WEBSITE
                </a>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default SponsorsPage;

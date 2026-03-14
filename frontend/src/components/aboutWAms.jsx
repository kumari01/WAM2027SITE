import React from "react";
import "../App.css";
import "../index.css";

const announcements = [
  "IEEE Conference Record # 69152",
  "Overwhelming response with 1050 paper submissions",
  "Early bird registration deadline: May 01, 2026",
  "BVRIT is proud to be the Grand Sponsor of WAMS 2026",
  "Women in Engineering Career Excellence Award nominations are open",
  "Young Professionals Excellence Award nominations are open",
];

const scrollingAnnouncements = [...announcements, ...announcements];
function AboutWAms() {
    return (
        <section className="section" id="about">
        <div className="two-col about-layout">
          <div>
            <h2 className="section-title">About WAMS 2026</h2>
            <p className="about-text">
              Wireless, Antenna and Microwave Symposium (WAMS) is planned as a multidisciplinary symposium held annually at an academic institute. It focuses on providing an affordable yet state-of-the-art international forum for students and young professionals to interact with leading domain experts from around the world. The 5th edition of WAMS, WAMS 2026, will be held at Sasi Institute of Technology and Engineering, Tadepalligudem, Andhra Pradesh, India, during June 10th to 13th, 2026. WAMS 2026 will provide an excellent platform for sharing and exchanging information on cutting-edge research and scientific advancements in wireless communication, antenna design, microwave engineering, and related technologies, while also fostering collaboration and strengthening professional networks among researchers, academicians, and industry professionals. <a href="https://wams-society.com/"  target="_blank" className="explore-link">Explore more &rarr;</a>
            </p>
          </div>
          <div className="card announcements-card">
            <h3 className="announcements-title">Announcements</h3>
            <div className="announcements-marquee" aria-label="Conference announcements">
              <ul className="announcements-list">
                {scrollingAnnouncements.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="announcement-item"
                    aria-hidden={index >= announcements.length}
                  >
                    <span className="announcement-bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutWAms;
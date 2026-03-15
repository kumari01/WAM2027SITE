import React from "react";
import "../App.css";

function AboutSasi() {
    return (
        <section className="section" id="about-site">
            <div className="two-col">
                <div>
                    <img
                    src="SASI1.jpeg"
                    alt="Sasi Institute of Technology and Engineering Campus"
                    className="site-img"
                    />
                </div>
                <div>
                    <h2 className="section-title">About SITE</h2>
                    <p className="about-text">
                        Sasi Institute of Technology and Engineering (SITE), located in Tadepalligudem, Andhra Pradesh, India, is a premier institution dedicated to providing quality technical education and fostering innovation. The institute offers a dynamic academic environment that encourages research, creativity, and industry collaboration.

                        Affiliated with Jawaharlal Nehru Technological University (JNTU), SITE features modern infrastructure, well-equipped laboratories, and experienced faculty. The institute focuses on developing technical excellence, entrepreneurship, and overall student growth, preparing students to succeed in an evolving technological world. Explore more</p>
                    <a href="#" className="explore-link">Explore more &rarr;</a>
                </div>
            </div>
        </section>
    )
}

export default AboutSasi;
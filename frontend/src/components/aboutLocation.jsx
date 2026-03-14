import React from "react";
import "../App.css";

function aboutLocation(){
    return (
        <section className="section" id="location" style={{ background: "var(--white)" }}>
            <div className="two-col">
            <div>
                <h2 className="section-title">About Tadepalligudem</h2>
                <p className="about-text">
                Tadepalligudem is an educational and technological hub located in the West Godavari district of Andhra Pradesh, India. Known for its peaceful academic environment and growing research culture, the city provides an ideal setting for international conferences and academic collaboration.
                </p>
            </div>
            <div>
                <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                alt="Campus"
                className="location-img"
                />
            </div>
            </div>
        </section>

    )
}
export default aboutLocation;
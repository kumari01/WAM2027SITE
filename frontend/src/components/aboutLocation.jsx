import React from "react";
import "../App.css";

function aboutLocation(){
    return (
        <section className="section" id="location" style={{ background: "var(--white)" }}>
            <div className="two-col">
            <div>
                <h2 className="section-title">About Tadepalligudem</h2>
                <p className="about-text">
                    Tadepalligudem is not only known for its educational institutions but also for its rich cultural and architectural heritage. The region reflects the traditional beauty of South Indian temple architecture, featuring intricate stone carvings, historical structures, and spiritual landmarks. These monuments showcase the artistic craftsmanship and cultural legacy that have been preserved for generations, attracting visitors, researchers, and history enthusiasts alike.
                </p>
            </div>
            <div>
                <img
                src = "Place.webp"
                alt="Campus"
                className="location-img"
                />
            </div>
            </div>
        </section>

    )
}
export default aboutLocation;
import React from "react";
import "../App.css";
function ConferenceTrack() {
    return (
        <section className="section" id="tracks" style={{ background: "var(--white)" }}>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Conference Tracks</h2>
            <div className="tracks-grid">
            <div className="track-card">
                <div className="track-logo" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 19c0 1.1.89 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2m7.66-3.61c-1.51-1.51-3.52-2.34-5.66-2.34s-4.15.83-5.66 2.34l1.41 1.41c1.13-1.13 2.64-1.76 4.24-1.76s3.11.62 4.24 1.76l1.41-1.41Z"/>
                    <path d="M20.49 12.57C18.22 10.3 15.21 9.05 12 9.05s-6.22 1.25-8.49 3.52l1.42 1.41c1.89-1.89 4.4-2.93 7.07-2.93s5.18 1.04 7.07 2.93z"/>
                    <path d="M.69 9.69 2.1 11.1C4.74 8.46 8.26 7 12 7s7.25 1.46 9.9 4.1l1.41-1.41C20.29 6.67 16.27 5 12 5S3.71 6.66.69 9.69"/>
                </svg>
                </div>
                <h3>Wireless</h3>
                <ul>
                <li>5G & 6G Communications</li>
                <li>ML/AI-based approaches</li>
                <li>Quantum Communications & Computing</li>
                <li>Next generation networks</li>
                <li>RF & Optical communication</li>
                <li>Signal Processing for communication</li>
                <li>Image Processing applications</li>
                </ul>
            </div>
            <div className="track-card">
                <div className="track-logo" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3c0 .46.11.89.3 1.29l-1.1 1.1L6.11 6.3a.996.996 0 0 0-1.41 0c-3.35 3.35-3.57 8.66-.67 12.26L2.29 20.3l1.41 1.41 1.73-1.73A9.18 9.18 0 0 0 11.19 22a9.2 9.2 0 0 0 6.51-2.69.996.996 0 0 0 0-1.41l-5.09-5.09 1.1-1.1c.39.19.82.3 1.29.3Zm-8.89 5.89a7.21 7.21 0 0 1-.66-9.43l10.09 10.09a7.21 7.21 0 0 1-9.43-.66M15 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"></path><path d="M19.95 4.05a6.9 6.9 0 0 0-2.32-1.54 7.06 7.06 0 0 0-5.27 0l.75 1.85c1.2-.49 2.57-.49 3.76 0 .62.25 1.18.62 1.65 1.1.48.48.85 1.03 1.1 1.65.24.6.37 1.23.37 1.88s-.12 1.28-.37 1.88l1.85.75c.34-.84.51-1.73.51-2.63s-.17-1.79-.51-2.63c-.35-.87-.87-1.65-1.54-2.32Z"></path>
                    </svg>
                </div>
                <h3>Antenna</h3>
                <ul>
                <li>Microwave and mm-wave Antenna Design</li>
                <li>Antenna Arrays</li>
                <li>Sub-THz, THz and Optical Antennas</li>
                <li>Reflector antennas</li>
                <li>Satellite, aircraft & ground communication antennas</li>
                <li>Wearable antennas</li>
                <li>Feed systems</li>
                <li>Computational EM</li>
                </ul>
            </div>
            <div className="track-card">
                <div className="track-logo" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 9h-5V3a1 1 0 0 0-.69-.95c-.41-.13-.86.01-1.12.36l-8 11a1 1 0 0 0-.08 1.04A1 1 0 0 0 5 15h5v6a1 1 0 0 0 1 1c.31 0 .62-.15.81-.41l8-11a1 1 0 0 0 .08-1.04A1 1 0 0 0 19 9m-7 8.92V14c0-.55-.45-1-1-1H6.96L12 6.08V10c0 .55.45 1 1 1h4.04z"/>
                </svg>
                </div>
                <h3>Microwave</h3>
                <ul>
                <li>RF and Microwave</li>
                <li>Circuits and systems</li>
                <li>Microwave Devices and Components</li>
                <li>Microwave Photonics</li>
                <li>Metamaterials & meta-surfaces</li>
                <li>Microwave imaging and Remote sensing</li>
                <li>RFID Systems</li>
                <li>Biomedical applications</li>
                </ul>
            </div>
            </div>
        </section>
    )
}
export default ConferenceTrack;
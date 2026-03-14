import React from "react";
import "../App.css";
function footer(){
    return (
        <footer className="footer" id="contact">
            <div className="footer-grid">

                {/* Col 1 — Brand */}
                <div className="footer-brand">
                    <h2 className="footer-title">WAMS 2026</h2>
                    <p className="footer-dates">June 10th &mdash; 13th, 2026</p>
                    <p className="footer-venue">Sasi Institute of Technology and Engineering,</p>
                    <p className="footer-venue">Tadepalligudem, Andhra Pradesh, India</p>
                    <div className="footer-logos">
                        <img src="/WAMS.png" alt="WAMS Logo" className="footer-logo" />
                        <img src="/SASILOGO2.png" alt="SITE Logo" className="footer-logo footer-logo-site" />
                    </div>
                </div>

                {/* Col 2 — Quick Links */}
                <div>
                    <h4 className="footer-heading">| Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#registration">Registration</a></li>
                        <li><a href="#authors">Call For Papers</a></li>
                        <li><a href="#dates">Important Dates</a></li>
                        <li><a href="#committee">Committee</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                    </ul>
                </div>

                {/* Col 3 — Other Links */}
                <div>
                    <h4 className="footer-heading">| Other Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">SITE TDD</a></li>
                        <li><a href="https://wams-society.com" target="_blank" rel="noreferrer">WAMS Society</a></li>
                        <li><a href="#">WAMS 2025</a></li>
                        <li><a href="#">WAMS 2024</a></li>
                        <li><a href="#">WAMS 2023</a></li>
                        <li><a href="#">WAMS 2022</a></li>
                        <li><a href="#">Site map</a></li>
                    </ul>
                </div>

                {/* Col 4 — Get In Touch */}
                <div>
                    <h4 className="footer-heading">Get In Touch</h4>
                    <ul className="footer-links footer-contact">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"/></svg>
                            <a href="mailto:wams2026@site.ac.in">Email: wams2026@site.ac.in</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>
                            <a href="tel:+919492307681">+91 94923 07681</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"/></svg>
                            <a href="https://www.sasi.ac.in" target="_blank" rel="noreferrer">SITE, Tadepalligudem</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0m0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881"/></svg>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                            <a href="#">LinkedIn</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                Copyright &copy; 2026 WAMS | All Rights Reserved
            </div>
        </footer>
    )
}
export default footer;
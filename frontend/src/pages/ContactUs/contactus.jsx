import React from "react";
import { Link } from "react-router-dom";
import "./contactus.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

function ContactUsPage() {
	return (
		<div className="contact-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #XXXXX | International Symposium
				</div>
			</div>

			<Navbar />

			<header className="contact-hero">
				<div className="contact-hero-overlay" />
				<div className="contact-hero-content">
					<h1>CONTACT US</h1>
					<p className="contact-breadcrumb">
						<Link to="/">Home</Link>
						<span>|</span>
						<span>Contact Us</span>
					</p>
				</div>
			</header>

			<main className="contact-main section">
				<section className="contact-card">
					<h2>Contact Us:</h2>
					<p>For any queries related to the conference</p>

					<p className="contact-line">
						<span>Email:</span>
						<a href="mailto:wams2027@sasi.ac.in">wams2027@sasi.ac.in</a>
					</p>

					<p className="contact-line">
						<span>Phone:</span>
						<a href="tel:+918074480076">+91 8074480076</a>
					</p>

					<h2>Conference Venue:</h2>
					<p className="contact-venue">
						Sasi Institute of Technology and Engineering, Tadepalligudem, Andhra Pradesh, India
					</p>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default ContactUsPage;

import React from "react";
import "./CallForSPLsession.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

function CallForSPLsessionPage() {
	return (
		<div className="special-session-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #69152 | Overwhelming response with 1059 paper submissions | Early bird registration open
				</div>
			</div>

			<Navbar />

			<header className="special-session-hero">
				<h1>Specials Sessions</h1>
			</header>

			<main className="special-session-main section">
				<section className="special-session-content">
					<p>
						Duly filled proposals of Special Sessions should be sent to the following for approval.
					</p>

					<h2>Contact:</h2>

					<p className="special-contact-block">
						<strong>Prof. Sim Chow-Yen-Desmond</strong>
						<br />
						Distinguished Professor,
						<br />
						Feng Chia University, Taiwan
						<br />
						Email: <a href="mailto:cysim@ieee.org">cysim@ieee.org</a>
					</p>

					<p className="special-contact-block">
						<strong>Dr. B. Naresh Kumar,</strong>
						<br />
						Email: <a href="mailto:nareshkumar.b@bvrit.ac.in">nareshkumar.b@bvrit.ac.in</a>
					</p>

					<a className="special-template-btn" href="#" aria-label="Special Session Proposal Template">
						Special Session Proposal Template
					</a>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default CallForSPLsessionPage;

import React from "react";
import { Link } from "react-router-dom";
import "./CallForPaper.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

const trackGroups = [
	{
		title: "Wireless",
		items: [
			"5G & 6G Communications",
			"ML/AI-based approaches",
			"Quantum Communications & Computing",
			"Next generation networks",
			"RF & Optical communication",
			"Signal Processing for communication",
			"Image Processing applications",
		],
	},
	{
		title: "Antenna",
		items: [
			"Microwave and mm-wave Antenna Design",
			"Antenna Arrays",
			"Sub-THz, THz and Optical Antennas",
			"Reflector antennas",
			"Satellite, aircraft & ground communication antennas",
			"Wearable antennas",
			"Feed systems",
			"Computational EM",
		],
	},
	{
		title: "Microwave Engineering",
		items: [
			"RF and microwave",
			"Circuits and systems",
			"Microwave Devices and Components",
			"Microwave photonics",
			"Metamaterials and metasurfaces",
			"Microwave imaging and Remote sensing",
			"RFID",
			"Biomedical applications",
		],
	},
];

function CallForPaperPage() {
	return (
		<div className="call-for-paper-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #69152 | Overwhelming response with 1059 paper submissions | Early bird registration open
				</div>
			</div>

			<Navbar />

			<header className="cfp-hero">
				<div className="cfp-hero-overlay" />
				<div className="cfp-hero-content">
					<h1>CALL FOR PAPERS</h1>
					<p className="cfp-breadcrumb">
						<Link to="/">Home</Link>
						<span>|</span>
						<span>Call For Papers</span>
					</p>
				</div>
			</header>

			<main className="cfp-main section">
				<section className="cfp-intro">
					<p>
						We invite original contributions relevant to the theme of the symposium falling into one of the
						following tracks (but not limited to).
					</p>
					<a className="cfp-brochure-btn" href="#" aria-label="Call for papers brochure">
						CALL FOR PAPERS BROCHURE
					</a>
				</section>

				<section className="cfp-tracks" aria-label="Call for paper tracks">
					{trackGroups.map((track) => (
						<article className="cfp-track-card" key={track.title}>
							<h2>{track.title}</h2>
							<ul>
								{track.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					))}
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default CallForPaperPage;

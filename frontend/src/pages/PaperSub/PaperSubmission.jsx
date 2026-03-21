import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
import "./PaperSub.css";

function PaperSubmissionPage() {
	return (
		<div className="paper-sub-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #69152 | Overwhelming response with 1059 paper submissions | Early bird registration open
				</div>
			</div>

			<Navbar />

			<header className="paper-sub-header">
				<h1>Paper Submission</h1>
			</header>

			<main className="paper-sub-main section">
				<h2>The Extended hard deadline for paper submission is Coming Soon</h2>

				<p>
					Prospective authors are invited to submit manuscripts (full paper(s)) containing original contribution
					with sufficient detail for review. <strong>All submissions must take place through “CMT Paper Submission Portal for WAMS 2026”.</strong>
					The contribution that is submitted should not have been published or submitted elsewhere.
				</p>

				<p>
					<a
						href="https://cmt3.research.microsoft.com"
						target="_blank"
						rel="noreferrer"
						aria-label="Open paper submission portal"
					>
						Paper submission link
					</a>
				</p>

				<p>
					<strong>No-show policy:</strong> At least one author must present an accepted paper in-person at the conference.
					Substitutions for presentations are allowed only after prior approval from TPC chairs.
				</p>

				<p>
					<strong>Registration:</strong> Each accepted paper should be covered by full registration.
				</p>

				<h3>Please keep the following in mind while preparing your manuscripts.</h3>

				<ul>
					<li>Submit your original unpublished (and not have been submitted elsewhere) manuscript as a pdf.</li>
					<li>
						The manuscript should follow the standard IEEE conference template. It should <strong>not exceed FIVE double-column pages</strong>,
						with single line spacing, main text font size no smaller than 10 points, and at least 3/4 inch margins (about 18 mm).
						Papers exceeding page limits will not be accepted.
					</li>
					<li>
						Authors are encouraged to use LaTeX to format their papers, using the style file and following the example given below.
						Authors using Microsoft Word are encouraged to use standard IEEE conference templates from the following link:{" "}
						<a
							href="https://www.ieee.org/conferences/publishing/templates.html"
							target="_blank"
							rel="noreferrer"
						>
							IEEE conference templates
						</a>
						.
					</li>
					<li>The names of the authors cannot be added or removed at a later stage.</li>
					<li>It should have no content written in the margins. In particular, no header, footer, or page numbers.</li>
					<li>Do not put your own page numbers on the manuscript.</li>
				</ul>

				<p className="paper-sub-final-note">
					<strong>
						All submissions must take place through the{" "}
						<a href="https://cmt3.research.microsoft.com" target="_blank" rel="noreferrer">
							CMT paper submission portal.
						</a>
					</strong>
				</p>

				<p className="paper-sub-backlink">
					<Link to="/call-for-paper">Go to Call For Papers</Link>
				</p>
			</main>

			<Footer />
		</div>
	);
}

export default PaperSubmissionPage;

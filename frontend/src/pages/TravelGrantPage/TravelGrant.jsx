import React from "react";
import "./TravelGrant.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

const eligibilityPoints = [
	"Must be a registered participant of WAMS 2027.",
	"Be a full-time student (undergraduate, master's, or doctoral level).",
	"Priority will be given to students with accepted papers for presentation at WAMS 2027.",
	"Exceptions may be made for students without accepted papers based on financial need.",
	"Demonstrate financial need, such as limited or no institutional travel support.",
	"Must not have received a full travel subsidy from other major sponsors for the same travel.",
];

const howToApplyPoints = [
	"Candidate information (name, institution, student ID, etc.).",
	"Paper acceptance notification (if applicable).",
	"Estimated travel budget.",
	"Student ID as proof of enrollment.",
];

const documentsToSubmit = [
	"Fully filled, printed, and signed travel grant application.",
	"To-and-fro booked tickets.",
	"Bank details with sufficient information for disbursement of the grant amount.",
];

const timelinePoints = [
	"Application Open: TBD (after review completion)",
	"Application Deadline: Will be announced soon",
	"Submission of Travel Claims: At the Travel Grant Desk during WAMS 2027",
];

const selectionPoints = [
	"A limited number of travel grants (maximum of 100) will be awarded.",
	"Grants will be allocated on a first-come, first-served basis, subject to eligibility and fund availability.",
	"The Travel Grant Committee's decisions are final.",
];

const termsAndConditions = [
	"Awardees must register for and attend WAMS 2027 in person.",
	"Minimum reimbursable amount: Equivalent to the sleeper-class round-trip train fare between the awardee's source station and the conference station, regardless of actual travel arrangements.",
	"Reimbursement requires submission of original tickets and the fully filled travel grant application, presented at the Travel Grant Desk during the conference.",
	"The organizing committee reserves the right to adjust grant amounts based on available funds and the number of awardees.",
];

const nearbyAttractions = [
	"Riverfront parks and heritage temples around Tadepalligudem and Rajamahendravaram.",
	"Godavari region eco-tourism points ideal for short post-conference visits.",
	"Local food streets and traditional Andhra cuisine destinations near the venue.",
];

const importantDates = [
	"Travel Grant Application Opens: To be announced",
	"Application Deadline: Will be announced soon",
	"Travel Grant Award Notification: Before conference registration close",
	"In-person claim submission window: During WAMS 2027 conference days",
];

function TravelGrantPage() {
	return (
		<div className="travel-grant-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #XXXXX | International Symposium
				</div>
			</div>
			<Navbar />

			<section className="travel-hero">
				<h1>TRAVEL GRANT GUIDELINES</h1>
			</section>

			<main className="travel-main-content">
				<section className="travel-intro">
					<h2>WAMS 2027 - Travel Grant Program</h2>
					<p>
						The WAMS 2027 Travel Grant Program aims to support student participants who require financial
						assistance to attend WAMS 2027 in person. These grants are designed to encourage broader
						student participation, particularly from institutions with limited funding opportunities.
					</p>
				</section>

				<section className="travel-panel">
					<h3>Eligibility Criteria for WAMS 2027 Travel Grant</h3>
					<p>Applicants for the WAMS 2027 Travel Grant must satisfy all of the following:</p>
					<ul className="travel-check-list">
						{eligibilityPoints.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</section>

				<section className="travel-panel">
					<h3>How to Apply</h3>
					<p>
						Applicants must fill the online Travel Grant form (
						<a href="#" target="_blank" rel="noreferrer">
							Link will be available soon
						</a>
						) with the following details:
					</p>
					<ul className="travel-check-list">
						{howToApplyPoints.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>

					<h4>Documents to Submit at the Conference</h4>
					<ul className="travel-check-list">
						{documentsToSubmit.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>
				</section>

				<section className="travel-panel travel-panel-wide" id="important-dates">
					<h3>Travel Grant - Timeline, Selection and Terms</h3>
					<p>
						Key dates, selection details, terms and conditions, and contact information for the WAMS 2027
						Travel Grant.
					</p>

					<div className="travel-grid-two-col">
						<article className="travel-sub-card">
							<h4>Timeline</h4>
							<ul className="travel-dot-list">
								{timelinePoints.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>

						<article className="travel-sub-card">
							<h4>Selection and Availability</h4>
							<ul className="travel-check-list compact">
								{selectionPoints.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</article>
					</div>

					<article className="travel-terms-card">
						<h4>Terms and Conditions</h4>
						<ol>
							{termsAndConditions.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ol>
					</article>

					<div className="travel-contact-row" id="contact-travel-grant">
						<div className="travel-contact">
							<h4>Contact</h4>
							<p>
								For any queries regarding the travel grant application, eligibility, and submission of
								claims, reach out to:
							</p>
							<a href="mailto:sivakumarperumal@icomputer.org">Dr. Sivakumar Perumal</a>						</div>

						<aside className="travel-note-card">
							<h5>Note</h5>
							<p>
								Limited grants - apply early. Decisions by the Travel Grant Committee are final.
							</p>
						</aside>
					</div>
				</section>

				<section className="travel-panel" id="nearby-attractions">
					<h3>Nearby Attractions</h3>
					<ul className="travel-dot-list">
						{nearbyAttractions.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				<section className="travel-panel">
					<h3>Important Dates Snapshot</h3>
					<ul className="travel-dot-list">
						{importantDates.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default TravelGrantPage;

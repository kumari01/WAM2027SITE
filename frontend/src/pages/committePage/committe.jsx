import React from "react";
import "./committeStyle.css";
import Navbar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";

const committeeSections = [
	{
		title: "Patron",
		members: [
			"Sri B. Venugopala Krishna, Chairman, Sasi Group of Institutions",
			"Sri M. Narendra Krishna, Vice Chairman, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Co - Patron",
		members: [
			"Dr. Sudhakar K Rao, Rao's Consultants LLC, Los Angeles, USA",
			"Dr. Dhaval Pujara, President, WAMS Society",
		],
	},
	{
		title: "General Chair",
		members: [
			"Prof. Mohammad Ismail, Principal, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "General Co-Chair",
		members: [
			"Dr. P. Sivakumar, Professor, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Organising Chairs",
		members: [
			"Dr. P. N. Malleswari, Professor, Sasi Institute of Technology and Engineering",
			"Dr. P. Hema Chandu, Professor, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Technical Program Committee",
		members: [
			"Dr. Winny Elizabeth Philip, Asso. Professor, Sasi Institute of Technology and Engineering",
			"Dr. Anantha Bharathi, Osmania University, Hyderabad",
			"Dr. Billa Kiran Kumar, Assoc. Dean R&D, Sasi Institute of Technology & Engineering",
			"P R Mahidhar, Asso. Professor, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Advisory Committee",
		members: [
			"Dr. Nacer Chahat, NASA, JPL",
			"Dr. Sim C Y Desmond, Feng Chia University, Taiwan",
			"Dr. Christophe Fumeaux, The University of Queensland",
			"Dr. C J Reddy, VP, Altair Engineering",
			"Dr. Rajeev Jyoti, Director Technical, IN-SPACe",
			"Dr. Clency Lee-Yow, President and CEO of Custom Microwave Inc., Longmont, USA",
			"Dr. Levent Sevgi, Istanbul Technical University (Emeritus)",
			"Dr. Ajay K Poddar, Synergy Microwave Corporation, USA",
			"Dr. Satish Sharma, San Diego State University",
			"Dr. Prabhakar H. Pathak, The Ohio State University, USA",
			"Dr. Animesh Biswas",
			"Dr. Jonathan Sauder, Jet Propulsion Laboratory, California Institute of Technology",
			"Dr. P Satish Rama Chowdary, Raghu Engineering College (A), Visakhapatnam",
			"Dr. Jawad Siddique, Royal Military College of Canada / Queen's University",
		],
	},
	{
		title: "Track Chairs",
		members: [
			"Dr. M D Selvaraj (Wireless), IIITDM, Kancheepuram, Chennai",
			"Dr. Koushik Dutta (Antenna), Netaji Subhash Engineering College, Kolkata",
			"Dr. Sandeep Chaturvedi (Microwave), GAETEC, Hyderabad",
		],
	},
	{
		title: "Publication Committee",
		members: [
			"Dr. G. Naveen Kishore, Professor & Head, Sasi Institute of Technology and Engineering",
			"Dr. Puli Kishore, NIT-AP",
			"N. Kusuma, Professor, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Finance Committee",
		members: [
			"Dr. V V S S S Chakravarthy, Vignan Institute of Information Technology, Visakhapatnam",
			"V V N Sujit, Administrative Officer, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Workshop / Tutorials",
		members: [
			"Dr. T V J Subrahmanyeswara Rao, Dean, Sasi Institute of Technology and Engineering",
			"Durga Bhavani Alanka, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Sponsorship & Exhibition Committee",
		members: [
			"Dr. U. Uma Maheshwara Rao, Asso. Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Special Sessions",
		members: [
			"Dr. T V Krishna Moorthi, Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Keynote & Invited Talks",
		members: [
			"Dr. B. Satya Narayana, Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Publicity Committee",
		members: [
			"Dr. S. Ramya, Asst. Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "YP, WiE & Student Activity",
		members: [
			"V. Premalatha, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Industry Relations / New Initiatives",
		members: [
			"T V Reddy, Associate Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Awards Committee",
		members: [
			"Dr. CRS Hanuman, Dean Admissions, Sasi Institute of Technology and Engineering",
			"Dr. U. Uma Maheshwara Rao, Asso. Professor, ECE, Sasi Institute of Technology and Engineering",
			"N. Kusuma, Asso. Professor, ECE, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Registration",
		members: [
			"B. Kiran Kumar, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Webmaster",
		members: [
			"P. Srinivas, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Design",
		members: [
			"Sk. Salman Basha, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Photography and Video",
		members: [
			"M. Venu, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Medical & Health Emergency",
		members: [
			"M. Srinivasa Rao, MBA. Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Local Accommodation",
		members: [
			"M. V. Kiran Kumar, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Local Transport",
		members: [
			"K L N Siva, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Help Desk",
		members: [
			"S N V P Ravi Teja, Sasi Institute of Technology and Engineering",
			"Unnisa Begum, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Hall, Stage Arrangement, Food & Refreshments",
		members: [
			"P. Vijay, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "International delegates and VISA",
		members: [
			"Dr. Shaik Mohammad Rafee, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Cultural",
		members: [
			"N. Sannajaji, Sasi Institute of Technology and Engineering",
		],
	},
	{
		title: "Stage Management",
		members: [
			"Dr Praveena, Sasi Institute of Technology and Engineering",
		],
	},
];

function CommittePage() {
	return (
		<div className="committee-page">
			<div className="top-bar">
				<div className="top-bar-content">
					IEEE Conference Record #XXXXX | International Symposium
				</div>
			</div>

			<Navbar />

			<header className="committee-hero">
				<h1 className="committee-title">COMMITTEE</h1>
				<p className="committee-breadcrumb">Home | Committee</p>

				<div className="committee-logos" aria-label="committee partners">
					<div className="committee-logo-card">
						<img src="/WAMS.png" alt="WAMS" className="committee-logo" />
					</div>
					<div className="committee-logo-card committee-logo-card-wide">
						<img src="/SASILOGO2.png" alt="Sasi Institute" className="committee-logo" />
					</div>
				</div>
			</header>

			<section className="section committee-content-wrap">
				<div className="committee-content">
					<h2 className="section-title">WAMS 2027 ORGANISING COMMITTEE</h2>
					{committeeSections.map((section) => (
						<div className="committee-group" key={section.title}>
							<h3 className="committee-group-title">{section.title}</h3>
							{section.members.map((member) => (
								<p key={member}>{member}</p>
							))}
						</div>
					))}
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default CommittePage;

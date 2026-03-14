import React from "react";
import "../App.css";
import "../index.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-row-1">
                <div className="logo">WAMS 2026</div>
                    <ul className="nav-links">
                        <li><a href="#home" className="active">Home</a></li>
                        <li className="has-dropdown">
                            <a href="#society">WAMS Society <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="WAMS Society submenu">
                                <li><a href="https://wams-society.com" target="_blank" rel="noreferrer">WAMS Membership</a></li>
                                <li><a href="#current-members">Current members</a></li>
                                <li className="submenu-indicator"><a href="#previous-wams">Previous WAMS <span className="sub-arrow">▸</span></a></li>
                            </ul>
                        </li>
                        <li><a href="#committee">Committee</a></li>
                        <li className="has-dropdown">
                            <a href="#authors">Authors <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="Authors submenu">
                                <li><a href="#call-for-papers">Call For Papers</a></li>
                                <li><a href="#paper-submission">Paper Submission</a></li>
                                <li><a href="#crc-submission">CRC &amp; Copyright Submission</a></li>
                            </ul>
                        </li>
                        <li><a href="#awards">Awards</a></li>
                        <li className="has-dropdown">
                            <a href="#travel">Travel Grant <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="Travel Grant submenu">
                                <li><a href="#venue">Venue</a></li>
                                <li><a href="#how-to-travel">How To Travel</a></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <a href="#wie">WIE/YP/SA <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="WIE YP SA submenu">
                                <li><a href="#wie-focus">WIE</a></li>
                                <li><a href="#young-professionals">YOUNG PROFESSIONALS</a></li>
                                <li className="has-submenu">
                                    <a href="#student-activities">Student Activities <span className="sub-arrow">▸</span></a>
                                    <ul className="dropdown-submenu" aria-label="Student Activities submenu">
                                        <li><a href="#student-paper-contest">Student Paper Contest</a></li>
                                        <li><a href="#student-workshop">Student Workshop</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#accommodation">Accommodation</a></li>
                        <li className="has-dropdown">
                            <a href="#sessions">Special Sessions <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="Special Sessions submenu">
                                <li><a href="#session-proposals">Session Proposals</a></li>
                                <li><a href="#accepted-sessions">Accepted Sessions</a></li>
                            </ul>
                        </li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#registration">Registration</a></li>
                        <li className="has-dropdown">
                            <a href="#sponsors">Sponsors <span className="nav-arrow">▾</span></a>
                            <ul className="dropdown-menu" aria-label="Sponsors submenu">
                                <li><a href="#sponsorship-brochure">Sponsorship Brochure</a></li>
                                <li><a href="#become-a-sponsor">Become a Sponsor</a></li>
                            </ul>
                        </li>
                    </ul>
            </div>
            <div className="navbar-row-2">
                <ul className="nav-links-secondary">
                    <li><a href="#attractions">Nearby Attractions</a></li>
                    <li><a href="#dates">Important Dates</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;
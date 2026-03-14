import React from "react";
import "../App.css";

function ImportantDates() {
    return (
        <section className="section" id="dates">
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>Important Dates</h2>
            <div className="dates-grid">
            <div className="date-card">
                <div className="date-icon">📄</div>
                <div className="date-title">Paper Submission Deadline</div>
            </div>
            <div className="date-card">
                <div className="date-icon">✅</div>
                <div className="date-title">Acceptance Notification</div>
            </div>
            <div className="date-card">
                <div className="date-icon">📷</div>
                <div className="date-title">Camera Ready Submission</div>
            </div>
            <div className="date-card">
                <div className="date-icon">🎟️</div>
                <div className="date-title">Early Bird Registration</div>
            </div>
            </div>
        </section>

    )
}

export default ImportantDates;
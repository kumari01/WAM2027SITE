import React , {useEffect, useState}from "react";
import "../App.css";
import CarouselBackground from "./CarouselBackground";
const heroCarouselImages = [
  "SASI1.jpeg",
  "SASI2.jpeg"
];

function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

  useEffect(() => {
    const targetDate = new Date("June 16, 2027 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return(
        <section id="home" className="hero">        <CarouselBackground images={heroCarouselImages} autoplayInterval={5000} />        <div className="hero-content">
          <div className="hero-logos">
            <img src="/WAMS.png" alt="WAMS Logo" className="hero-logo-wams" />
            <img src="/SASILOGO2.png" alt="Sasi Institute of Technology and Engineering" className="hero-logo-site" />
          </div>
          <h2 className="hero-subtitle">Wireless, Antenna & Microwave Symposium</h2>
          <h1 className="hero-title">WAMS 2027</h1>
          <p className="hero-dates">June 16 -19, 2027</p>
          <p className="hero-org">Organized by<br />Sasi Institute of Technology and Engineering Tadepalligudem, Andhra Pradesh, India</p>

          <div className="timer">
            <div className="timer-box">
              <span className="timer-num">{timeLeft.days}</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-box">
              <span className="timer-num">{timeLeft.hours}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-box">
              <span className="timer-num">{timeLeft.minutes}</span>
              <span className="timer-label">Minutes</span>
            </div>
            <div className="timer-box">
              <span className="timer-num">{timeLeft.seconds}</span>
              <span className="timer-label">Seconds</span>
            </div>
          </div>

          <button className="btn-primary">Submit Paper</button>
        </div>
      </section>
    )
}
export default HeroSection;
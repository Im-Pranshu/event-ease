import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { SiTask as Square } from "react-icons/si";
import { FaUserFriends as User } from "react-icons/fa";
import { BiSolidCustomize as Customizable } from "react-icons/bi";
import { RiSecurePaymentFill as Secure } from "react-icons/ri";

export default function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <section className="main-section">
          <Square className="hero-image" />
          <h1>Welcome to EventEase</h1>
          <p className="tagline">
            Your one-stop solution for seamless event management tailored for
            users, vendors, and administrators.
          </p>

          <p>
            Whether you're organizing a corporate event, wedding, or community
            gathering, EventEase ensures that every detail is handled with
            precision. Simplify collaboration, streamline tasks, and enjoy a
            stress-free planning experience.
          </p>
        </section>

        <section className="features">
          <h2>Why Choose EventEase?</h2>
          <div className="feature">
            <User className="feature-icon" />
            <div>
              <h3>User-Friendly</h3>
              <p>
                A clean, intuitive interface makes it easy for everyone to
                manage events effectively.
              </p>
            </div>
          </div>
          <div className="feature">
            <Customizable className="feature-icon" />
            <div>
              <h3>Highly Customizable</h3>
              <p>
                Flexible features let you adapt the platform to fit your
                specific needs.
              </p>
            </div>
          </div>
          <div className="feature">
            <Secure className="feature-icon" />
            <div>
              <h3>Secure</h3>
              <p>
                Built with security in mind to protect your sensitive data and
                transactions.
              </p>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <p>Ready to elevate your event management experience?</p>
          <Link to="/sign-up" className="cta-button">
            Get Started Now
          </Link>
        </section>
      </main>
    </div>
  );
}

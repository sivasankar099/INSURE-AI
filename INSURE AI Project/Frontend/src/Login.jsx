// App.jsx
import React from "react";
import "./App.css";

function LoginPage() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="brand">Shieldify Ai</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <h1>Protect What Matters Most</h1>
          <p>AI-powered insurance simplified and secure.</p>
          <button className="get-started">Get Started</button>
        </section>

        <section className="services">
          <h2>Our Insurance Types</h2>
          <ul>
            <li>Health Insurance</li>
            <li>Life Insurance</li>
            <li>Vehicle Insurance</li>
            <li>Home Insurance</li>
            <li>Travel Insurance</li>
            {/* Add more as needed */}
          </ul>
        </section>

        <section className="about" id="about">
          <h2>About Shieldify Ai</h2>
          <p>
            Shieldify Ai combines technology and insurance expertise to offer smart,
            affordable, and hassle-free protection for individuals and families.
          </p>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Shieldify Ai. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default LoginPage;

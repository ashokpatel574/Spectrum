import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="landingPage_main-container">
      <aside className="hero-container flex-center">
        <h2>LandingPage</h2>
      </aside>
      <article className="userCredentials-container flex-center">
        <Outlet />
      </article>
    </section>
  );
};

export default LandingPage;

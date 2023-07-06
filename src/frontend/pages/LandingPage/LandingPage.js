import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="landingPage_main-container">
      <aside className="flex-center hero-container">
        <h2>spectrum</h2>
        <p>
          Discover the Spectrum of Connections - Join our Social Media
          Revolution!
        </p>
      </aside>
      <article className="userCredentials-container flex-center">
        <Outlet />
      </article>
    </section>
  );
};

export default LandingPage;

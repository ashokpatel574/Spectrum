import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useThemeContext } from "../../context/ThemeContext";

const LandingPage = () => {
  const { themeMode } = useThemeContext();

  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme={themeMode}
      />
    </>
  );
};

export default LandingPage;

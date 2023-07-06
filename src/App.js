import { Outlet } from "react-router-dom";
import Header from "./frontend/components/Header/Header";
import SideBar from "./frontend/components/SideBar/SideBar";
import SuggestionFeed from "./frontend/components/SuggestionFeed/SuggestionFeed";
import { useData } from "./frontend/context/DataContext";
import PostModal from "./frontend/components/Modal/PostModal";
import ProfileModal from "./frontend/components/Modal/ProfileModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingMenu from "./frontend/components/FloatingMenu/FloatingMenu";
import { ActionType } from "./frontend/constant";
import { useThemeContext } from "./frontend/context/ThemeContext";
import ScrollToTop from "./frontend/components/ScrollToTop/ScrollToTop";

const App = () => {
  const {
    state: { isPostModalOpen, isProfileModalOpen },
    dispatch,
  } = useData();

  const { themeMode } = useThemeContext();

  const closeModalOverlayHandler = (e) => {
    if (
      e.target.className === "profileModal_overlay" ||
      e.target.className === "profileModal-section"
    ) {
      dispatch({
        type: ActionType.CloseProfileModal,
      });
    }

    if (
      e.target.className === "postModal_overlay" ||
      e.target.className === "postModal_section"
    ) {
      dispatch({
        type: ActionType.ClosePostModal,
      });
    }
  };

  return (
    <main className="sprectrumApp_container">
      <Header />
      <article className="homePage_container container_section-width ">
        <SideBar />
        <Outlet />
        <SuggestionFeed />
      </article>
      <FloatingMenu />

      {isPostModalOpen && (
        <div
          className="postModal_overlay"
          onClick={(e) => {
            closeModalOverlayHandler(e);
          }}
        >
          <PostModal />
        </div>
      )}

      {isProfileModalOpen && (
        <div
          className="profileModal_overlay"
          onClick={(e) => {
            closeModalOverlayHandler(e);
          }}
        >
          <ProfileModal />
        </div>
      )}
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

      <ScrollToTop />
    </main>
  );
};

export default App;

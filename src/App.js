import { Outlet } from "react-router-dom";
import Header from "./frontend/components/Header/Header";
import SideBar from "./frontend/components/SideBar/SideBar";
import SuggestionFeed from "./frontend/components/SuggestionFeed/SuggestionFeed";
import { useData } from "./frontend/context/DataContext";
import PostModal from "./frontend/components/Modal/PostModal";
import ProfileModal from "./frontend/components/Modal/ProfileModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingMenu from "./frontend/components/FloatingMenu/FloatingMenu";

const App = () => {
  const {
    state: { isPostModalOpen, isProfileModalOpen },
    dispatch,
  } = useData();

  const profileModalOverlayHandler = (e) => {
    if (e.target.className === "profileModal_overlay") {
      dispatch({
        type: "closeProfileModal",
      });
    }
  };

  return (
    <main className="sprectrumApp_container">
      <Header />
      <article className="homePage_container ">
        <SideBar />
        <Outlet />
        <SuggestionFeed />
      </article>
      <FloatingMenu />

      {isPostModalOpen && (
        <div className="postModal_overlay">
          <PostModal />
        </div>
      )}

      {isProfileModalOpen && (
        <div
          className="profileModal_overlay"
          onClick={(e) => {
            profileModalOverlayHandler(e);
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
        theme={`light`}
      />
    </main>
  );
};

export default App;

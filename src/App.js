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
  } = useData();
  return (
    <main className={`sprectrumApp_container  ${false && "postModalActive"}  `}>
      <Header />
      <article className="homePage_container ">
        <SideBar />
        <Outlet />
        <SuggestionFeed />
      </article>
      <FloatingMenu />

      {isPostModalOpen && (
        <div className="postModal_main-container">
          <PostModal />
        </div>
      )}

      {isProfileModalOpen && (
        <div className="profileModal_main-container">
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

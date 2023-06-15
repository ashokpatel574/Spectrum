import { Outlet } from "react-router-dom";
import Header from "./frontend/components/Header/Header";
import SideBar from "./frontend/components/SideBar/SideBar";
import SuggestionFeed from "./frontend/components/SuggestionFeed/SuggestionFeed";

const App = () => {
  return (
    <main className="sprectrumApp_container">
      <Header />
      <article className="homePage_container">
        <SideBar />
        <Outlet />
        <SuggestionFeed />
      </article>
    </main>
  );
};

export default App;

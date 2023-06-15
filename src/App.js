import { Outlet } from "react-router-dom";
import Header from "./frontend/components/Header/Header";

const App = () => {
  return (
    <main className="sprectrumApp_container">
      <Header />
      <Outlet />
    </main>
  );
};

export default App;

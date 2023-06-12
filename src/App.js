import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="sprectrumApp_container">
      <Outlet />
    </main>
  );
};

export default App;

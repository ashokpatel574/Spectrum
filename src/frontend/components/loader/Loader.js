import { Oval } from "react-loader-spinner";
import "./loader.css";

import { useThemeContext } from "../../context/ThemeContext";

const Loader = () => {
  const { themeMode } = useThemeContext();
  return (
    <section className="loader_container flex-center flex-column gap-m">
      <Oval
        height={50}
        width={50}
        color={themeMode === "light" ? "#3c0ac2" : "#fff"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={themeMode === "light" ? "#30089b" : "#fff"}
        strokeWidth={6}
        strokeWidthSecondary={6}
      />
      <h3>Loading... Please wait</h3>
    </section>
  );
};

export default Loader;

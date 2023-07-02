import { Oval } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <section className="loader_container flex-center flex-column gap-m">
      <Oval
        height={50}
        width={50}
        color="#3c0ac2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#30089b"
        strokeWidth={6}
        strokeWidthSecondary={6}
      />
      <h3>Loading... Please wait</h3>
    </section>
  );
};

export default Loader;

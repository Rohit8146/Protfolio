import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./Routes/Layout";
import ContextStates from "./context/ContextStates";
import Lenis from "lenis";
import { Loader } from "./components/Loader/Loader";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <ContextStates>
      <BrowserRouter>
        <Loader />
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </ContextStates>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./Routes/Layout";
import ContextStates from "./context/ContextStates";
import { Loader } from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import SmoothScroll from "./hooks/SmoothScroll/SmoothScroll";

function App() {
  return (
    <ContextStates>
      <SmoothScroll>
        <BrowserRouter>
          <Cursor />
          <Loader />
          <Header />
          <Layout />
          <Footer />
        </BrowserRouter>
      </SmoothScroll>
    </ContextStates>
  );
}

export default App;

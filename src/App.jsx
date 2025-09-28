import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./Routes/Layout";
import ContextStates from "./context/ContextStates";

function App() {
  return (
    <ContextStates>
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </ContextStates>
  );
}

export default App;

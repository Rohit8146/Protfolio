import About from "../components/About/About";
import { Banner } from "../components/Banner/Banner";
import Experience from "../components/Experience/Experience";
import MySkills from "../components/MySkills/MySkills";

function Homepage() {
  return (
    <main>
      <Banner />
      <About />
      <MySkills />
      <Experience />
    </main>
  );
}

export default Homepage;

import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
// import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Skills from "./components/Experience/Skills.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Work from "./components/Work.jsx"

const App = () => (
  <div className="">
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Skills />
    {/* <Experience /> */}
    <Contact />
    <Footer />
  </div>
);

export default App;

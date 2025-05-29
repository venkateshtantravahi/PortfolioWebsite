import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogposts from "./components/Blogposts";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Certifications />
      <Projects />
      <Blogposts />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

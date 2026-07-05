import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Project from "./pages/projects/Project";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main>
          <Home />
          <Skills />
          <Experience />
          <Project />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

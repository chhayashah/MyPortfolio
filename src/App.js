import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/experience';
import Project from './pages/projects/Project';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Project />
      <Footer/>
    </div>
  );
}

export default App;

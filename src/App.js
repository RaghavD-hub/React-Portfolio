import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
    <main>
      <Header />
      <Aboutme />
      <Experience />
      <Projects />
     </main>
     <Footer />
    </div>  
  );
}

export default App;

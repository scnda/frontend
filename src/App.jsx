import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="intro">
        <Navbar />
        <Intro />
      </div>
      <Trending/>
      <Superhero/>
      <a href="#top" className="btn btn-warning p-2 tombol">Go to Top</a>
      <Footer/>
    </>
  )
}

export default App
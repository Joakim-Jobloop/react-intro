
import "./App.css";
import { CountSection } from "../components/CountSection";
import Navbar from "../components/Navigation/Navbar";
import { Gallery } from "../components/Navigation/Gallery";


function App() {
  const boxName = "I am box";  

  return (
    <>
      <Navbar />

      <main>
          <CountSection />
        <Gallery/>
      </main>
    </>
  );
}

export default App;

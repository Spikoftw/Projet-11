// Les dépendances
import { Route, Routes } from "react-router-dom";

// Le CSS
import "./App.css";

// Les composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// Les pages
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

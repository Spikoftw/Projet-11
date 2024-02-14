// Pas dispo partout dans l'App
// Les dépendances
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Les pages
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import User from "./Pages/User";

// Les composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// Dispo partout dans l'app
// Le CSS
import "./App.css";
import "./css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

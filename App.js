import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import User, { Home, Extra } from "./User";
import Style from "./Style/Style";
import Profile from "./components/profile/Profile";
import Registration from "./components/RegistrationForm/Registration";
import Login from "./components/LoginForm/Login";
import Nav from "./components/Nav";
import Card from "./components/Card";

import Navbar from "./components/Main navigation, Header , Footer & Search bar/Navbar";
import Header from "./components/Main navigation, Header , Footer & Search bar/Header";
import Footer from "./components/Main navigation, Header , Footer & Search bar/Footer";
import SearchBar from "./components/Main navigation, Header , Footer & Search bar/SearchBar";

function App() {
  const array = [10, 20, 30, 40, 50];
  const userName = "Chetu";
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar />
        <SearchBar />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/style" element={<Style />}></Route>
        </Routes>
        <Footer /> */}

        <>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/registration"
              element={<Registration />}
            ></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;

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

function App() {
  const array = [10, 20, 30, 40, 50];
  const userName = "Chetu";
  return (
    <BrowserRouter>
      <div className="App">
        <header>This is header</header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/user"
            element={<User name={userName} age={22} />}
          ></Route>
          <Route
            path="/profile"
            element={<Profile name={userName} age={22} />}
          ></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>

        <footer>This is footer</footer>
      </div>
    </BrowserRouter>
    // <>
    //   <Router>
    //     <Routes>
    //       <Route
    //         exact
    //         path="/user"
    //         element={<User name="Parmeshvar" age="22" />}
    //       ></Route>
    //       <Route exact path="/" element={<Home />}></Route>
    //       <Route exact path="/style" element={<Style />}></Route>
    //       <Route exact path="/extra" element={<Extra />}></Route>
    //     </Routes>
    //   </Router>
    // </>
  );
}

export default App;

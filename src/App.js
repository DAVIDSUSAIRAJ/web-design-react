import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./component/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Logout from "./pages/logout";
function App() {
  return (
    <div className="App">
      <Router>
        {/* this is navbar component */}
        <Nav />
        <Routes>
          {/* this is pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

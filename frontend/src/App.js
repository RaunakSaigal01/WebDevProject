import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Reports from "./pages/AdminReports";
import Form from "./pages/Form"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./index.css";
function Home() {
  const navigate = useNavigate();
  
  return (
    <>
    <nav className="navbar">
        <div className="logo-space"><img src="/logo1.png" alt="Care Point Logo" className="logo" width={150} height={100}/></div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/form">Student Form</a>
          <a href="/reports">Reports</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    <center><div className="home-container">
      <h1>Welcome to CarePoint</h1>
      <button onClick={() => navigate("/Login")}>I'm a Student</button>
      <button onClick={() => navigate("/Reports")}>Download Reports</button>
    </div></center>
    <footer className="footer">
        &copy; 2025 Care Point™ | All Rights Reserved | Contact: support@carepoint.com
      </footer>
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/Form" element={<Form />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;

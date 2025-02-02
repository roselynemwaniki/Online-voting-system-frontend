import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Voting from "./pages/Voting";
import Results from "./pages/Results";
import CandidateForm from "./pages/CandidateForm";

function App() {
  return (
    <Router>
      <nav>
        <h1>Voting System</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/vote">Vote</Link></li>
          <li><Link to="/results">Results</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vote" element={<Voting />} />
        <Route path="/results" element={<Results />} />
        <Route path="/candidateform" element={<CandidateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
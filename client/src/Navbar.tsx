// Navbar.tsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <img src="/ATM.png" alt="Logo" className="logo" />
      <p>ETAM Guide</p>
      <Link to="/Home" className="nav-button">Home</Link>
      <Link to="/past-exams" className="nav-button">Past Resources</Link>
      <Link to="/button-2" className="nav-button">Button 2</Link>
      <Link to="/button-3" className="nav-button">Button 3</Link>
      <Link to="/button-4" className="nav-button">Button 4</Link>
      <Link to="/gpa-calc" className="nav-button">GPA calculator</Link>
    </div>
  );
}

export default Navbar;
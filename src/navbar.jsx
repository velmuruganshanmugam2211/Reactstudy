import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1>My App</h1>
      <nav> <div className="flex flex-row gap-5" >
        <Link to="/home">Home</Link>
        <Link to="/course">Courses</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/app">App</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

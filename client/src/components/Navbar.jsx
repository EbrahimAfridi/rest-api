import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <h1>Workout Planner</h1>
        </Link>
        <div>
          <Link to="/" style={{ marginRight: "20px" }}>
            Home
          </Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to={"/"}>
          <h1>Workout Planner</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

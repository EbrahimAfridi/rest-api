import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="App">
      Home
      <p>
        <Link to={"/about"}>About Us</Link>
      </p>
    </main>
  );
}

export default App;

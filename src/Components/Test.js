import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <nav className="navbar">
        <div className="links">
          <Link to="/">ALL</Link>
          <Link to="/">COMPLETED</Link>
          <Link to="/"> UNCOMPLETED</Link>
        </div>
      </nav>
    </div>
  );
}

export default Test;

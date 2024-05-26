import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sample">Sample Board</NavLink>
        </li>
        <li>
          <NavLink to="/random">Random Board</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

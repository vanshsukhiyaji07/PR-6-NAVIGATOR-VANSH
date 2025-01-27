import { NavLink } from "react-router-dom";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary gap-4">
        <div className="container-fluid">
        <NavLink to="/" className="text-blue-500 hover:underline navbar-brand ">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-brand">
          About
        </NavLink>
        <NavLink to="/contact" className="navbar-brand">
          Contact
        </NavLink>
        <NavLink to="/register" className="navbar-brand">
        Register
        </NavLink>
        <NavLink to="/login" className="navbar-brand">
        LogIn
        </NavLink>
        </div>
      </nav>
    );
  }

  export default Nav
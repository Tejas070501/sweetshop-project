import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ background: "#fff1bf", padding: "1rem" }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/login">Login</Link>{" | "}
      <Link to="/register">Register</Link>
    </nav>
  );
}
export default Navbar;
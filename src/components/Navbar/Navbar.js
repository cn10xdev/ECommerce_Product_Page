import { Outlet } from "react-router-dom";

/* Styles */
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <Outlet />
    </>
  );
};

export default Navbar;

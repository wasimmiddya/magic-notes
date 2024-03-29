import "./navbar.css";

// Imports of react icons

import { GiHamburgerMenu } from "react-icons/gi";
import { MdMotionPhotosAuto } from "react-icons/md";

// Two more logos from react icons for choiceing

import { FcFlashAuto } from "react-icons/fc";
import { MdOutlineAutofpsSelect } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="MenuIcon">
        <GiHamburgerMenu
          style={{ fontSize: "25px", cursor: "pointer" }}
          className="Micon"
        />
      </div>
      <div className="logoDiv">
        <MdMotionPhotosAuto style={{ fontSize: "30px" }} className="logo" />
        <span className="logoName">AutoMind </span>
      </div>

      <div className="Auth">
        <button className="AuthBtn">Log In</button>
        <button className="AuthBtn">Sign Up</button>
      </div>
    </div>
  );
}

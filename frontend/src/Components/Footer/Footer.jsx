import "./footer.css";

//Imported icons from react-icons

import { MdMotionPhotosAuto } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <span className="logoName">
              <MdMotionPhotosAuto
                style={{ fontSize: "25px", margin: "0 2px" }}
              />
              AutoMind
            </span>
          </div>
          <div className="sb_footer-links-div">
            <h4>Resources</h4>
            <a href="/resource">
              <p>Resource center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/resource">
              <p>STV</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Partners</h4>
            <a href="/employe">
              <p>OpenAi</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contribute">
              <p>Contribute</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <ImFacebook style={{ fontSize: "25px" }} />
              </p>
              <p>
                <BsTwitter style={{ fontSize: "25px", margin: "0 5px" }} />
              </p>
              <p>
                <AiFillInstagram style={{ fontSize: "25px" }} />
              </p>
              <p>
                <FaLinkedin style={{ fontSize: "25px", margin: "0 5px" }} />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>Copyright {new Date().getFullYear()} ©️ all right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div className="">
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div className="">
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div className="">
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div className="">
                <p>Cookies Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

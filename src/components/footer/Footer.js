import "./Footer.css";

import instagram from "./../../img/instagram.svg";
import linkedin from "./../../img/linkedIn.svg";
import github from "./../../img/gitHub.svg";
import twitter from "./../../img/twitter.svg";
import vk from "./../../img/vk.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <ul className="social">
          <li className="social-item">
            <a href="https://goodle.com" className="social-item-link">
              <img src={vk} alt="vk" className="social-item-link-img" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://goodle.com" className="social-item-link">
              <img
                src={instagram}
                alt="instagram"
                className="social-item-link-img"
              />
            </a>
          </li>
          <li className="social-item">
            <a href="https://goodle.com" className="social-item-link">
              <img
                src={twitter}
                alt="twitter"
                className="social-item-link-img"
              />
            </a>
          </li>
          <li className="social-item">
            <a href="https://goodle.com" className="social-item-link">
              <img src={github} alt="github" className="social-item-link-img" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://goodle.com" className="social-item-link">
              <img
                src={linkedin}
                alt="linkedin"
                className="social-item-link-img"
              />
            </a>
          </li>
        </ul>
        <div className="copyrights-wrapper">
          <p className="copyrights">© 2022 frontend-dev.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

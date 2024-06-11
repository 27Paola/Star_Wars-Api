import "./Footer.css";
import { GiFastArrow } from "react-icons/gi";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <GiFastArrow/>
        <p className="footer-text">
          Esta Api fue creada para los amantes de Star Wars
        </p>
      </div>
    </footer>
  );
};

export default Footer;

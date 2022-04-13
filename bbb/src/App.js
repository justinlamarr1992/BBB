import Logo from "./images/Logo.png";
import "./style.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <div>
      <header className="">
        <p className="font">Coming Soon</p>
        <img src={Logo} alt="Logo" />
        <p className="follow-text">Store Under Construction. Follow Us...</p>
        <a
          className="social social1"
          href="https://www.facebook.com/baldblackandbearded"
          target="_blank"
        >
          <i class="icon fab fa-5x fa-facebook-f"></i>
        </a>

        <a
          className="social social2"
          href="https://www.instagram.com/baldblackandbearded/"
          target="_blank"
        >
          <i class="icon fab fa-5x fa-instagram"></i>
        </a>
      </header>
    </div>
  );
};

export default App;

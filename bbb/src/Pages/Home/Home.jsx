import React from "react";
import Logo from "../../Assets/images/Logo.png";
import "./home.css";

const Home = () => {
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

export default Home;

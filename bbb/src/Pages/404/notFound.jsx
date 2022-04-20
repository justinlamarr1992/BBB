import React from "react";
import "./notFound.css";
import Crown from "../../Assets/images/Crown.png";

const notFound = () => {
  return (
    <div>
      <header className="">
        <p className="font">The page you are looking for is not here</p>
        <img src={Crown} alt="Crown" />
      </header>
    </div>
  );
};

export default notFound;

import React from "react";
import { Link } from "react-router-dom";

const Loader = () => {
  return (
    <div className="Loader-back">
      <div className="Loader-cont">
        <Link to="/home">
          <img
            className="Loader-img"
            src="https://media.giphy.com/media/SBhLTIYE4WCNq/giphy.gif"
            alt="loader"
          />
        </Link>
      </div>
    </div>
  );
};

export default Loader;

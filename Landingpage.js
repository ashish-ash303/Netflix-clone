import React from "react";
import "./Landingpage.css";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="landingpage">
      <div className="landingpage__content">
        <div className="landingpage__header">
          <img
            className="landingpage__logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          />
        
          <button className="landingpagenav__button">Sign in</button>

          
        
        </div>

        <div className="landingpage__center">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <Link to="/login">
            <button className="landingpage__button">GET STARTED ></button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;

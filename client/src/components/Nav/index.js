import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left">
            <li className={props.home ? "active" : ""}>
              <b>
                <a href="/">Home</a>
              </b>
            </li>
            <li className={props.saved ? "active" : ""}>
              <b>
                <a href="/saved">Saved</a>
              </b>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-med-and-down">
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
  );
}

export default Nav;

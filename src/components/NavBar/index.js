import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <nav>
      <ul>

        <li><strong>Clicky Game</strong></li>
        <li className={props.lose !== null ? 
  (props.lose ? "message text-danger" : "message" ) : "message"} ><span>{props.message}</span></li>
        {/* <li className={props.lose ? "message text-danger" : "message text-success"}><span>{props.message}</span></li> */}
        <li>Score: <span>{props.counter}</span> | Top Score: <span>{props.high_score}</span></li>

      </ul>
    </nav>
  )
}

export default NavBar;


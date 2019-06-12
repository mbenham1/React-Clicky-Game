import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className={props.lose ? "card shake" : "card"}>
      <div className="img-container" onClick={() => props.clickedOrNot(props.id)} >
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
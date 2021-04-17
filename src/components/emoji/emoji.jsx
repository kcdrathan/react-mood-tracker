import React from "react";

import "./emoji.css";

export default function Emoji(props) {
  return (
    <div className="emoji-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monsters.id}?set=set2`}
      />
    </div>
  );
}

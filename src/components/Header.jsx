import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="Header Container">
      <div className="Row">
        <p>IMAGE HERE</p>

        <div className="buttons">
          <button className="Add-PC">Add Player Character Here</button>
          <button className="Add-NPC">Add NPC Here</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

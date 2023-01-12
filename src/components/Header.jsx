import { useState } from "react";
import Inputs from "./Inputs";

const Header = ({ inits, SetInits, Clear }) => {
  const [popUp, SetPopUp] = useState(false);

  const togglePopUp = () => {
    SetPopUp(!popUp);
  };

  return (
    <div className="Header">
      <div className="">
        <p>IMAGE HERE</p>

        <div className="buttons">
          <button className="Add-PC" onClick={togglePopUp}>
            Add Character Here
          </button>
          <button className="Add-NPC" onClick={Clear}>
            Clear Table
          </button>
        </div>

        {popUp && (
          <Inputs toggle={togglePopUp} inits={inits} SetInits={SetInits} />
        )}
      </div>
    </div>
  );
};

export default Header;

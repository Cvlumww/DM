import { useState } from "react";
import Inputs from "./Inputs";

const Header = ({ inits, SetInits, Clear, Sort }) => {
  const [popUp, SetPopUp] = useState(false);

  const togglePopUp = () => {
    SetPopUp(!popUp);
  };

  return (
    <div className="Header">
      <div className="">
        <h1>DnD Combat Initiative List Sorter</h1>

        <div className="buttons">
          <button onClick={togglePopUp}>Add Character Here</button>

          <button onClick={Sort}>Sort by Initiative order</button>
        </div>

        <div className="buttons">
          <button onClick={Clear}>Clear Table</button>
        </div>

        {popUp && (
          <Inputs toggle={togglePopUp} inits={inits} SetInits={SetInits} />
        )}
      </div>
    </div>
  );
};

export default Header;

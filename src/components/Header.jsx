import { useState } from "react";
import Inputs from "./Inputs";

const Header = ({ initiatives, setInitiatives, Clear, Sort }) => {
  const [popUp, SetPopUp] = useState(false);

  const togglePopUp = () => {
    SetPopUp(!popUp);
  };

  const handleVarDump = () => {
    console.log(initiatives);
  };

  return (
    <div className="Header">
      <div className="">
        <h1>DnD Combat Initiative List Sorter</h1>

        <div className="buttons">
          <button onClick={togglePopUp}>Add Character Here</button>

          <button onClick={Sort}>Sort by Initiative order</button>
        </div>
        <br />
        <br />
        <div className="nav2">
          <button onClick={Clear}>Clear Table</button>
          <button onClick={handleVarDump}>Var Dump</button>
        </div>

        {popUp && (
          <Inputs
            toggle={togglePopUp}
            initiatives={initiatives}
            setInitiatives={setInitiatives}
          />
        )}
      </div>
    </div>
  );
};

export default Header;

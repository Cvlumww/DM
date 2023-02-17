import { useState, useContext } from "react";
import AppContext from "../AppContext";

import Inputs from "./Inputs";
import InputsPC from "./InputsPC";

const Header = () => {
  const [npcPopUp, SetNpcPopUp] = useState(false);
  const toggleNPCPopUp = () => {
    SetNpcPopUp(!npcPopUp);
  };

  const [pcPopUp, SetPcPopUp] = useState(false);
  const togglePCPopUp = () => {
    SetPcPopUp(!pcPopUp);
  };

  const { Clear } = useContext(AppContext);
  const { Sort } = useContext(AppContext);
  const { initiatives } = useContext(AppContext);

  return (
    <div className="Header">
      <h1>DnD Easier Combat for GM's</h1>

      <div className="buttons">
        <button onClick={togglePCPopUp} className="Add" autoFocus>
          Add Player Character Here
        </button>

        <button onClick={toggleNPCPopUp} className="Add" autoFocus>
          Add Non-Player Character Here
        </button>
        <button onClick={Clear} className="Clear">
          Clear Table
        </button>
        <button onClick={Sort} className="Sort">
          Sort by Initiative order
        </button>
      </div>

      <div className="nav2"></div>

      {npcPopUp && <Inputs toggle={toggleNPCPopUp} />}
      {pcPopUp && <InputsPC toggle={togglePCPopUp} />}
    </div>
  );
};

export default Header;

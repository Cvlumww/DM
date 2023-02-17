import { useState, useContext } from "react";
import Inputs from "./Inputs";
import AppContext from "../AppContext";

const Header = () => {
  const [popUp, SetPopUp] = useState(false);
  const togglePopUp = () => {
    SetPopUp(!popUp);
  };

  const { Clear } = useContext(AppContext);
  const { Sort } = useContext(AppContext);
  const { initiatives } = useContext(AppContext);

  return (
    <div className="Header">
      <div className="">
        <h1>DnD Easier Combat for GM's</h1>

        <div className="buttons">
          <button onClick={togglePopUp} className="Add" autoFocus>
            Add Character Here
          </button>

          <button onClick={Sort} className="Sort">
            Sort by Initiative order
          </button>
        </div>
        <br />
        <br />
        <div className="nav2">
          <button onClick={Clear}>Clear Table</button>
        </div>

        {popUp && <Inputs toggle={togglePopUp} />}
      </div>
    </div>
  );
};

export default Header;

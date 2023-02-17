import { useState, useEffect, useContext } from "react";
import App from "../App";
import AppContext from "../AppContext";

const Inputs = ({ toggle }) => {
  const [inputCharacterCounter, SetInputCharacterCounter] = useState(0);

  const { formSubmitNPC } = useContext(AppContext);
  const { initiatives } = useContext(AppContext);

  return (
    <div className="Pop-Up">
      <div className="inputBox">
        <button onClick={toggle} className="closeForm">
          Close
        </button>
        <form
          action=""
          onSubmit={(e) => {
            formSubmitNPC(e);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="charName"
            required
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Initiative"
            name="initiative"
            autoComplete="off"
            required
          />

          {/* {pc ? ( */}
          <input
            type="number"
            placeholder="HP"
            name="HP"
            id="HP"
            autoComplete="off"
          />
          {/* ) : (
            <br />
          )} */}

          <div className="NPC">
            <p>Player Character:</p>
            <br /> Yes{" "}
            <input
              type="range"
              name="NPC"
              max="1"
              id="NPCRange"
              autoComplete="off"
              onClick={() => {
                // showHPInput();
              }}
            />{" "}
            No
            <br />
          </div>

          <input type="submit" value="Add Character" />
        </form>
      </div>
    </div>
  );
};

export default Inputs;

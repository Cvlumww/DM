import { useState, useEffect, useContext } from "react";

import AppContext from "../AppContext";

const Inputs = ({ toggle }) => {
  const { formSubmitPC } = useContext(AppContext);

  return (
    <div className="Pop-Up">
      <div className="inputBox">
        <form
          action=""
          onSubmit={(e) => {
            formSubmitPC(e);
          }}
        >
          <button onClick={toggle} className="closeForm">
            Close
          </button>
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

          <input type="submit" hidden />

          <input type="submit" value="Add Character" />
        </form>
      </div>
    </div>
  );
};

export default Inputs;

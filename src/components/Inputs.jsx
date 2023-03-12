import { useContext } from "react";

import AppContext from "../AppContext";

const Inputs = ({ toggle }) => {
  const { formSubmitNPC } = useContext(AppContext);

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

          <input
            type="number"
            placeholder="HP"
            name="HP"
            id="HP"
            autoComplete="off"
          />

          <input type="submit" value="Add Character" />
        </form>
      </div>
    </div>
  );
};

export default Inputs;

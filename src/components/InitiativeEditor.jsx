import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

const InitiativeEditor = ({ initiative }) => {
  const { UpdateInitiative } = useContext(AppContext);
  const [initiativeDelta, setInitiativeDelta] = useState(0);

  return (
    <div className="HPEditor">
      <input
        type="number"
        name="HPEditBox"
        placeholder="0"
        onChange={(e) => {
          setInitiativeDelta(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        className="Update"
        onClick={(e) => {
          UpdateInitiative(initiativeDelta, initiative.id);
        }}
      >
        Update Initiative
      </button>
    </div>
  );
};

export default InitiativeEditor;

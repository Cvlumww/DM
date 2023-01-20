import React, { useContext, useState } from "react";
import Context from "../App";

const HpEditor = ({ initiative, UpdateHP }) => {
  const [hpDelta, setHpDelta] = useState(0);

  return (
    <div className="HPEditor">
      <button
        id="Heal"
        className="Heal"
        onClick={(e) => {
          UpdateHP(hpDelta, initiative.id);
        }}
      >
        Heal
      </button>
      <input
        type="number"
        name="HPEditBox"
        placeholder="0"
        onChange={(e) => {
          setHpDelta(parseInt(e.target.value));
        }}
      />
      <button
        id="Harm"
        className="Harm"
        onClick={(e) => {
          UpdateHP(hpDelta * -1, initiative.id);
        }}
      >
        Damage
      </button>
    </div>
  );
};

export default HpEditor;

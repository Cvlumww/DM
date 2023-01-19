import React from "react";

const HpEditor = ({ data, SetInits }) => {
  const HealFunc = (id, HP) => {
    const info = [...data];

    // console.log("id: ", id);
    // console.log("hp: ", HP);

    const updatedHP = { id };
    console.log(updatedHP);
  };

  const HarmFunc = (id, HP) => {};

  return (
    <div className="HPEditor">
      <button
        id="Heal"
        className="Heal"
        onClick={() => {
          HealFunc(data.id, data.HP);
        }}
      >
        Heal
      </button>
      <input type="number" name="HPEditBox" placeholder="0" />
      <button
        id="Harm"
        className="Harm"
        onClick={() => {
          HarmFunc(data.id, data.HP);
        }}
      >
        Damage
      </button>
    </div>
  );
};

export default HpEditor;

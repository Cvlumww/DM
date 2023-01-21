import React from "react";

const Inputs = ({ toggle, initiatives, setInitiatives }) => {
  const formSubmit = async (e) => {
    e.preventDefault();

    const AddCharacter = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: parseInt(e.target.initiative.value),
      HP: parseInt(e.target.HP.value),
      NPC: parseInt(e.target.NPC.value),
    };

    setInitiatives([...initiatives, AddCharacter]);

    e.target.charName.value = "";
    e.target.initiative.value = null;
    e.target.HP.value = null;
    e.target.NPC.value = 0;
  };

  return (
    <div className="Pop-Up">
      <div className="inputBox">
        <button onClick={toggle}>Close</button>
        <form
          action=""
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <input type="text" placeholder="Name" name="charName" required />
          <input
            type="number"
            placeholder="Initiative"
            name="initiative"
            required
          />
          <input type="number" placeholder="HP" name="HP" required />

          <div className="NPC">
            <p>Player Character:</p> Yes{" "}
            <input type="range" name="NPC" max="1" id="NPCRange" /> No
          </div>
          <input type="submit" value="Add Character" />
        </form>
      </div>
    </div>
  );
};

export default Inputs;

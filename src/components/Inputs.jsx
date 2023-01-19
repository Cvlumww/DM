import React from "react";

const Inputs = ({ toggle, inits, SetInits }) => {
  const formSubmit = async (e) => {
    e.preventDefault();

    const AddCharacter = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: parseInt(e.target.initiative.value),
      HP: parseInt(e.target.HP.value),
    };

    SetInits([...inits, AddCharacter]);

    e.target.charName.value = "";
    e.target.initiative.value = null;
    e.target.HP.value = null;
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
          <br />
          <label htmlFor="NPC">Non Player Character</label>
          <input type="checkbox" name="NPC" /> <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inputs;

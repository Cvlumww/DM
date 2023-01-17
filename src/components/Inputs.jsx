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
          <input type="text" placeholder="Name" name="charName" />
          <input type="number" placeholder="Initiative" name="initiative" />
          <input type="number" placeholder="HP" name="HP" />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inputs;

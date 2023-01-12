import React from "react";

const Inputs = ({ toggle, inits, SetInits }) => {
  const formSubmit = async (e) => {
    e.persist();
    e.preventDefault();

    const AddCharacter = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: e.target.initiative.value,
      HP: e.target.HP.value,
      version: e.target.version.value,
    };

    SetInits([AddCharacter, ...inits]);
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
          <input type="text" placeholder="Initiative" name="initiative" />
          <input type="text" placeholder="HP" name="HP" />
          <select name="version" id="">
            <option value="">Please select one of the options below</option>
            <option value="Player Character">Player Character</option>
            <option value="Non Player Character">Non Player Character</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inputs;

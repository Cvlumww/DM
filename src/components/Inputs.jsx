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
    };

    SetInits([...inits, AddCharacter]);
    console.log(AddCharacter);
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
          <input type="text" placeholder="HP" name="HP" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Inputs;

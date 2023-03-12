import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [initiatives, setInitiatives] = useState([
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Xargothrax",
    //   initiative: 12,
    //   HP: 256,
    //   NPC: 1,
    // },
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Neff",
    //   initiative: 13,
    //   HP: 60,
    //   NPC: 0,
    // },
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Arson",
    //   initiative: 16,
    //   HP: 52,
    //   NPC: 0,
    // },
  ]);

  // This adds a Non Player Character to the list
  const formSubmitNPC = async (e) => {
    e.preventDefault();

    const AddCharacterNPC = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: parseInt(e.target.initiative.value),
      HP: parseInt(e.target.HP.value),
      NPC: 1,
    };

    setInitiatives([...initiatives, AddCharacterNPC]);

    e.target.charName.value = "";
    e.target.initiative.value = null;
    e.target.HP.value = null;
  };

  // This adds a Player Character to the list
  const formSubmitPC = async (e) => {
    e.preventDefault();

    const AddCharacterPC = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: parseInt(e.target.initiative.value),
      NPC: 0,
    };

    setInitiatives([...initiatives, AddCharacterPC]);

    e.target.charName.value = "";
    e.target.initiative.value = null;
  };

  // Clears the list
  const Clear = () => {
    setInitiatives([]);
  };

  // This deletes and removes a character from the list
  const DeleteChar = (id) => {
    setInitiatives(initiatives.filter((init) => init.id !== id));
  };

  // This sorts the list of initiatives
  const Sort = () => {
    const initsSorted = [...initiatives];
    initsSorted.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));
    setInitiatives(initsSorted);
  };

  // This updates the initiative for a specific character
  const UpdateInitiative = (num, id) => {
    const updatedInitiativeInitiative = initiatives.filter((initiative) => {
      if (initiative.id === id) {
        initiative.initiative = num;
      }
      return initiative;
    });

    setInitiatives(updatedInitiativeInitiative);
  };

  // This updates the HP Value for NPC's
  const UpdateHP = (num, id) => {
    const updatedInitiativeHP = initiatives.filter((initiative) => {
      if (initiative.id === id) {
        initiative.HP += num;
      }
      return initiative;
    });

    setInitiatives(updatedInitiativeHP);
  };

  return (
    <AppContext.Provider
      value={{
        initiatives,
        formSubmitNPC,
        Clear,
        DeleteChar,
        Sort,
        UpdateHP,
        formSubmitPC,
        UpdateInitiative,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

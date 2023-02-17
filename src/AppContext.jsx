import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [initiatives, setInitiatives] = useState([
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Xargothrax 2",
    //   initiative: 12,
    //   HP: 256,
    //   NPC: 1,
    // },
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Neff 2",
    //   initiative: 13,
    //   HP: 60,
    //   NPC: 0,
    // },
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Bandit 1 - 2",
    //   initiative: 1,
    //   HP: 25,
    //   NPC: 1,
    // },
  ]);

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
    console.log("Add NPC");

    e.target.charName.value = "";
    e.target.initiative.value = null;
    e.target.HP.value = null;
  };

  const formSubmitPC = async (e) => {
    e.preventDefault();

    const AddCharacterPC = {
      id: Math.floor(Math.random() * 1000000),
      charName: e.target.charName.value,
      initiative: parseInt(e.target.initiative.value),
      NPC: 0,
    };

    setInitiatives([...initiatives, AddCharacterPC]);
    console.log("Add PC");

    e.target.charName.value = "";
    e.target.initiative.value = null;
  };

  const Clear = () => {
    setInitiatives([]);
  };

  const DeleteChar = (id) => {
    setInitiatives(initiatives.filter((init) => init.id !== id));
  };

  const Sort = () => {
    const initsSorted = [...initiatives];
    initsSorted.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));
    setInitiatives(initsSorted);
  };

  const UpdateHP = (num, id, e) => {
    const updatedInitiatives = initiatives.filter((initiative) => {
      if (initiative.id === id) {
        initiative.HP += num;
      }
      return initiative;
    });

    setInitiatives(updatedInitiatives);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

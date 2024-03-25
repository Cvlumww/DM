import { createContext, useState } from "react";
import ReactGA from "react-ga4";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [initiatives, setInitiatives] = useState([
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Xargothrax",
    //   initiative: 12,
    //   HP: 0,
    //   NPC: 1,
    // },
    // {
    //   id: Math.floor(Math.random() * 1000000),
    //   charName: "Neph",
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

  // GA4 Events Handler
  const HandleAnalyticsEvent = (category, action) => {
    ReactGA.event({
      category: category,
      action: action,
    });
  };

  // This adds a Non Player Character to the list
  const formSubmitNPC = async (e) => {
    e.preventDefault();

    const multiplier = e.target.multiplier.value;

    if (multiplier == 0 || multiplier == null || multiplier == 1) {
      const AddCharacterNPC = {
        id: Math.floor(Math.random() * 1000000),
        charName: e.target.charName.value,
        initiative: parseInt(e.target.initiative.value),
        HP: parseInt(e.target.HP.value),
        NPC: 1,
      };

      setInitiatives([...initiatives, AddCharacterNPC]);

      HandleAnalyticsEvent("Form", "Single Non-Player Character Added");
    } else {
      const bunch = [];

      for (let i = 0; i < multiplier; i++) {
        const AddCharacterNPC = {
          id: Math.floor(Math.random() * 1000000) + (i + 1),
          charName: e.target.charName.value + " " + (i + 1),
          initiative: parseInt(e.target.initiative.value),
          HP: parseInt(e.target.HP.value),
          NPC: 1,
        };

        bunch.push(AddCharacterNPC);

        setInitiatives([...initiatives, ...bunch]);

        HandleAnalyticsEvent(
          "Form",
          "Multiples of Non-Player Characters Added"
        );
      }
    }

    e.target.charName.value = "";
    e.target.initiative.value = null;
    e.target.HP.value = null;
    e.target.multiplier.value = null;
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

    HandleAnalyticsEvent("Form", "Player Character Added");
  };

  // Clears the list
  const Clear = () => {
    setInitiatives([]);

    HandleAnalyticsEvent("Button", "Form Cleared");
  };

  // This deletes and removes a character from the list
  const DeleteChar = (id) => {
    setInitiatives(initiatives.filter((init) => init.id !== id));

    HandleAnalyticsEvent("Button", "Character Deleted");
  };

  // This sorts the list of initiatives
  const Sort = () => {
    const initsSorted = [...initiatives];
    initsSorted.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));
    setInitiatives(initsSorted);

    HandleAnalyticsEvent("Button", "Initiative Sorted / Combat Started");
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

    HandleAnalyticsEvent("Button", "Character's HP Edited");
  };

  // This finds if an NPC is at 0 HP
  const HandleNPCDeath = (id) => {};

  // This counts to 3 then calls the DeleteChar() function
  let counter = 0;
  let internalCounter = 0;
  let no1 = 0;
  let no2 = 0;
  let no3 = 0;

  const HandleDeathSavingThrows = (e, id) => {
    const checkedName = e.target.name;
    const isChecked = e.target.checked;

    if (checkedName === "Fail-1") {
      if (no1 <= 0) {
        internalCounter++;
        no1++;
        // console.log("Number of Times Fail-1 has been pressed: ", no1);
      }

      if (isChecked === true) {
        counter++;
        // console.log("Fail-1 - Counter: ", counter);
      }

      if (internalCounter >= 3) {
        // console.log("internalCounter reached 3", internalCounter);
        DeleteChar(id);
        counter = 0;
      }
    }

    if (checkedName === "Fail-2") {
      if (no2 <= 0) {
        internalCounter++;
        no2++;
        // console.log("Number of Times Fail-2 has been pressed: ", no2);
      }

      if (isChecked === true) {
        counter++;
        // console.log("Fail-2 - Counter: ", counter);
      }

      if (internalCounter >= 3) {
        // console.log("internalCounter reached 3", internalCounter);
        DeleteChar(id);
        counter = 0;
      }
    }

    if (checkedName === "Fail-3") {
      if (no3 <= 0) {
        internalCounter++;
        no3++;
        // console.log("Number of Times Fail-3 has been pressed: ", no3);
      }

      if (isChecked === true) {
        counter++;
        // console.log("Fail-3 - Counter: ", counter);
      }

      if (internalCounter >= 3) {
        // console.log("internalCounter reached 3", internalCounter);
        DeleteChar(id);
        counter = 0;
      }
    }

    // console.log("Counter: ", counter);
  };

  const [roundCounter, SetRoundCounter] = useState(1);

  const updateRoundCounter = () => {
    SetRoundCounter(roundCounter + 1);

    HandleAnalyticsEvent("Button", "Round of Combat Survived");
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
        HandleNPCDeath,
        HandleDeathSavingThrows,
        updateRoundCounter,
        roundCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

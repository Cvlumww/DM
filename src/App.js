import { useState, useEffect, useContext, createContext } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const Context = createContext("Hello");

function App() {
  const [pcs, SetPcs] = useState(false);

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
    //   charName: "Bandit 1",
    //   initiative: 1,
    //   HP: 25,
    //   NPC: 1,
    // },
  ]);

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

  // useEffect(() => {
  //   if (initiatives !== initiatives) {
  //     // Sort();
  //   }
  // }, [initiatives]);

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
    <div className="App">
      <Context.Provider
        value={{ state: initiatives, setState: setInitiatives }}
      >
        <Header
          initiatives={initiatives}
          setInitiatives={setInitiatives}
          Clear={Clear}
          Sort={Sort}
        />
        <Character
          initiatives={initiatives}
          setInitiatives={setInitiatives}
          DeleteChar={DeleteChar}
          UpdateHP={UpdateHP}
        />
        {/* {inits !== [] ? <p>Not Empty</p> : <p>Empty</p>} */}
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;

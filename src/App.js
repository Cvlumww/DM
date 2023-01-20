import { useState, useEffect, useContext, createContext } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const Context = createContext("Hello");

function App() {
  const [pcs, SetPcs] = useState(false);

  const [initiatives, setInitiatives] = useState([]);

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

  useEffect(() => {
    if (initiatives !== initiatives) {
      // Sort();
    }
  }, [initiatives]);

  const UpdateHP = (num, id, e) => {
    console.log("num: ", num);
    const updatedInitiatives = initiatives.filter((initiative) => {
      if (initiative.id === id) {
        initiative.HP += num;
      }
      return initiative;
    });

    console.log("updatedInitiatives: ", updatedInitiatives);
    console.log("Initiatives: ", initiatives);

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

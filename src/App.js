import { useState, useEffect } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [pcs, SetPcs] = useState(false);

  const [inits, SetInits] = useState([]);

  const Clear = () => {
    SetInits([]);
  };

  const DeleteChar = (id) => {
    // console.log("Delete", charName);

    SetInits(inits.filter((init) => init.id !== id));
  };

  const Sort = () => {
    const initsSorted = [...inits];

    initsSorted.sort((a, b) => (a.initiative > b.initiative ? -1 : 1));

    SetInits(initsSorted);
  };

  return (
    <div className="App">
      <Header inits={inits} SetInits={SetInits} Clear={Clear} Sort={Sort} />
      <Character inits={inits} SetInits={SetInits} DeleteChar={DeleteChar} />
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [inits, SetInits] = useState([
    {
      id: "",
      charName: "",
      initiative: "",
      hp: "",
      version: false,
    },
  ]);

  useEffect(() => {
    SetInits();
  }, []);

  const Clear = () => {
    SetInits([]);
  };

  const Sort = (inits) => {
    console.log(inits);

    const initDescending = [...inits].sort(
      (a, b) => b.initiative - a.initiative
    );
    console.log(initDescending);
  };

  return (
    <div className="App">
      <Header inits={inits} SetInits={SetInits} Clear={Clear} Sort={Sort} />
      <Character inits={inits} SetInits={SetInits} />
      <Footer />
    </div>
  );
}

export default App;

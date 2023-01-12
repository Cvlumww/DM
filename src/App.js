import { useState } from "react";

import "./css/App.css";
import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [inits, SetInits] = useState([
    {
      // id: Math.floor(Math.random() * 1000000),
      // charName: "",
      // initiative: "",
      // HP: "",
      // version: "",
    },
  ]);

  const Clear = () => {
    SetInits([]);
  };

  return (
    <div className="App">
      <Header inits={inits} SetInits={SetInits} Clear={Clear} />
      <Character inits={inits} SetInits={SetInits} />
      <Footer />
    </div>
  );
}

export default App;

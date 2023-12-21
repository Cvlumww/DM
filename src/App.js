// import ReactGA from "react-ga";

import "./css/App.css";
import { AppContext, AppProvider } from "./AppContext";

import Character from "./components/Character";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Character />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;

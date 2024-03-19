import { useContext } from "react";
import AppContext from "../AppContext";
import Item from "./Item";

const Character = () => {
  const { initiatives, roundCounter, updateRoundCounter } =
    useContext(AppContext);

  return (
    <div className="mainBodyContainer">
      {initiatives?.length > 0 ? (
        <>
          <div className="CharContainer">
            {initiatives.map((initiative) => {
              return <Item initiative={initiative} key={initiative.id} />;
            })}
          </div>

          <div className="AddRoundContainer">
            <button onClick={updateRoundCounter}>Finish Round</button>
          </div>

          <div className="RoundContainer">
            <div className="DisplayRound" id="">
              <h3>Round : {roundCounter}</h3>
            </div>
          </div>
        </>
      ) : (
        <div className="empty">
          <h3>Nothing to show yet, try adding some Characters</h3>
        </div>
      )}
    </div>
  );
};

export default Character;

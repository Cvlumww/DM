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
            <a
              onClick={updateRoundCounter}
              href="#Round"
              className="finishRoundLink"
            >
              Finish Round
            </a>
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

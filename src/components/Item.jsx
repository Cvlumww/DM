import { useContext } from "react";
import AppContext from "../AppContext";
import HP from "./HpEditor";

const Item = ({ initiative }) => {
  const { DeleteChar } = useContext(AppContext);
  const { UpdateHP } = useContext(AppContext);
  const { initiatives } = useContext(AppContext);

  return (
    <>
      <div className="item">
        <div className="itemLeft">
          <h3>Name: {initiative.charName}</h3>

          <h3>Initiative Order: {initiative.initiative} </h3>

          <h3>HP: {initiative.HP}</h3>
        </div>

        <div className="itemRight">
          {initiative.NPC === 1 ? <HP initiative={initiative} /> : <p></p>}
        </div>

        {/* Delete */}

        <button
          className="Delete"
          onClick={() => {
            DeleteChar(initiative.id);
          }}
        >
          Delete Character
        </button>
      </div>
    </>
  );
};

export default Item;

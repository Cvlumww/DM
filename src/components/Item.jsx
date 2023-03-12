import { useState, useContext } from "react";
import AppContext from "../AppContext";
import InitEditor from "../components/InitiativeEditor";
import HP from "./HpEditor";

const Item = ({ initiative }) => {
  const { DeleteChar } = useContext(AppContext);
  const [showInitiativeEditor, setShowInitiativeEditor] = useState(false);

  return (
    <>
      <div className="item">
        <div className="itemLeft">
          <h3>Name: {initiative.charName}</h3>

          <h3>
            Initiative Order:{" "}
            <span className="InitiativeDisplayInput">
              {initiative.initiative}
            </span>{" "}
          </h3>

          {initiative.NPC === 1 ? <h3>HP: {initiative.HP}</h3> : <p></p>}
        </div>

        <div className="itemRight">
          {initiative.NPC === 1 ? <HP initiative={initiative} /> : <p></p>}

          {showInitiativeEditor === true ? (
            <InitEditor initiative={initiative} />
          ) : (
            <p></p>
          )}
        </div>

        {/* Delete or Edit button conditional render */}

        {initiative.NPC === 1 ? (
          <button
            className="Delete"
            onClick={() => {
              DeleteChar(initiative.id);
            }}
          >
            Delete
          </button>
        ) : (
          <div>
            <button
              className="DeleteEdit"
              onClick={() => {
                DeleteChar(initiative.id);
              }}
            >
              Delete
            </button>

            <button
              className="Edit"
              onClick={() => {
                setShowInitiativeEditor(!showInitiativeEditor);
              }}
            >
              Edit Initiative
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;

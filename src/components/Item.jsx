import { useState, useContext, useEffect } from "react";
import AppContext from "../AppContext";
import InitEditor from "./InitiativeEditor";
import HP from "./HpEditor";
import Death from "./DeathSaves";

const Item = ({ initiative }) => {
  const { DeleteChar } = useContext(AppContext);
  const { HandleNPCDeath } = useContext(AppContext);

  const [showInitiativeEditor, setShowInitiativeEditor] = useState(false);

  useEffect(() => {
    //Runs on every render
    HandleNPCDeath(initiative.id);
  });

  return (
    <div className="item">
      <div className="itemRowOne">
        <div className="itemLeft">
          <h3>Name: {initiative.charName}</h3>

          <h3>
            Initiative Order:{" "}
            <span className="InitiativeDisplayInput">
              {initiative.initiative}
            </span>{" "}
          </h3>

          {initiative.NPC === 1 ? <h3>HP: {initiative.HP}</h3> : <span></span>}
        </div>

        <div className="itemRight">
          {/* {(initiative.NPC === 1){
              return <HP initiative={initiative} />
            }}   */}

          {initiative.NPC === 1 ? (
            <>
              {initiative.HP < 1 ? (
                <Death initiative={initiative} />
              ) : (
                <HP initiative={initiative} />
              )}
            </>
          ) : (
            <span></span>
          )}

          {showInitiativeEditor === true ? (
            <InitEditor initiative={initiative} />
          ) : (
            <p></p>
          )}
        </div>
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
        <div className="itemRowTwo">
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
  );
};

export default Item;

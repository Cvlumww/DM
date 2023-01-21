import HP from "./HpEditor";

// Start
const Item = ({ initiative, DeleteChar, SetInits, inits, UpdateHP }) => {
  return (
    <>
      <div className="item">
        <div className="itemLeft">
          <h4>Name: {initiative.charName}</h4>

          <h4>Initiative Order: {initiative.initiative} </h4>

          <h4>HP: {initiative.HP}</h4>
        </div>

        <div className="itemRight">
          {initiative.NPC === 1 ? (
            <HP
              initiative={initiative}
              SetInits={SetInits}
              inits={inits}
              UpdateHP={UpdateHP}
            />
          ) : (
            <p></p>
          )}
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

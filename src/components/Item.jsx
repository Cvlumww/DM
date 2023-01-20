import HP from "./HpEditor";

// Start
const Item = ({ initiative, DeleteChar, SetInits, inits, UpdateHP }) => {
  return (
    <>
      <div className="item">
        <h4>
          Name: {initiative.charName} | Initiative Order:{" "}
          {initiative.initiative} | HP: {initiative.HP} |{""}
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
          {/* Delete */}
          <span
            onClick={() => {
              DeleteChar(initiative.id);
            }}
          >
            {" "}
            Delete{" "}
          </span>
        </h4>
      </div>
    </>
  );
};

export default Item;

import HP from "./HpEditor";

// Start
const Item = ({ data, DeleteChar, SetInits }) => {
  return (
    <>
      <div className="item">
        <h4>
          Name: {data.charName} | Initiative Order: {data.initiative} | HP:{" "}
          {data.HP} |{""}
          {data.NPC === 1 ? <HP data={data} SetInits={SetInits} /> : <p></p>}
          {/* Delete */}
          <span
            onClick={() => {
              DeleteChar(data.id);
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

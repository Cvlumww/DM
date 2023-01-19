import React from "react";

// Start
const Item = ({ data, DeleteChar }) => {
  return (
    <>
      <div className="item">
        <h4>
          Name: {data.charName} | Initiative Order: {data.initiative} | HP:{" "}
          {data.HP} |{""}
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

import React from "react";

// Start
const Item = ({ data, DeleteChar }) => {
  return (
    <>
      <div className="item">
        <p>
          Name: {data.charName} | Initiative Order: {data.initiative} | HP:{" "}
          {data.HP} |{""}
          <span onClick={DeleteChar}> X </span>
        </p>
      </div>
    </>
  );
};

export default Item;

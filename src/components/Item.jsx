import React from "react";

// Start
const Item = ({ data }) => {
  return (
    <>
      <div className="item">
        <p>
          Name: {data.charName} | Initiative Order: {data.initiative} | HP:{" "}
          {data.HP}
        </p>
      </div>
    </>
  );
};

export default Item;

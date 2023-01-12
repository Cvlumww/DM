import { useRef } from "react";
import Item from "./Item";

const Character = ({ inits, SetInits }) => {
  return (
    <>
      {inits?.length > 0 ? (
        <div className="CharContainer">
          {inits.map((init) => {
            return <Item data={init} key={init.id} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h3>Nothing to show yet, try adding some Characters</h3>
        </div>
      )}
    </>
  );
};

export default Character;

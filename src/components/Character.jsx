import { useContext } from "react";
import AppContext from "../AppContext";
import Item from "./Item";

const Character = ({ setInitiatives, DeleteChar, UpdateHP }) => {
  const { initiatives } = useContext(AppContext);

  return (
    <>
      {initiatives?.length > 0 ? (
        <div className="CharContainer">
          {initiatives.map((initiative) => {
            return <Item initiative={initiative} key={initiative.id} />;
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

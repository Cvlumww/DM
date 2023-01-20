import Item from "./Item";

const Character = ({ initiatives, setInitiatives, DeleteChar, UpdateHP }) => {
  return (
    <>
      {initiatives?.length > 0 ? (
        <div className="CharContainer">
          {initiatives.map((initiative) => {
            return (
              <Item
                initiative={initiative}
                key={initiative.id}
                DeleteChar={DeleteChar}
                setInitiatives={setInitiatives}
                initiatives={initiatives}
                UpdateHP={UpdateHP}
              />
            );
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

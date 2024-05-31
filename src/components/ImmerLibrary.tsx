import { useState } from "react";
import { produce } from "immer";

function ImmerLibrary() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  //  Updating array of Objects, with Immer Library
  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      <h1>
        Bug fixe, Exersice on updating an object of Array with Immer Library.
      </h1>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Bug Fixed" : "No"}
        </p>
      ))}
      <button className="btn btn-primary" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default ImmerLibrary;

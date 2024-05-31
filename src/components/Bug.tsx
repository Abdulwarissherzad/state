import { useState } from "react";

function Bug() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  // Updatating Array
  const [tags, setTages] = useState(["happy", "Cheerful"]);
  //  Updating array of Objects.
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  // Get the first bug with ID of 1
  const firstBug = bugs.find((bug) => bug.id === 1);

  //   Updatating Array
  const handleClickUpdateArray = () => {
    //    Add and Object
    setTages([...tags, "Exciting"]);

    // Remove, happy array object is going to be removed.
    setTages(tags.filter((tag) => tag !== "happy"));

    // Update, Two method: 1- Spreed all arays and then modify. 2- To use Map method
    setTages(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      <h1>Bug fixe, Exersice on updating an object of Array.</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Update
      </button>{" "}
      <br />
      <h2>The bug fixed is: {firstBug?.fixed ? "Yes" : "No"}</h2>
      <br />
      <br />
      <button className="btn btn-primary" onClick={handleClickUpdateArray}>
        Uppdate Array
      </button>
      <h2>
        Updated array after three operation in one function is as follow:-
        Result: {tags}
      </h2>
    </div>
  );
}

export default Bug;

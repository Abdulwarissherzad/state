import { ChangeEvent, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";

const Button = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Waris",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topppings: ["Mushroom,"],
  });
  const [value, setValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const click = () => {
    setGame({ ...game, player: { ...game.player, name: value } });
  };

  // Add another toppings, Like: Chees.
  const handleClick = () => {
    setPizza({ ...pizza, topppings: [...pizza.topppings, "Chees"] });
  };

  return (
    <>
      <div className="input-group mb-3 w-50">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={click}
          >
            Add New Player <MdDoubleArrow />
          </button>
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="form-control rounded "
          placeholder="Write new player name."
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </div>
      <h2>New Player added to the list: {game.player.name}</h2>
      <br />
      <button className="btn btn-primary" onClick={handleClick}>
        Add a Topping
      </button>
      <h2>Adding a new Topping: {pizza.topppings}</h2>
    </>
  );
};

export default Button;

/*
import { useState } from "react";

const Button = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Waris",
    },
  });

  const click = () => {
    setGame({ ...game, player: { ...game.player, name: "Mosh Hamadani" } });
  };

  return (
    <>
      <button className="btn btn-primary rounded-2 mx-2" onClick={click}>
        Add New Player
      </button>
      <input></input>
      {game.player.name}
    </>
  );
};

export default Button;

*/

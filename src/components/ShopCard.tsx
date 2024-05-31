import { useState } from "react";

function ShopCard() {
  //Updating logic in inner maner.
  const [cart, setcard] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  //   Want to update on object like quantity, then use Map method
  const handleClick = () => {
    setcard({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        Add a quantity
      </button>
      {cart.items.map((item, index) => (
        <h2 key={index}>
          Added item to to ID #: {item.title} - Quantity: {item.quantity}
        </h2>
      ))}
      <h2>First Cart Item:</h2>
      {cart.items[0] && (
        <ul>
          <li>
            {cart.items[0].title} - Quantity: {cart.items[0].quantity}
          </li>
        </ul>
      )}
    </>
  );
}
export default ShopCard;

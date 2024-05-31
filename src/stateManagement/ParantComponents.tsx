import { useState } from "react";
import NavBar from "./NavBar";
import Card from "./Card";

function ParantComponents() {
  const [cardItems, setCardItems] = useState(["Product 1", "Product 2"]);
  const handleRemove = () => {
    setCardItems(cardItems.filter((product) => product !== "Product 1"));
  };

  return (
    <>
      <h2 className="text-white bg-dark">Share State Between Components</h2>
      <NavBar cardItemsCount={cardItems.length} />
      <Card
        cardItems={cardItems}
        onClear={() => setCardItems([])}
        onRemove={handleRemove}
      />
    </>
  );
}

export default ParantComponents;

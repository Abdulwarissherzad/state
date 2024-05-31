import React from "react";

interface Props {
  cardItemsCount: number;
}

function NavBar({ cardItemsCount }: Props) {
  return <div>NavBar: {cardItemsCount}</div>;
}

export default NavBar;

interface Props {
  cardItems: string[];
  onClear: () => void;
  onRemove: () => void;
}
function Card({ cardItems, onClear, onRemove }: Props) {
  return (
    <>
      <div>Card</div>
      <ul>
        {cardItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={onClear}>
        Clear
      </button>
      <button className="btn btn-primary" onClick={onRemove}>
        Remove
      </button>
    </>
  );
}

export default Card;

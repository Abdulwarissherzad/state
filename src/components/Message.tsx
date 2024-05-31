let count = 0;

function Message() {
  count++;

  return (
    <div>
      <h1>Message {count}</h1>
    </div>
  );
}

export default Message;

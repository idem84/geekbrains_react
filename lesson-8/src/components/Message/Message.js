const Message = ({ messages }) => (
  <div>
    {messages.map((mes) => (
      <div key={mes.id}>
        <span>{mes.author}:</span>
        <span>{mes.text}</span>
      </div>
    ))}
  </div>
);

export default Message;
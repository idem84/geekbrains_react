import { useEffect, useState, useRef } from "react";
import "./App.css";
import Message from "./Components/MessageComponent/MessageComponent";
import MessageForm from "./Components/MessageComponent/MessageFormComponent";
import MessageList from "./Components/MessageComponent/MessageListComponent";

const message = "Hello, world!";
const messages = [
  {
    id: 1,
    message: "Hello!",
    author: "Dmitriy",
  },
  {
    id: 2,
    message: "Hello! How ar you?",
    author: "Sergey",
  },
];

const App = () => {
  const [messagesState, addMessage] = useState([...messages]);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const author = messagesState[messagesState.length - 1].author;
    if (author !== "Robot") {
      sendMessage("Robot", `Message from "${author}" recived`);
    }
  }, [messagesState]);

  const sendMessage = (author, message) => {
    const id = messagesState.length + 1;
    const data = {
      id: id,
      author: author,
      message: message,
    };

    addMessage((prevState) => [...prevState, data]);
  };

  return (
    <div className="App">
      <Message text={message} />
      <MessageList messages={messagesState} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import './App.css';
import Message from "./Components/MessageComponent/MessageComponent";
import MessageForm from './Components/MessageComponent/MessageFormComponent';
import MessageList from "./Components/MessageComponent/MessageListComponent";

const message = "Hello, world!";
const DATA = [
  {
    id: 1,
    message: "Hello!",
    author: "Dmitriy",
  },
  {
    id: 2,
    message: "Hello! How ar you?",
    author: "Sergey",
  }
]

const App = () => {
  const [state, setState] = useState({
    messages: DATA
  })

  useEffect(() => {
    console.log("Added message");
  }, [state.messages])

  const sendMessage = (message) => {
    message.id = state.messages.length + 1;

    setState(prevState => ({
      messages: [...prevState.messages, message]
    }))
  }

  return (
    <div className="App">
      <Message text={message} />
      <MessageList messages={state.messages} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}


export default App;
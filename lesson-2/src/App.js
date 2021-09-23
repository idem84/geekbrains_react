import { useEffect, useState } from "react";
import './App.css';
import Message from "./Components/MessageComponent/MessageComponent";
import MessageForm from './Components/MessageComponent/MessageFormComponent';
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
  }
]

const App = () => {
  const [messagesState, addMessage] = useState([...messages])


  useEffect(() => {
    console.log("Added message");
  }, [messagesState])

  const sendMessage = (author, message) => {
    let id = messagesState.length + 1
    let data = {
      'id': id,
      'author': author,
      'message': message
    }

    addMessage(prevState => ([...prevState, data]))
  }

  return (
    <div className="App">
      <Message text={message} />
      <MessageList messages={messagesState} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}


export default App;
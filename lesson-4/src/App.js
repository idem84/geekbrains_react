import { useEffect, useState } from "react";
import './App.css';
import MessageForm from './Components/MessageComponent/MessageFormComponent';
import MessageList from "./Components/MessageComponent/MessageListComponent";
import ChatsList from "./Components/ChatsComponent/ChatsListComponent";
import Box from '@material-ui/core/Box';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

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

const CHATS = [
  {
    id: 1,
    name: 'Genral'
  },
  {
    id: 2,
    name: "Buy/Sell"
  },
  {
    id: 3,
    name: "Flud"
  }
]

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="nav"
          aria-label="mailbox folders"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <ChatsList chats={CHATS} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MessageList messages={state.messages} />
          <MessageForm sendMessage={sendMessage} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App;
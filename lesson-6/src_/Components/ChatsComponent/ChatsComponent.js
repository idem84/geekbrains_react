import { AUTHORS } from '../../constants'
import MessageForm from "../../Components/MessageComponent/MessageFormComponent";
import MessageList from "../../Components/MessageComponent/MessageListComponent";
import ChatsList from "../../Components/ChatsComponent/ChatsListComponent";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../actions/messages'
import { addChat, removeChat } from '../../actions/chats'
import { useHistory } from 'react-router'

const DATA = [
  {
    id: 1,
    message: "Hello!",
    author: "Dmitriy",
    chatId: 1,
  },
  {
    id: 2,
    message: "Hello! How ar you?",
    author: "Sergey",
    chatId: 1,
  },
  {
    id: 3,
    message: "Where you?",
    author: "Nikita",
    chatId: 2,
  },
  {
    id: 4,
    message: "On my work!",
    author: "Igor",
    chatId: 2,
  },
  {
    id: 5,
    message: "Lets play on street?",
    author: "Oleg",
    chatId: 3,
  },
  {
    id: 6,
    message: "Yes of course!",
    author: "Vlad",
    chatId: 3,
  },
];

const CHATS = [
  {
    id: 1,
    name: "Genral",
  },
  {
    id: 2,
    name: "Buy/Sell",
  },
  {
    id: 3,
    name: "Flud",
  },
];

const ChatsComponent = (props) => {
  const { chatId } = useParams()
  const messageList = useSelector((state) => state.messages[chatId] || [])
  const dispatch = useDispatch()

  const handleMessageSubmit = (newMessageText) => {
    dispatch(
        addMessage(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.ME,
            text: newMessageText,
        })
    )
  }

  /**
   * Chats
   */

   const history = useHistory()

   const chats = useSelector((state) => state.chats)

   const handleChatLinkClick = (chat) => {
       history.push(`/chats/${chat.id}`)
   }

   const handleAddChat = (name) => {
       dispatch(addChat(`chat${Date.now()}`, name))
   }

   const handleRemoveChat = (chatId) => {
       dispatch(removeChat(chatId))
   }

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        component="nav"
        aria-label="mailbox folders"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <ChatsList
          chats={chats}
          currentChat={currentChat}
          onCurrentChatChange={handleChangeChat}
          onAddChat={handleAddChat}
          onRemoveChat={handleRemoveChat}
        />
      </Box>
      <Box component="main" sx={{ flexGrow: 3, p: 3 }}>
        {!error ? (
          <MessageList messages={messageList} />
        ) : (
          <h2>Chat with id #{chatId} does not exist</h2>
        )}
        {!error ? (
          <MessageForm handleMessageSubmit={handleMessageSubmit} />
        ) : null}
      </Box>
    </Box>
  );
};

export default ChatsComponent;

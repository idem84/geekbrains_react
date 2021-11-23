import { useCallback } from "react";
import { useParams, useHistory } from "react-router";
import Message from "../Message/Message";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "../Input/Input";
import { Drafts as DraftsIcon } from "@material-ui/icons";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../../actions/chats";
import { addMessageWithThunk, deleteAllMessages } from "../../actions/messages";

export default function Chats() {
  const { chatId } = useParams();
  const history = useHistory();
  const chats = useSelector((state) => state.chats);
  const messages = useSelector((state) => state.messages[chatId] || []);
  const dispatch = useDispatch();
  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`);
  };

  const handleAddChat = (name) => {
    dispatch(addChat(`chat${Date.now()}`, name));
  };

  const handleRemoveChat = (chatId) => {
    dispatch(removeChat(chatId));

    if (Object.keys(chats).length === 0) {
      dispatch(deleteAllMessages());

      return history.push("/chats");
    }
  };

  const handleMessageSubmit = useCallback(
    (message) => {
      dispatch(addMessageWithThunk(chatId, message));
    },
    [chatId, dispatch]
  );

  // const handleMessageSubmit = (newMessageText) => {
  //   addMessageWithThunk(
  //     {
  //       id: `message${Date.now()}`,
  //       author: AUTHORS.ME,
  //       text: newMessageText,
  //     }, chatId
  //   );
  // };

  // const handleMessageSubmit = (newMessageText) => {
  //   dispatch(
  //     addMessage(chatId, {
  //       id: `message${Date.now()}`,
  //       author: AUTHORS.ME,
  //       text: newMessageText,
  //     })
  //   );
  // };

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        component="nav"
        aria-label="mailbox folders"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Typography component="h1" variant="h5">
          Chats
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {Object.values(chats).map((chat) => (
            <div className="chats__sidebar__item" key={chat.id}>
              <ListItem
                disablePadding
                button
                component="a"
                onClick={() => handleChatLinkClick(chat)}
              >
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItem>
              <IconButton
                variant="contained"
                onClick={() => handleRemoveChat(chat.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </List>
        <Input
          label="Имя чата"
          placeholder="Введите имя чата"
          type="chat"
          onSubmit={handleAddChat}
        />
      </Box>
      <Box component="main" sx={{ flexGrow: 3, p: 3 }}>
        <Typography component="h1" variant="h5">
          Messages
        </Typography>

        {Object.keys(chats).length > 0 && !messages.length ? (
          <p>No messages</p>
        ) : null}

        {messages.length ? (
          <Message messages={messages} />
        ) : null}

        {Object.keys(chats).length > 0 && chatId ? (
          <Input type="message" onSubmit={handleMessageSubmit} />
        ) : (
          <p>Please first add or choose new chat</p>
        )}
      </Box>
    </Box>
  );
}

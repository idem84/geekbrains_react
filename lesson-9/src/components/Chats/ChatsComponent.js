import { useCallback, useEffect, useMemo } from "react";
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
import { Drafts as DraftsIcon } from "@material-ui/icons";
import { AUTHORS } from "../App/constants";

import Input from "../Input/Input";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addChatWithFb,
  removeChatWithFb,
  initChatsTracking,
} from "../../actions/chats";
import {
  removeMessageWithFb,
  initMessagesTracking,
  addMessageWithFb,
} from "../../actions/messages";

import { selectChats } from "../../selectors/chats";

/** new */
import { push } from "firebase/database";
import { getChatMsgsListRefById } from "../../services/firebase";
import { selectMessages } from "../../selectors/messages";
/** new */

export default function Chats() {
  const { chatId } = useParams();
  const history = useHistory();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  const handleChatLinkClick = (chat) => {
    history.push(`/chats/${chat.id}`);
    dispatch(initMessagesTracking(chat.id));
  };

  useEffect(() => {
    dispatch(initChatsTracking());
    dispatch(initMessagesTracking());
  }, []);

  const handleAddChat = (name) => {
    const newId = `chat${Date.now()}`;
    dispatch(addChatWithFb({ name: name, id: newId }));
  };

  // const handleMessageSubmit = (message) => {
  //   dispatch(addMessageWithF(chatId), {
  //     author: message.author,
  //     id: message.id,
  //     text: message.text,
  //   });
  // };

  const handleMessageSubmit = useCallback(
    (message) => {
      push(getChatMsgsListRefById(chatId), {
        author: message.author,
        id: message.id,
        text: message.text,
      });

      if (message.author !== AUTHORS.BOT) {
        const botMessage = {
          id: `messages${Date.now()}`,
          author: AUTHORS.BOT,
          text: "Сообщение от Bot ",
        };

        setTimeout(
          () => push(getChatMsgsListRefById(chatId), botMessage),
          1500
        );
      }
    },
    [chatId]
  );

  const handleRemoveChat = (chatId) => {
    dispatch(removeChatWithFb(chatId));
    dispatch(removeMessageWithFb(chatId));

    return history.push("/chats");
  };

  console.log(messages[chatId]);

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
          {chats.map((chat) => (
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

        {chats.length > 0 && messages.length == 0 ? <p>No messages</p> : null}

        {typeof chatId !== "undefined" && Object.keys(messages).length > 0 ? (
          <Message messages={messages[chatId]} />
        ) : null}

        {chats.length > 0 && chatId ? (
          <Input type="message" onSubmit={handleMessageSubmit} />
        ) : (
          <p>Please first add or choose new chat</p>
        )}
      </Box>
    </Box>
  );
}

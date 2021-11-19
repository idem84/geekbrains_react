import { useHistory } from "react-router";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Input from "../InputComponent/InputComponent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Link from "@material-ui/core/Link";
import { Drafts as DraftsIcon } from "@material-ui/icons";

const ChatsListComponent = (props) => {
  const {
    chats = [],
    currentChat,
    onCurrentChatChange,
    onAddChat,
    onRemoveChat,
  } = props;
  const history = useHistory();

  const handleChatLinkClick = (chat) => {
    onCurrentChatChange(chat);
    history.push(`/chats/${chat.id}`);
  };

  return (
    <Box className="chats">
      <Typography component="h1" variant="h5">
        Chats
      </Typography>
      <List
        className="chats__sidebar"
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {chats.map((chat) => (
          <Box className="chats__sidebar__item" key={chat.id}>
            <ListItem
              key={chats.id}
              selected={chat.id === currentChat.id}
              disablePadding
            >
              <ListItemButton onClick={() => handleChatLinkClick(chat)}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItemButton>
              <ListItemIcon
                onClick={() => onRemoveChat(chat.id)}
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          </Box>
        ))}
      </List>
      <Input
        label="Имя чата"
        placeholder="Введите имя чата"
        onSubmit={onAddChat}
      />
    </Box>
  );
};

export default ChatsListComponent;

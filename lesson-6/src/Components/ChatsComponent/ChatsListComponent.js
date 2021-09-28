import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Link from '@material-ui/core/Link';
import { Drafts as DraftsIcon } from "@material-ui/icons";

const ChatsListComponent = ({ chats }) => {
    return (
        <>
            <br />
            <br />
            <Typography component="h1" variant="h5">
                Chats
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {chats.map((obj) => (
                    <ListItem key={obj.id}disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <Link href={`/chats/${obj.id}`}>
                        <ListItemText primary={obj.name} />
                      </Link>
                    </ListItemButton>
                  </ListItem>

                ))}
            </List>
        </>
    );
};

export default ChatsListComponent;
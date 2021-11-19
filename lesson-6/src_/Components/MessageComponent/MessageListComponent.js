import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

const MessagesListComponent = ({ messages }) => {
    return (
        <>
            <Typography component="h1" variant="h5" style={{marginTop: '40px'}}>
                Messages
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {messages.map((obj) => (
                    <ListItem key={obj.id}>
                        <ListItemText primary={obj.author} secondary={obj.message} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default MessagesListComponent;
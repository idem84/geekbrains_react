import { useRef, useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const MessageFormComponent = ({ sendMessage }) => {
    // Material ui use attribute "autoFocus" for that!!!!!
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [])
    ///////////////////////////////////

    const [state, setState] = useState({
        author: "",
        message: ""
    })

    const handleChange = (evt) => {
        const value = evt.target.value;

        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (state.author !== '' && state.message !== '') {
            sendMessage(state)
            setState({
                author: "",
                message: ""
            });
        } else {
            alert('specify author and message')
        }

    }

    return (
        <>
            <br />
            <br />
            <Typography component="h2" variant="h5">
                Send message
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="author"
                            required
                            fullWidth
                            id="author"
                            label="Author name"
                            autoFocus
                            value={state.author}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="message"
                            required
                            fullWidth
                            id="message"
                            label="Message text"
                            value={state.message}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Add
                </Button>
            </Box>
        </>
    );
}

export default MessageFormComponent;
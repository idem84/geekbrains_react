import { useState } from "react";
import './module.style.scss';

const MessageFormComponent = ({ sendMessage }) => {
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
        sendMessage(state)
        setState({
            author: "",
            message: ""
        });
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Author
                <input
                    type="text"
                    name="author"
                    value={state.author}
                    onChange={handleChange}
                />
            </label>
            <label>
                Message
                <input
                    type="text"
                    name="message"
                    value={state.message}
                    onChange={handleChange}
                />
            </label>
            <button>Add</button>
        </form>
    );
}

export default MessageFormComponent;
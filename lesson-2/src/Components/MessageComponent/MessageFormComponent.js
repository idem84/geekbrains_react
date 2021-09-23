import { useState } from "react";
import './module.style.scss';

const MessageFormComponent = ({ sendMessage }) => {
    // const [state, setState] = useState({
    //     author: "",
    //     message: ""
    // })

    const [author, setAuthor] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        switch (name) {
            case 'author': {
                setAuthor(value)
                break
            }
            case 'message': {
                setMessage(value)
                break
            }
        }

        // setState({
        //     ...state,
        //     [evt.target.name]: value
        // });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        sendMessage(author, message)

        setAuthor('')
        setMessage('')
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Author
                <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleChange}
                />
            </label>
            <label>
                Message
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                />
            </label>
            <button>Add</button>
        </form>
    );
}

export default MessageFormComponent;
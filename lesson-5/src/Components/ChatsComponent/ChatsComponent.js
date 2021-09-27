import { useEffect, useState } from "react";
import MessageForm from "../../Components/MessageComponent/MessageFormComponent";
import MessageList from "../../Components/MessageComponent/MessageListComponent";
import ChatsList from "../../Components/ChatsComponent/ChatsListComponent";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";

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

const ChatsComponent = () => {
    let { chatId } = useParams();
    let error = 0;

    if (typeof chatId === "undefined") {
        chatId = 1;
    }

    if (!CHATS.filter(e => e.id === parseInt(chatId)).length > 0) {
        error++;
    }

    const messageList = DATA.filter(function (obj) {
        return parseInt(obj.chatId) === parseInt(chatId);
    });

    const [state, setState] = useState({
        messages: messageList,
    });

    useEffect(() => {
        console.log("Added message");
    }, [state.messages]);

    const sendMessage = (message) => {
        message.id = state.messages.length + 1;

        setState((prevState) => ({
            messages: [...prevState.messages, message],
        }));
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
                component="nav"
                aria-label="mailbox folders"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <ChatsList chats={CHATS} />
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                { !error ? <MessageList messages={state.messages} /> : <h2>Chat with id #{chatId} does not exist</h2> }
                { !error ? <MessageForm sendMessage={sendMessage} /> : null }
            </Box>
        </Box>
    );
};

export default ChatsComponent;

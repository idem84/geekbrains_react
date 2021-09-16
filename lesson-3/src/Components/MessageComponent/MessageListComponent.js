const MessagesListComponent = ({ messages }) => {
    return (
        <ul>
            {messages.map((obj) => (
                <li key={obj.id}>
                    <div>
                        <b>{obj.author}</b>
                    </div>
                    <div>
                        {obj.message}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MessagesListComponent;
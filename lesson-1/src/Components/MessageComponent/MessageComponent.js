import './module.style.scss';

const MessageComponent = ({text}) => {
    return (
        <div className="text">
            {text}
            <p>SCSS TEST</p>
        </div>
    )
}

export default MessageComponent;

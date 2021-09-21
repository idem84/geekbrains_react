import './module.style.scss';

const MessageComponent = ({text}) => {
    return (
        <div className="text">
            <p>{text}</p>
            <span>SCSS TEST</span>
        </div>
    )
}

export default MessageComponent;

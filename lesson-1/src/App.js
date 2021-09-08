import './App.css';
import Message from "./Components/MessageComponent/MessageComponent";

const message = "Hello, world!";

function App() {
  return (
    <div className="App">
      <Message text={message} />
    </div>
  );
}

export default App;
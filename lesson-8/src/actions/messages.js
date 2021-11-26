import { AUTHORS } from "../components/App/constants";

export const ADD_MESSAGE = "MESSAGES:ADD_MESSAGE";
export const DELETE_ALL_MESSAGES = "MESSAGES:DELETE_ALL_MESSAGES";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== AUTHORS.BOT) {
    const botMessage = {
      id: `message${Date.now()}`,
      author: AUTHORS.BOT,
      text: "Сообщение от Bot ",
    };

    setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
  }
};

export const deleteAllMessages = () => ({
  type: DELETE_ALL_MESSAGES,
});

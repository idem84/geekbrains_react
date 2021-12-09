import { ADD_MESSAGE, REMOVE_MESSAGE, SET_MESSAGES } from "../actions/messages";

const initialMessages = [];

export const messagesReducer = (state = initialMessages, { payload, type }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };
    case REMOVE_MESSAGE: {
      const newMessages = { ...state };
      newMessages[payload.chatId] = newMessages[payload.chatId].filter(
        ({ id }) => id !== payload.idToDelete
      );

      return newMessages;
    }
    case SET_MESSAGES:
      return payload;
    default:
      return state;
  }
};

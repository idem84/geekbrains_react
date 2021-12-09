import { ADD_CHAT, REMOVE_CHAT, SET_CHATS } from "../actions/chats";

const initialChats = [];

export const chatsReducer = (state = initialChats, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];
    case REMOVE_CHAT:
      return state.filter(({ id }) => id !== payload.chatId);
    case SET_CHATS:
      return payload;
    default:
      return state;
  }
};
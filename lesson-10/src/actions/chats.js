import { onValue, set, remove } from "firebase/database";
import {
  chatsRef,
  getChatRefById,
  getChatMsgsRefById,
} from "../services/firebase";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: {
    chatId: chatId,
  },
});

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const addChatWithFb = (newChat) => (dispatch) => {
  set(getChatMsgsRefById(newChat.id), { empty: true });
  set(getChatRefById(newChat.id), newChat);
};

export const removeChatWithFb = (chatId) => (dispatch) => {
  remove(getChatRefById(chatId));
};

export const initChatsTracking = () => (dispatch) => {
  onValue(chatsRef, (chatsSnap) => {
    //console.log(chatsSnap);
    const newChats = [];

    chatsSnap.forEach((snapshot) => {
      newChats.push(snapshot.val());
    });

    dispatch(setChats(newChats));
  });
};
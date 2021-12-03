import { onValue, set, remove } from "firebase/database";
import { messagesRef, getChatMsgsRefById } from "../services/firebase";

/** */
export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const SET_MESSAGES = "MESSAGES::SET_MESSAGES";
export const REMOVE_MESSAGE = "MESSAGES::REMOVE_MESSAGE";

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  payload: newMessage,
});

export const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  payload: {
    messageId: messageId,
  },
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

// export const addMessageWithFb = (messageChat) => (dispatch) => {
//   set(getChatMsgsRefById(chatId), messageChat);
// };

export const removeMessageWithFb = (chatId) => (dispatch) => {
  remove(getChatMsgsRefById(chatId));
};

export const initMessagesTracking = () => (dispatch) => {
  onValue(messagesRef, (snapshot) => {
    const newMsg = {};
    snapshot.forEach((snapshot) => {
      newMsg[snapshot.key] = Object.values(snapshot.val().messageList || {});
    });
    dispatch(setMessages(newMsg));
  });
};

// export const initMessagesTracking = (chatId) => (dispatch) => {
//   onValue(messagesRef, (messagesSnap) => {
//     const newMessagesKeys = [];
//     const newMessagesValues = [];
//     const newMessages = [];

//     messagesSnap.forEach((snapshot) => {
//       newMessages.push(snapshot.key);
//       newMessagesKeys.push(snapshot.key);
//       newMessagesValues.push(snapshot.val());
//     });

//     console.log(newMessagesKeys);
//     console.log(newMessagesValues);

//     dispatch(setMessages(newMessages));
//   });
// };

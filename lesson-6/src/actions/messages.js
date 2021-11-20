export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE'
export const DELETE_ALL_MESSAGES = 'MESSAGES:DELETE_ALL_MESSAGES'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const deleteAllMessages = () => ({
    type: DELETE_ALL_MESSAGES
})

import { ADD_MESSAGE } from '../actions/messages'
import { DELETE_ALL_MESSAGES } from '../actions/messages'

const initialState = {

}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message,
                ],
            }
        }
        case DELETE_ALL_MESSAGES: {
            return {}
        }
        default:
            return state
    }
}

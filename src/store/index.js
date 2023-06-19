import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userChatListReducer } from './modules/chatListData';
import { modalReducer } from './modules/modal';
import { currentChatReducer } from './modules/chats';
import { getAuthorizationStatus } from './modules/modal/middleware/getAuthorizationStatus';
import { getLastIncomingMessages } from './modules/chatListData/middleware/getLastIncomingMessages';
import { sendText } from './modules/chats/middleware/sendText';
import { logger } from '../store/middleware/logger';

const rootReducer = (state = {}, action) => {
  const newState = {
    chatList: userChatListReducer(state.chatList, action), 
    modal: modalReducer(state.modal, action),
    chatId: currentChatReducer(state.chatId, action),
  };

  // console.log('newState', newState);
  return newState;
};

export const store = createStore(
  rootReducer,
  applyMiddleware(
    // logger,  // логирование экшенов
    getAuthorizationStatus, 
    getLastIncomingMessages,
    sendText),
);

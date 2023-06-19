import { CHAT_LIST_ACTIONS } from "./actions";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";

const defaultState = {
  incomingMsg: [],
  outgoingMsg: [],
  uniqIdList: [],
  loadingStatus: LOADING_STATUSES.idle,
};

export const userChatListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAT_LIST_ACTIONS.finishLoading: {
      const {incomingMsg, outgoingMsg} = action.payload;

      const getAllId = function (...args) { 
        let result = [];
        if (args.length) {
          result = args.map(obj => obj?.chatId ? obj.chatId : 'null');
        }
          return result
      }

      const newSet = new Set();
      newSet.add(...getAllId(...incomingMsg, ...outgoingMsg)) ;
      const uniqIdList = Array.from(newSet);   // возвращает список уникальных номеров всех активных чатов

      return {
        ...state,
        incomingMsg, // массив всех входящих сообщений
        outgoingMsg,  // массив всех исходящих сообщений
        uniqIdList, // список телефонов с которыми открыт активный чат
        loadingStatus: LOADING_STATUSES.success,
      };
    }
    case CHAT_LIST_ACTIONS.startLoading: {
     return {
      ...state,
      loadingStatus: LOADING_STATUSES.loading,
     }
    }

    case CHAT_LIST_ACTIONS.pushSendMessage: {
      state.outgoingMsg.push(action.payload)
      return {
        ...state,
       }
    }
    default:
      return state;
  }
};
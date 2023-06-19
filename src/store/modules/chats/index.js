import { SEND_TEXT_ACTIONS } from "./actions";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";

const defaultState = {
  chatId: null,
};

export const currentChatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEND_TEXT_ACTIONS.startSending: {
      return {
        ...state,
        loadingStatus: LOADING_STATUSES.sending,
      };
    }

    case SEND_TEXT_ACTIONS.finishSending: {

      return {
        ...state,
        loadingStatus: LOADING_STATUSES.success,
      };
    }

    case SEND_TEXT_ACTIONS.failSending: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }

    case SEND_TEXT_ACTIONS.setCurrentChatId: {
      return {
        ...state,
        chatId: action.payload,
      };
    }
    default:
      return state;
  }
};

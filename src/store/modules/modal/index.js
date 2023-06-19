import { MODAL_ACTIONS } from "./actions";
import { LOADING_STATUSES } from "../../../constants/loadingStatuses";
const defaultState = {
  authorizedStatus: {},
  loadingStatus: LOADING_STATUSES.idle,
  authorizationData: {},
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MODAL_ACTIONS.startLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.loading,
      };
    }

    case MODAL_ACTIONS.finishLoading: {
      return {
        ...state,
        authorizedStatus: action.payload.status,
        authorizationData: action.payload.authData,
        loadingStatus: LOADING_STATUSES.success,
      };
    }

    case MODAL_ACTIONS.failLoading: {
      return {
        ...defaultState,
        loadingStatus: LOADING_STATUSES.failed,
      };
    }

    default:
      return state;
  }
};

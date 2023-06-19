import { useCurrentUserId } from '../../../../context/current-user-context';
import {
  MODAL_ACTIONS,
  startLoadingAuthorizationStatus,
  finishLoadingAuthorizationStatus,
  failLoadingAuthorizationStatus,
} from '../actions';

export const getAuthorizationStatus = (store) => (next) => (action) => {
  if (action?.type !== MODAL_ACTIONS.load) {
    return next(action);
  }
  const { idInstance, token } = action.payload;
  store.dispatch(startLoadingAuthorizationStatus());
  try {
    fetch(
      `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${token}`,
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          throw new Error('Проверьте авторизацию');
        }
      })
      .then((data) => {
        const { stateInstance: status } = data;
        store.dispatch(finishLoadingAuthorizationStatus(status));
        localStorage.setItem('greenAPIclient', JSON.stringify(action.payload));
        // alert(`localStorage: ${localStorage.getItem('greenAPIclient')}`);
      })
      .catch(alert);
  } catch (error) {
    alert('Ошибка сервера!');
  }
};

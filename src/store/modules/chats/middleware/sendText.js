import { useCurrentUserId } from '../../../../context/current-user-context';
import { loadLastIncomingMessages, pushSendMessageAction } from '../../chatListData/actions';
import { getLastIncomingMessages } from '../../chatListData/middleware/getLastIncomingMessages';
import { loadAuthorizationStatus } from '../../modal/actions';
import {
  SEND_TEXT_ACTIONS,
  startSendTextStatus,
  finishLoading,
  failSending,
  failSendTextStatus,
  finishSendTextStatus,
} from '../actions';

export const sendText = (store) => (next) => (action) => {
  if (action?.type !== SEND_TEXT_ACTIONS.send) {
    return next(action);
  }

  store.dispatch(startSendTextStatus());

  const { chatId , textMessage: message } = action.payload; // считается, что пользователь ввёл корректный номер телефона
  const { idInstance, token: apiTokenInstance} = action.payload.currentUserId;
  const body = {
    chatId, 
    message,
  }
  try {
    const sendTextMessage = async function (){
      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(body),
        })
        if (response.status >= 200 && response.status < 300) {
          store.dispatch(finishSendTextStatus());
          const {idMessage} = await response.json()
          const sendMessage = {
              "type": "outgoing",
              idMessage,
              timestamp: new Date(),
              chatId,
              "textMessage": message,
          }
          store.dispatch(pushSendMessageAction(sendMessage))
          return;
        } else {
          store.dispatch(failSendTextStatus());
          window.location.reload();
          throw new Error('Проверьте авторизацию');
        }}
        sendTextMessage();
    } catch (error) {
      alert(error);
  }
}
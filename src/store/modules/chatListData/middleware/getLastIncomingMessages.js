import {
  CHAT_LIST_ACTIONS, failLastIncomingMessagesStatus, finishLoadingIncomingMessages,
  } from '../actions';
  
  export const getLastIncomingMessages = (store) => (next) => (action) => {
    if (action?.type !== CHAT_LIST_ACTIONS.load) {
      return next(action);
    }
    const {idInstance, token:apiTokenInstance} = JSON.parse(localStorage.getItem('greenAPIclient'))
    try {
      const getAllMessage = async function () {
        const resIn = await fetch(
          `https://api.green-api.com/waInstance${idInstance}/lastIncomingMessages/${apiTokenInstance}`,
          );
        const resOut = await fetch(
          `https://api.green-api.com/waInstance${idInstance}/lastOutgoingMessages/${apiTokenInstance}`,
          );
          if (resIn.status >= 200 && resIn.status < 300 && resOut.status >= 200 && resOut.status < 300) {
            const incomingMsg = await resIn.json();
            const outgoingMsg = await resOut.json();
            store.dispatch(finishLoadingIncomingMessages({incomingMsg, outgoingMsg}));
            return
          } else {
            store.dispatch(failLastIncomingMessagesStatus());
            window.location.reload();
            throw new Error('Проверьте авторизацию');
          }
      }
      getAllMessage();
    } catch (error) {
      alert('Проверьте id или token');
    }
  };
  
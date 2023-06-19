export const SEND_TEXT_ACTIONS = {
  send: "chat/Send",
  startSending: "chat/StartSendTextStatus",
  finishSending: "chat/FinishSending",
  failSending: "chat/FailSending",
  setCurrentChatId: "chat/SetCurrentChatId",
  setCurrentChatIdHistory: "chat/SetCurrentChatIdHistory"
  };
  
  export const sendTextStatus = (textMessage) => ({
    type: SEND_TEXT_ACTIONS.send,
    payload: textMessage
  });
  
  export const startSendTextStatus = (data) => ({
    type: SEND_TEXT_ACTIONS.startSending,
    payload: data
  });
  export const finishSendTextStatus = (data) => ({
    type: SEND_TEXT_ACTIONS.finishSending,
    payload: data
  });
  export const failSendTextStatus = (data) => ({
    type: SEND_TEXT_ACTIONS.failSending,
    payload: data
  });

  export const setCurrentChatIdAction = (chatId) => ({
    type: SEND_TEXT_ACTIONS.setCurrentChatId,
    payload: chatId
  });

  export const setCurrentChatIdHistory = (chatId) => ({
    type: SEND_TEXT_ACTIONS.setCurrentChatIdHistory,
    payload: chatId
  });
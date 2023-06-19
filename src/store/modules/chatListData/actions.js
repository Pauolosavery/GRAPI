export const CHAT_LIST_ACTIONS = {
  load: "chatListData/Load",
  finishLoading: "chatListData/finishLoading",
  pushSendMessage: "chatListData/pushSendMessage"
};

export const loadLastIncomingMessages = () => ({
  type: CHAT_LIST_ACTIONS.load,
  payload: null,
});


export const startLastIncomingMessagesStatus = (data) => ({
  type: CHAT_LIST_ACTIONS.startSending,
  payload: data
});
export const finishLoadingIncomingMessages = (payload) => ({
  type: CHAT_LIST_ACTIONS.finishLoading,
  payload: payload,
});
export const failLastIncomingMessagesStatus = (data) => ({
  type: CHAT_LIST_ACTIONS.failSending,
  payload: data
});

export const pushSendMessageAction = (sendMessage) => ({
  type: CHAT_LIST_ACTIONS.pushSendMessage,
  payload: sendMessage
});
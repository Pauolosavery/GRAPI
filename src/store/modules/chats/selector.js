export const selectCurrentChatId = (state) => state.chatId;

export const selectChatIdHistoryMessage = (state) => {
    if (!state.chatId) return state.chatId;
    const allMsg = [...state.chatList.outgoingMsg, ...state.chatList.incomingMsg];
    const chatIdHistory = allMsg.filter(msg => msg.chatId === state.chatId.chatId)
                .sort((a,b)=> a.timestamp-b.timestamp)
    return chatIdHistory
}

export const selectMessagelLoadingStatus = (state) => state.loadingStatus;


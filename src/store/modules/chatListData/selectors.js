export const selectChatListData = (state) => {
    if (!state.chatList.uniqIdList.length) return [];
    const { uniqIdList } = state.chatList;
    const allMsg = [...state.chatList.outgoingMsg, ...state.chatList.incomingMsg];
    const chatListData = uniqIdList.map(chatId => {
        return allMsg.filter(msg => msg.chatId === chatId)
                .sort((a,b)=> a.timestamp-b.timestamp)
                .pop()
            })
    return chatListData
};
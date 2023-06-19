export const filteredData = (data, param) => {
  return data.filter(
    (user) =>
      user?.senderName?.toLowerCase().includes(param.toLowerCase()) ||
      user?.chatId.includes(param)
  );
};

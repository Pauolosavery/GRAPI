import * as React from "react";

export const useInputData = ({ defaultState = {} } = {}) => {
  const [chatId, setChatId] = React.useState(null);

  return {
    authData: {
      idInstance,
      token,
    },
    setIdInstance,
    setToken,
  };
};

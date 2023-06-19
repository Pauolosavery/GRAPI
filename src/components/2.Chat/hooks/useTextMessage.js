import * as React from "react";

export const useTextMessage = ({ defaultState = '' } = '') => {
  const [textMessage, setTextMessage] = React.useState(defaultState);

  return {
    textMessage,
    setTextMessage,
  };
};

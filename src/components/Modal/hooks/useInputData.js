import * as React from "react";

export const useInputData = ({ defaultState = {} } = {}) => {
  const [idInstance, setIdInstance] = React.useState(null);
  const [token, setToken] = React.useState(null);

  return {
    authData: {
      idInstance,
      token,
    },
    setIdInstance,
    setToken,
  };
};

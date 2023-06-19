import * as React from 'react';

export const useModal = ({ defaultState = true } = {}) => {
  const [visibility, setVisibility] = React.useState(defaultState);

  const showModal = React.useCallback(() => {
    setVisibility(true);
  }, []);
  const hideModal = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return {
    visibility,
    showModal,
    hideModal,
  };
};

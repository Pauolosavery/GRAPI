export const MODAL_ACTIONS = {
  load: "modal/Load",
  startLoading: "modal/StartLoading",
  finishLoading: "modal/FinishLoading",
  failLoading: "modal/FailLoading",
};

export const loadAuthorizationStatus = (authData) => ({
  type: MODAL_ACTIONS.load,
  payload: authData,
});

export const startLoadingAuthorizationStatus = () => ({
  type: MODAL_ACTIONS.startLoading,
});
export const finishLoadingAuthorizationStatus = (status) => {
  return ({
  type: MODAL_ACTIONS.finishLoading,
  payload: status
})};
export const failLoadingAuthorizationStatus = () => ({
  type: MODAL_ACTIONS.failLoading,
});

export const logger = (store) => (next) => (action) => {
  next(action);
  console.log("action", action);
};

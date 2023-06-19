import * as React from "react";

const defaultContext = {
  currentUserId: JSON.parse(localStorage.getItem('greenAPIclient')),
  setCurrentUserId: () => {},
};

const CurrentUserContext = React.createContext(defaultContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = React.useState(defaultContext.currentUserId);
  return (
    <CurrentUserContext.Provider
      value={{
        currentUserId,
        setCurrentUserId,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUserId = () => {
  return React.useContext(CurrentUserContext);
};

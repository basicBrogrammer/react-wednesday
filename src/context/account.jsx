import React, { useState, useContext } from 'react';

const AccountContext = React.createContext();

const AccountContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const state = { user, isLoggedIn };
  const actions = { setUser, setIsLoggedIn };

  return <AccountContext.Provider value={{ state, actions }}>{children}</AccountContext.Provider>;
};

export const useAccountContext = () => useContext(AccountContext);

export default AccountContextProvider;

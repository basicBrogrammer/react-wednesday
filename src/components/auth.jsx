import React from 'react';
import { useAccountContext } from '../context/account';

export default function Auth() {
  const {
    state: { user, isLoggedIn },
    actions: userActions,
  } = useAccountContext();

  const handleLogin = () => {
    userActions.setUser({ name: 'Brobi Wan' });
    userActions.setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    userActions.setUser(null);
    userActions.setIsLoggedIn(false);
  };

  return (
    <>
      <p className="px-1">{isLoggedIn ? `User: ${user.name}` : 'No user'}</p>
      <button onClick={isLoggedIn ? handleLogOut : handleLogin} className="border-2 rounded-sm p-1">
        {isLoggedIn ? 'Log Out' : 'Login'}
      </button>
    </>
  );
}

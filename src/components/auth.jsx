import React from 'react';
import { useAccountContext } from '../context/account';

export default function Auth() {
  const {
    state: { user, isLoggedIn },
    actions: userActions,
  } = useAccountContext();

  if (isLoggedIn) {
    return (
      <>
        <div>User: {user.name}</div>
        <button
          onClick={() => {
            userActions.setUser(null);
            userActions.setIsLoggedIn(false);
          }}
          className="border-2 rounded-sm p-1"
        >
          {' '}
          Log Out{' '}
        </button>
      </>
    );
  }

  return (
    <>
      <p className="px-1">No user</p>
      <button
        onClick={() => {
          userActions.setUser({ name: 'Brobi Wan' });
          userActions.setIsLoggedIn(true);
        }}
        className="border-2 rounded-sm p-1"
      >
        Login
      </button>
    </>
  );
}

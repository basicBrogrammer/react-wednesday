import React from 'react';

import logo from './logo.svg';
import './App.css';

import { useAccountContext } from './context/account';
import Timeline from './components/timeline';
import { useTimelineContext } from './context/timeline';

function App() {
  const {
    state: { user, isLoggedIn },
    actions: userActions,
  } = useAccountContext();
  const {
    state: { selectedPost, selectedComment },
  } = useTimelineContext();

  return (
    <div className="">
      <header className="sticky top-0 flex justify-between items-center px-3 py-2 border-b-2 bg-gray-50">
        <h2 className="font-extrabold">React Wednesday</h2>
        <div className="flex items-center">
          {isLoggedIn ? (
            <div>User: {user.name}</div>
          ) : (
            <>
              <p className="px-1">No user</p>
              <button className="border-2 rounded-sm p-1"> Login </button>
            </>
          )}
        </div>
      </header>
      <main className="flex justify-between bg-gray-50">
        <div className="w-1/3">
          <h4>Selected Post: {selectedPost?.id} </h4>
          <h4>Selected Comment: {selectedComment?.id} </h4>
        </div>
        <div className="w-2/3">
          <Timeline />
        </div>
      </main>
    </div>
  );
}

export default App;

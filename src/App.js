import React from 'react';

import './App.css';

import Timeline from './components/timeline';
import { useTimelineContext } from './context/timeline';
import Auth from './components/auth';
import FocusedItem from './components/focused-item';

function App() {
  const {
    state: { selectedPost, selectedComment },
  } = useTimelineContext();

  return (
    <div className="h-screen">
      <header className="fixed top-0 w-screen flex justify-between items-center px-3 py-2 border-b-2 bg-gray-50">
        <h2 className="font-extrabold">React Wednesday</h2>
        <div className="flex items-center">
          <Auth />
        </div>
      </header>
      <main className="flex justify-between bg-gray-50 h-full overflow-hidden pt-14">
        <div className="w-1/5">
          <h4>Selected Post: {selectedPost?.id} </h4>
          <h4>Selected Comment: {selectedComment?.id} </h4>
        </div>
        <div className="w-2/5 px-2 overflow-auto">
          <Timeline />
        </div>
        <div className="w-2/5 px-2">
          <FocusedItem />
        </div>
      </main>
    </div>
  );
}

export default App;

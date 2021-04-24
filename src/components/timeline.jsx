import React from 'react';
import { useTimelineContext } from '../context/timeline';
import Item from './item';

export default function Timeline() {
  const {
    state: { posts, selectedPost, selectedComment },
    actions: { setSelectedPost, setSelectedComment },
  } = useTimelineContext();

  return (
    <div className="flex flex-col items-center">
      <h1>Timeline</h1>
      {posts.map((p) => (
        <Item key={p.id} item={p} handleClick={() => setSelectedPost(p)} />
      ))}
    </div>
  );
}

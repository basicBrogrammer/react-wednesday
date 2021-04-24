import React from 'react';
import { useTimelineContext } from '../context/timeline';
import Item from './item';

const SelectedItem = ({ item, title, children }) => {
  const {
    actions: { setSelectedPost, setSelectedComment },
  } = useTimelineContext();

  return (
    <div className="flex flex-col items-center">
      <h1>
        <button
          onClick={() => {
            setSelectedPost(null);
            setSelectedComment(null);
          }}
          className="rounded-md border-2 mx-2"
        >
          Unfocus
        </button>
        {title}
      </h1>
      <Item item={item}>{children}</Item>
    </div>
  );
};

export default function FocusedItem() {
  const {
    state: { selectedPost, selectedComment },
    actions: { setSelectedComment },
  } = useTimelineContext();

  if (selectedComment) {
    return <SelectedItem item={selectedComment} title="Comment Selected" />;
  }

  if (selectedPost) {
    return (
      <SelectedItem item={selectedPost} title="Post Selected">
        {selectedPost.comments.map((comment) => (
          <Item key={comment.id} item={comment} handleClick={() => setSelectedComment(comment)} />
        ))}
      </SelectedItem>
    );
  }

  return <div>No item selected.</div>;
}

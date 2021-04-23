import React from 'react';
import { useTimelineContext } from '../context/timeline';

const Post = ({ post, children }) => (
  <div className="border-2 rounded-md my-2 p-1">
    <h3 className="font-semibold">
      {post.id}) {post.user.name} said ...
    </h3>
    <p>{post.body}</p>
    <div className="border-t-2 px-3">{children}</div>
  </div>
);

export default function Timeline() {
  const {
    state: { posts },
  } = useTimelineContext();
  return (
    <div className="flex flex-col items-center w-1/2">
      <h1>Timeline</h1>
      {posts.map((p) => (
        <Post key={p.id} post={p}>
          {p.comments.map((comment) => (
            <Post key={comment.id} post={comment} />
          ))}
        </Post>
      ))}
    </div>
  );
}

import React, { useState, useContext } from 'react';
import { createPosts } from '../utils/data';

const TimelineContext = React.createContext();

const initialPosts = createPosts(10);
const TimelineContextProvider = ({ children }) => {
  debugger;
  const [posts, setPosts] = useState(initialPosts);
  // For the purposes of this blog, selectedPost will be used to display
  // the "show page"
  const [selectedPost, setSelectedPost] = useState(null);
  // And let's imagine we want to do the same thing for a comment.
  const [selectedComment, setSelectedComment] = useState(null);

  const state = { posts, selectedPost, selectedComment };
  const actions = { setPosts, setSelectedPost, setSelectedComment };

  return <TimelineContext.Provider value={{ state, actions }}>{children}</TimelineContext.Provider>;
};

export const useTimelineContext = () => useContext(TimelineContext);

export default TimelineContextProvider;

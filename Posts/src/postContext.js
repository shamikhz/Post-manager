import { createContext, useState, useContext } from "react";

// Create PostContext
const PostContext = createContext();

// Create Custom Hook
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

// Create Custom Provider
export const PostProvider = ({ children }) => {
  const [savedPosts, setSavedPosts] = useState([]);

  // Function to add a post to savedPosts
  const addPost = (post) => {
    setSavedPosts((prevPosts) => [...prevPosts, post]);
  };

  // Function to reset savedPosts
  const resetPosts = () => {
    setSavedPosts([]);
  };

  return (
    <PostContext.Provider value={{ savedPosts, addPost, resetPosts }}>
      {children}
    </PostContext.Provider>
  );
};

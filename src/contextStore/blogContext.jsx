import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Blog Post",
      body: "This is the body of the first blog post",
      likes: 0,
    },
    {
      id: 2,
      title: "Second Blog Post",
      body: "This is the body of the second blog post",
      likes: 0,
    },
    {
      id: 3,
      title: "Third Blog Post",
      body: "This is the body of the third blog post",
      likes: 0,
    },
  ]);

  const addPost = (post) => {
    setPosts([
      ...posts,
      { id: posts.length + 1, title: post.title, body: post.body, likes: 0 },
    ]);
  };

  const viewPost = (id) => {
    return posts.find((post) => post.id === id);
  };

  const editPost = (id, updatedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, title: updatedPost.title, body: updatedPost.body }
          : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        viewPost,
        editPost,
        deletePost,
        likePost,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

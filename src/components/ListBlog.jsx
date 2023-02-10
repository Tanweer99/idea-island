import React, { useContext } from "react";
import { BlogContext } from "../contextStore/blogContext";

const ListBlog = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Likes: {post.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default ListBlog;

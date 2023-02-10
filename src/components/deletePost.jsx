import React, { useContext } from "react";
import { BlogContext } from "../contextStore/blogContext";

const DeletePost = ({ match }) => {
  const { deletePost } = useContext(BlogContext);

  const handleDelete = () => {
    deletePost(parseInt(match.params.id));
  };

  return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeletePost;

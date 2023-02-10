import React, { useContext } from "react";
import { BlogContext } from "../contextStore/blogContext";

const LikePost = ({ postId }) => {
  const { likePost } = useContext(BlogContext);

  const handleLike = () => {
    likePost(postId);
  };

  return (
    <i
      onClick={handleLike}
      className="fa fa-thumbs-up text-primary"
      style={{ fontSize: 25 }}
      aria-hidden="true"
    ></i>
  );
};

export default LikePost;

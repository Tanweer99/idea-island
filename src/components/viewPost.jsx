import React, { useContext, useState } from "react";
import { BlogContext } from "../contextStore/blogContext";
import LikePost from "./likePost";
import { NavLink } from "react-router-dom";

const ViewPost = ({ match, history }) => {
  const { viewPost, deletePost } = useContext(BlogContext);
  const [post, setPost] = useState({});

  React.useEffect(() => {
    setPost(viewPost(parseInt(match.params.id)));
  }, [match.params.id, viewPost]);

  const handleDelete = () => {
    deletePost(post.id);
    history.replace("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-info bg-secondary">
        <NavLink to={`/edit/${post.id}`}>
          <div className="btn btn-info">Edit</div>
        </NavLink>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </nav>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{post.title}</h1>
          <LikePost postId={post.id} />
          <span className="badge badge-primary mx-1">{post.likes}</span>
          <hr className="my-4" />
          <p className="lead">{post.body}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewPost;

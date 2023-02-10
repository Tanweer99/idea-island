import React, { useContext, useState } from "react";
import { BlogContext } from "../contextStore/blogContext";
import { NavLink } from "react-router-dom";

const EditPost = ({ match, history }) => {
  const { editPost, posts } = useContext(BlogContext);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  React.useEffect(() => {
    const post = posts.find((post) => post.id === Number(match.params.id));
    setPost(post);
    setTitle(post.title);
    setBody(post.body);
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(post.id, { title, body });
    history.push("/");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-info bg-secondary">
        <NavLink to="/">
          <div className="btn btn-info">Back</div>
        </NavLink>
      </nav>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              id="title"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              className="form-control"
              placeholder="Body..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <button onClick={handleCancel} className="btn btn-danger mx-2">
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditPost;

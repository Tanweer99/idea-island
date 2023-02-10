import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../contextStore/blogContext";

const AddPost = (props) => {
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, body });
    setTitle("");
    setBody("");
    props.history.push("/");
  };

  const handleCancel = () => {
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-info bg-secondary">
        <Link to="/">
          <div className="btn btn-info">Back</div>
        </Link>
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
              placeholder="Body"
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

export default AddPost;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { BlogContext } from "../contextStore/blogContext";

const Home = () => {
  const { posts } = useContext(BlogContext);

  return (
    <React.Fragment>
      <nav className="navbar bg-secondary">
        <NavLink to="/add">
          <button className="btn btn-primary mt-2 mx-2">AddPost</button>
        </NavLink>
      </nav>
      <div className="container mt-3">
        {posts.map((post) => (
          <div key={post.id} className="mb-2">
            <h2>
              <NavLink
                to={`/post/${post.id}`}
                style={{ textDecoration: "none" }}
              >
                {post.title}
              </NavLink>
            </h2>

            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;

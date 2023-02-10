import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { BlogContext } from "./contextStore/blogContext";
import Home from "./components/home";
import ViewPost from "./components/viewPost";
import EditPost from "./components/editPost";
import AddPost from "./components/addPost";
import NotFound from "./components/not-found";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first blog post",
      body: "This is the body of my first blog post.",
      likes: 0,
    },
    {
      id: 2,
      title: "My second blog post",
      body: "This is the body of my second blog post.",
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

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const likePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        editPost,
        viewPost,
        deletePost,
        likePost,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddPost} />
          <Route path="/post/:id" component={ViewPost} />
          <Route path="/edit/:id" component={EditPost} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </Router>
    </BlogContext.Provider>
  );
};

export default App;

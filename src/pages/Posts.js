import React, { useEffect, useState } from "react";
import "./Posts.css";
import { Link } from "react-router-dom";
import PostCard from '../components/PostCard'

const Posts = () => {
  // Array destructuring for posts
  const [posts, setPosts] = useState([]);

  // Async/Await Method to fetch posts from the API
  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
    // fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((posts) => setPosts(posts))
  }, []);

  return (
    <div className="post-container">
      <h2>Hi, this is my post</h2>

      <div className="card_post">
        {posts.map((post, index) => <PostCard id ={post.id} title={post.title} body={post.body} /> )}
          
      </div>
    </div>
  );
};

export default Posts;

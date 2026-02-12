import React, { useState, useEffect } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/feed").then((response) => {
      setposts(response.data.posts);
    });
  }, []);
  return (
    <section className="feed-section">
      <h1>Feed</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="post-card" key={post._id}>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Feed;

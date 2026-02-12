import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await axios
      .post("http://localhost:3000/create-post", formData)
      .then((response) => {
        navigate("/feed");
      })
      .catch((err) => {
        alert("Error creating post");
      });
  };
  return (
    <section className="create-post-section">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="caption" placeholder="Caption" required />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;

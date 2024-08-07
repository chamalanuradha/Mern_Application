/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([]); // Initialize state for posts


  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch posts from the server
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getposts'); // Adjust the URL as needed
      setPosts(response.data.existingposts); // Update state with the fetched posts
    } catch (error) {
      console.error('Error fetching posts:', error); // Log any errors
    }
  };

// Function to handle delete with confirmation
const handleDelete = async (postId) => {
  // Show a confirmation dialog
  const confirmDelete = window.confirm('Are you sure you want to delete this post?');

  // If the user confirms, proceed with deletion
  if (confirmDelete) {
    try {
      const response = await axios.delete(`http://localhost:8080/deletepost/${postId}`);
      if (response.status === 200) {
        // Update the state to remove the deleted post from the list
        window.location.reload();
        console.log('Post deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
};

const encodeId = (id) => {
  return btoa(id); // Encode ID to Base64
};

  return (
    <div className="container">
      <div className="mt-3">
        <h3>All Posts</h3>
        <div className="d-flex justify-content-end mt-3">
          <Link to="/createpost" className="btn btn-success">
            <FontAwesomeIcon icon={faPlus} />&nbsp; Create
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Post ID</th>
              <th scope="col">Post Topic</th>
              <th scope="col">Post description</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/postdetails/${encodeId(post._id)}`} className="topic">
                    {post.topic}
                  </Link>
                </td>
                <td>{post.description}</td>
                <td>{post.author}</td>
                <td>{new Date(post.date).toLocaleDateString()}</td>
                <td>
                  <Link to={`/updatepost/${encodeId(post._id)}`} className="btn btn-primary">
                    <FontAwesomeIcon icon={faEdit} />&nbsp;Edit
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(post._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

 
};

export default Home;

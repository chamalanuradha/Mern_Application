import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Initialize an empty array for storing fetched posts
      error: null, // Initialize error state to handle any errors
    };
  }

  // Fetch posts when the component mounts
  componentDidMount() {
    this.fetchPosts();
  }

  // Function to fetch posts from the server
  fetchPosts = () => {
    axios.get('http://localhost:8080/getposts') // Adjust the URL as needed
      .then(response => {
        this.setState({ posts: response.data }); // Update state with the fetched posts
      })
      .catch(error => {
        this.setState({ error: error.message }); // Update state with the error message
      });
  };

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        <h1>Posts</h1>
        {error && <p>Error: {error}</p>}
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <h2>{post.topic}</h2>
                <p>{post.description}</p>
                <p>Author: {post.author}</p>
                <p>Date: {new Date(post.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    );
  }
}


import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Initialize an empty array for storing fetched posts
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
        this.setState({ posts: response.data.existingposts }); // Update state with the fetched posts
      })
      .catch(error => {
        this.setState({ error: error.message }); // Update state with the error message
      });
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h3>All Posts</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Post ID</th>
              <th scope="col">Post Topic</th>
              <th scope="col">Post description</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.topic}</td>
                <td>{post.description}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


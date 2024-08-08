/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Import specific icons



export default class Home extends Component {
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
      <div className = "container">
        <div className = "mt-3">
        <h3>All Posts</h3>
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
                <td>{index+1}</td>
                <td>{post.topic}</td>
                <td>{post.description}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <a className="btn btn-primary" href="#">
                      <FontAwesomeIcon icon={faEdit} />&nbsp;Edit
                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#">
                      <FontAwesomeIcon icon={faTrash} />&nbsp;Delete
                    </a>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>
    );
  }
}


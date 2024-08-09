import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment-timezone';

const UpdatePost = () => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();
  const { id } = useParams(); // Get the post ID from the URL
  //  function to decode Base64
  const decodeId = (encodedId) => {
    return atob(encodedId); 
  };

  // Fetch the post details when the component mounts
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const decodedId = decodeId(id); 
        const response = await axios.get(`http://localhost:8080/getpost/${decodedId}`);
        const post = response.data.post;
        setTopic(post.topic);
        setDescription(post.description);
        setAuthor(post.author);
        setDate(moment(post.date).format('YYYY-MM-DD')); // Format the date for the input field
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Format the date using Moment.js to Asia/Kolkata timezone
    const formattedDate = moment(date).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');

    const postData = {
      topic,
      description,
      author,
      date: formattedDate, // Use the formatted date
    };

    try {
      const decodedId = decodeId(id); 
      const response = await axios.put(`http://localhost:8080/updatepost/${decodedId}`, postData);
      if (response.status === 200) {
        alert('Post updated successfully');
        navigate('/'); // Navigate to the home page after successful update
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Error updating post');
    }
  };

  return (
    <div className="container">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input
            type="text"
            id="topic"
            className="form-control"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;

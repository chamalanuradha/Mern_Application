import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null); // State to hold post details

    //  function to decode Base64
    const decodeId = (encodedId) => {
      return atob(encodedId); 
    };

  // Fetch the post details when the component mounts
  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
  //decode relevent post id
        const decodedId = decodeId(id); 
        const response = await axios.get(`http://localhost:8080/getpost/${decodedId}`);
        setPost(response.data.post); 
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [id]);

 

  if (!post) {
    return <div className="container">Loading...</div>; // Show a loading message while fetching
  }



  return (
    <div className="container">
      <h2>{post.topic}</h2>
      <p><strong>Description:</strong> {post.description}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.date}</p>
    </div>
  );
};

export default PostDetails;

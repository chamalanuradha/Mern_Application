const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// Add a new post
router.post('/addpost', async (req, res) => {
    try {
        const post = new Posts(req.body);
        await post.save();
        res.status(200).json({ success: 'Post saved successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Get post details
router.get('/getposts', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts);
    }catch (err) {
        res.status(400).json
    }
});


module.exports = router;
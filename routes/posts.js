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
        res.status(200).json({existingposts: posts});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update post details
router.put('/updatepost/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(
            req.params.id, // ID of the post to update
            req.body, // Updated data from request body
            
        );
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(200).json({ success: 'Post updated successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete post
router.delete('/deletepost/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json
        }else {
            res.status(200).json({ success: 'Post deleted successfully' });
        }
        }catch (err) {
            res.status(400).json({ error: err.message });
        }

})

module.exports = router;
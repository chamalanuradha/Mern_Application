const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

router.post('/addpost', (req, res) => {
    const post = new Posts(req.body);
    post.save((err) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            res.status(200).json({ success: 'Post saved successfully' });
        }
    })
});

module.exports = router;
    
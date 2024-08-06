const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    topic:{
        typeof: 'string',
        required: true
    },
    description : {
        typeof: 'string',
        required: true
    },
    author: {
        typeof: 'string',
        required: true
    },
    date: {
        typeof: 'date',
        required: true
    
    }
})

module.exports = mongoose.model('Post', postSchema); //Post is the name of the collection
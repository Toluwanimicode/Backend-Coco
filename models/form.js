// models/form.js

const mongoose = require('mongoose');

// Define the schema for form submissions
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },
});

// Create and export the model
module.exports = mongoose.model('Form', formSchema);

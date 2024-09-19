// routes.js

const express = require('express');
const router = express.Router();
const Form = require('./models/form'); // Adjust the path as needed

// POST route for form submissions
router.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const newForm = new Form({
        name,
        email,
        subject,
        message,
    });

    try {
        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error });
    }
});


module.exports = router;

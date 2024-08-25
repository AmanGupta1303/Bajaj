const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "Aman";
    const email = "aman.gupta2021a@vitstudent.ac.in";
    const roll_number = "21BCE0431";

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id,
            email,
            roll_number,
            message: "Invalid input"
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

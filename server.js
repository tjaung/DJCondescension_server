const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, xi-api-key');
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  });

// Handle preflight requests globally for all routes
app.options('*', cors());

app.use(express.json()); // Parse JSON bodies

const ELEVEN_LABS_API_KEY = process.env.VITE_ELEVEN_LABS_API_KEY;
const ELEVEN_VOICE_ID = process.env.VITE_ELEVEN_LABS_VOICE_ID
const ELEVEN_LABS_URI = process.env.VITE_ELEVEN_LABS_URI

app.use("/", (req, res) => {
    res.send("server is running")
})

// Endpoint to generate TTS audio
app.post('/generateTTS', async (req, res) => {
    const { text } = req.body;
    console.log(text);
    try {
        const response = await axios.post(
            `${ELEVEN_LABS_URI}/${ELEVEN_VOICE_ID}`,
            {
                text,
                model_id: "eleven_multilingual_v2",
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'xi-api-key': ELEVEN_LABS_API_KEY
                },
                responseType: 'arraybuffer'
            }
        );
        console.log(response);
        res.setHeader('Content-Type', 'audio/mpeg');
        res.send(response.data);
    } catch (error) {
        console.error('Error generating TTS:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate TTS audio' });
    }
});

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

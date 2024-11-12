// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ['http://localhost:5173','http://localhost:5173/callback#'], // Allow only the frontend
    methods: 'GET,POST',
  }));
  
app.use(express.json()); // Parse JSON bodies

const ELEVEN_LABS_API_KEY = process.env.VITE_ELEVEN_LABS_API_KEY;
const ELEVEN_VOICE_ID = process.env.VITE_ELEVEN_LABS_VOICE_ID
const ELEVEN_LABS_URI = process.env.VITE_ELEVEN_LABS_URI
// Endpoint to generate TTS audio
app.post('/generateTTS', async (req, res) => {
    const { text } = req.body;
    console.log(text)
    try {
        const response = await axios.post(
            `${ELEVEN_LABS_URI}/${ELEVEN_VOICE_ID}`,
            {
                text,
                // voice_settings: {
                //     "stability": 0.3,
                //     "similarity_boost": 0.5,
                //     "style": 0.0,
                //     "use_speaker_boost": true
                // },
                model_id: "eleven_multilingual_v2",
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${process.env.ELEVEN_LABS_API_KEY}`,
                    'xi-api-key': ELEVEN_LABS_API_KEY
                },
                responseType: 'arraybuffer'
            }
        );
        console.log(response)
        res.setHeader('Content-Type', 'audio/mpeg');
        res.send(response.data);
    } catch (error) {
        console.error('Error generating TTS:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate TTS audio' });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

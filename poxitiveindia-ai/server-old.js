// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config(); // Load .env file
console.log("✅ Loaded API Key (first 6 chars):", process.env.OPENAI_API_KEY?.slice(0, 6));


const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 20000, // 20 seconds
});

app.post('/ask', async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log("📩 User Asked:", userMessage);
    

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: userMessage }],
      model: 'gpt-3.5-turbo',
    });

    const reply = chatCompletion.choices[0].message.content;
    console.log("🤖 AI Reply:", reply);
	
	res.json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to fetch AI response' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load local knowledgebase
const knowledge = JSON.parse(fs.readFileSync('./knowledge.json', 'utf-8'));

app.post('/ask', async (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  console.log("📩 User Asked:", userMessage);

  // Try to find keyword match
  const keyword = Object.keys(knowledge).find(key => userMessage.includes(key));

  if (keyword) {
    const reply = knowledge[keyword];
    console.log("🤖 Matched Keyword:", keyword);
    console.log("✅ AIBox Reply:", reply);
    return res.json({ reply });
  } else {
    return res.json({
      reply: "Sorry, I don't have data for that yet. Please try asking about USDX, RVX, RevoX, QuantamX, Super Representatives, or UviSwap."
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Local AIBox server running on port ${PORT}`));

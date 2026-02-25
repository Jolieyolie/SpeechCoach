import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";
import { SYSTEM } from "./systemPolicy";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "groq/compound-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// This function sends the input of the form to the llm service
app.post("/generate", async (req, res) => {
  try {
    const { goal, eventDate, hasScreen, context, audienceSize } = req.body;

    const prompt = `
You are a professional coach.

Create a detailed weekly training program.

User details:
- Goal: ${goal}
- Event Date: ${eventDate || "Not specified"}
- Using screen/projector: ${hasScreen || "Not specified"}
- Context: ${context || "Not specified"}
- Audience Size: ${audienceSize || "Not specified"}

Return:
1. Weekly schedule (Monday–Sunday)
2. Clear daily breakdown
3. Bullet points
4. Keep it structured and clean
`;

    const completion = await client.chat.completions.create({
      model: "groq/compound-mini",
      messages: [
        { role: "user", content: prompt },
        { role: "system", content: SYSTEM },
      ],
      temperature: 0.7,
    });

    res.json({
      program: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

import GroqClient from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

// Initialize client
const client = new GroqClient({ apiKey: process.env.GROQ_API_KEY });

async function runTest() {
  // The current SDK uses `client.chat.completions.create`
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: "You are a TypeScript tutor." },
      { role: "user", content: "Explain closures in JavaScript in simple terms." }
    ],
    temperature: 0.7,
    max_tokens: 200
  });

  console.log("LLM Response:", response?.choices[0]?.message.content);
}

runTest();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are Nikhilesh's portfolio assistant.

About Nikhilesh:
- B.Tech graduate 
- Skills: Next.js, React, Tailwind CSS, C++, DSA
- Goal: Software Engineer

Question:
${message}
`,
  });

  return Response.json({
    reply: response.text,
  });
}
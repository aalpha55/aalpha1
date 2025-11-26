import { GoogleGenAI } from "@google/genai";

// Initialize the client
// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are FinVantage, a world-class professional financial advisor AI. 
Your goal is to provide clear, prudent, and educational financial insights.
Tone: Professional, empathetic, objective, and data-driven.
Format: Use Markdown for headers, lists, and emphasis to make advice readable.
Disclaimer: Always include a brief disclaimer that you are an AI and this is not binding financial advice.
Do not speculate on highly volatile "pump and dump" assets. Focus on long-term strategy, diversification, and risk management.
`;

export const generateFinancialAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balanced creativity and precision
      }
    });

    return response.text || "I apologize, but I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while analyzing your request. Please try again later.";
  }
};

export const generateMarketSummary = async (): Promise<string> => {
  try {
     const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a brief, fictional but realistic daily market summary for a tech-heavy portfolio. Keep it under 50 words.",
    });
    return response.text || "Market stable.";
  } catch (e) {
    return "Market data currently unavailable.";
  }
}
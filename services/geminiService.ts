
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFitnessAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Iron AI', the virtual assistant of Iron Mind Gym in Kalyani, West Bengal. 
        You are professional, motivating, and high-tech. 
        Provide short, effective workout or nutrition advice. 
        Mention that the user can visit the gym in Kalyani for specialized training.
        Keep answers under 3 sentences.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Try again, athlete!";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "The systems are recalibrating. Please try again later.";
  }
};

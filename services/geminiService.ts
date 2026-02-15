import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY || '';

if (!apiKey) {
  console.warn('Google Gemini API key not configured. Image generation features will be disabled.');
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const MODEL_ID = 'gemini-2.5-flash-image';

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string> => {
  if (!ai) {
    throw new Error('Google Gemini API is not configured');
  }

  try {
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: MODEL_ID,
      contents: {
        parts: [
            { inlineData: { mimeType: 'image/png', data: cleanBase64 } },
            { text: `Edit this image: ${prompt}. Return ONLY the image.` }
        ]
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
        for (const part of parts) {
            if (part.inlineData && part.inlineData.data) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
    }
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    throw error;
  }
};

export const generateSlideImage = async (prompt: string): Promise<string> => {
    if (!ai) {
        throw new Error('Google Gemini API is not configured');
    }

    try {
        const response = await ai.models.generateContent({
            model: MODEL_ID,
            contents: {
                parts: [{ text: `Generate a photorealistic, premium, high-tech medical image: ${prompt}` }]
            }
        });

        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData && part.inlineData.data) {
                    return `data:image/png;base64,${part.inlineData.data}`;
                }
            }
        }
        throw new Error("No image generated");
    } catch (error) {
        console.error("Gemini Generation Error", error);
        throw error;
    }
}
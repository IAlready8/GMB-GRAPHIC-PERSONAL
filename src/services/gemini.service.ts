import { Injectable, signal } from '@angular/core';
import { GoogleGenAI } from '@google/genai';

// This is a placeholder for the environment variable.
// In a real build process, this would be replaced.
declare var process: any;

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private apiKey = signal<string | undefined>(undefined);

  constructor() {
    // Attempt to initialize with API_KEY from environment.
    try {
      // NOTE: process.env.API_KEY is the ONLY way to get the key.
      const key = process.env.API_KEY;
      if (key) {
        this.apiKey.set(key);
        this.ai = new GoogleGenAI({ apiKey: key });
      } else {
        console.error('API_KEY not found. GeminiService will not be available.');
      }
    } catch (e) {
      console.error('Error initializing GeminiService:', e);
    }
  }

  async generateThought(): Promise<string> {
    if (!this.ai) {
      return Promise.reject('API key not configured. Cannot generate thought.');
    }

    try {
      const prompt = 'Generate a short, stark, one-sentence brutalist-style poem about concrete, steel, or raw truth. Unsentimental and direct. No more than 15 words.';
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return response.text.trim();
    } catch (error) {
      console.error('Error generating thought:', error);
      return Promise.reject('Failed to generate thought from the abyss.');
    }
  }
}

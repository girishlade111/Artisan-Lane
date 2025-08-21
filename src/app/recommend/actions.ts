"use server";

import { getCoffeeRecommendation, CoffeeRecommendationOutput } from "@/ai/flows/coffee-recommendation";

export async function getRecommendationAction(tastePreferences: string): Promise<CoffeeRecommendationOutput | { error: string }> {
  if (!tastePreferences || tastePreferences.trim().length < 10) {
    return { error: "Please provide a more detailed description of your taste preferences." };
  }

  try {
    const result = await getCoffeeRecommendation({ tastePreferences });
    return result;
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}

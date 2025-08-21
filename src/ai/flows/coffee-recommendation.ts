'use server';

/**
 * @fileOverview A coffee recommendation AI agent based on taste profile.
 *
 * - getCoffeeRecommendation - A function that provides personalized coffee recommendations.
 * - CoffeeRecommendationInput - The input type for the getCoffeeRecommendation function.
 * - CoffeeRecommendationOutput - The return type for the getCoffeeRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CoffeeRecommendationInputSchema = z.object({
  tastePreferences: z
    .string()
    .describe(
      'A description of the users taste preferences, including flavor profiles, roast preferences, and any specific notes they enjoy or dislike.'
    ),
});
export type CoffeeRecommendationInput = z.infer<typeof CoffeeRecommendationInputSchema>;

const CoffeeRecommendationOutputSchema = z.object({
  coffeeRecommendation: z
    .string()
    .describe('The recommended coffee based on the users taste preferences.'),
  reasoning: z.string().describe('The reasoning behind the coffee recommendation.'),
});
export type CoffeeRecommendationOutput = z.infer<typeof CoffeeRecommendationOutputSchema>;

export async function getCoffeeRecommendation(
  input: CoffeeRecommendationInput
): Promise<CoffeeRecommendationOutput> {
  return coffeeRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'coffeeRecommendationPrompt',
  input: {schema: CoffeeRecommendationInputSchema},
  output: {schema: CoffeeRecommendationOutputSchema},
  prompt: `You are a coffee expert, skilled in recommending coffees based on taste preferences.

  Based on the following taste preferences: {{{tastePreferences}}}

  Recommend a specific coffee and explain your reasoning.`,
});

const coffeeRecommendationFlow = ai.defineFlow(
  {
    name: 'coffeeRecommendationFlow',
    inputSchema: CoffeeRecommendationInputSchema,
    outputSchema: CoffeeRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

// SummarizeDailyOrders flow
'use server';
/**
 * @fileOverview Summarizes daily orders to manage ingredients and stock depletion.
 *
 * - summarizeDailyOrders - A function that summarizes daily orders.
 * - SummarizeDailyOrdersInput - The input type for the summarizeDailyOrders function.
 * - SummarizeDailyOrdersOutput - The return type for the summarizeDailyOrders function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDailyOrdersInputSchema = z.object({
  orders: z.string().describe('A JSON string containing a list of orders, where each order specifies the items and their quantities.'),
});
export type SummarizeDailyOrdersInput = z.infer<typeof SummarizeDailyOrdersInputSchema>;

const SummarizeDailyOrdersOutputSchema = z.object({
  summary: z.string().describe('A summary of the daily orders, including the total quantity of each ingredient needed and any stock depletion issues.'),
});
export type SummarizeDailyOrdersOutput = z.infer<typeof SummarizeDailyOrdersOutputSchema>;

export async function summarizeDailyOrders(input: SummarizeDailyOrdersInput): Promise<SummarizeDailyOrdersOutput> {
  return summarizeDailyOrdersFlow(input);
}

const summarizeDailyOrdersPrompt = ai.definePrompt({
  name: 'summarizeDailyOrdersPrompt',
  input: {schema: SummarizeDailyOrdersInputSchema},
  output: {schema: SummarizeDailyOrdersOutputSchema},
  prompt: `You are an expert supply chain manager for a sweet shop.  You are provided with a list of orders for the day.

  Your task is to summarize the orders in terms of the ingredients needed and any potential stock depletion issues.  Be concise but thorough.

  Orders: {{{orders}}}
  `,
});

const summarizeDailyOrdersFlow = ai.defineFlow(
  {
    name: 'summarizeDailyOrdersFlow',
    inputSchema: SummarizeDailyOrdersInputSchema,
    outputSchema: SummarizeDailyOrdersOutputSchema,
  },
  async input => {
    const {output} = await summarizeDailyOrdersPrompt(input);
    return output!;
  }
);

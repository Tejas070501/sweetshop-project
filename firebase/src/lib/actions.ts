'use server';

import { z } from 'zod';
import { getOrders } from './data';
import { summarizeDailyOrders } from '@/ai/flows/summarize-daily-orders';
import { revalidatePath } from 'next/cache';

const SummarizeSchema = z.object({});

export async function getOrderSummary(prevState: any, formData: FormData) {
  const validatedFields = SummarizeSchema.safeParse({});

  if (!validatedFields.success) {
    return {
      message: 'Invalid input.',
    };
  }
  
  try {
    const orders = await getOrders();
    const ordersJson = JSON.stringify(orders);
    
    const result = await summarizeDailyOrders({ orders: ordersJson });
    
    if (result.summary) {
      revalidatePath('/admin/summary');
      return {
        summary: result.summary,
        message: 'Summary generated successfully.',
      };
    } else {
      return {
        message: 'Failed to generate summary.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating the summary.',
    };
  }
}

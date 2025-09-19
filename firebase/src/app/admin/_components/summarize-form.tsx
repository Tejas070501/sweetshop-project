'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { getOrderSummary } from '@/lib/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const initialState = {
  message: '',
  summary: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
         <Wand2 className="mr-2 h-4 w-4" />
         Generate Summary
        </>
      )}
    </Button>
  );
}

export function SummarizeForm() {
  const [state, formAction] = useFormState(getOrderSummary, initialState);

  return (
    <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
            <form action={formAction}>
                <SubmitButton />
            </form>
        </div>
        {state?.summary && (
            <Card className="md:col-span-3 -order-1 md:order-1">
                <CardHeader>
                    <CardTitle>AI Generated Summary</CardTitle>
                    <CardDescription>Here is the summary of today&apos;s orders.</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                    <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-wrap">
                        {state.summary}
                    </div>
                </CardContent>
            </Card>
        )}
        {state?.message && !state.summary && (
            <p className="md:col-span-2 text-red-500">{state.message}</p>
        )}
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SummarizeForm } from "../_components/summarize-form";

export default function SummaryPage() {
    return (
        <div>
            <h1 className="font-headline text-4xl font-bold mb-6">Daily Order Summary</h1>
            <div className="grid gap-8 md:grid-cols-3">
                <Card className="md:col-span-1">
                    <CardHeader>
                        <CardTitle>Generate Summary</CardTitle>
                        <CardDescription>
                            Use our AI assistant to summarize today&apos;s orders. This will help you understand ingredient needs and potential stock issues.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                       <SummarizeForm />
                    </CardContent>
                </Card>
                <div className="md:col-span-2">
                    {/* The form will render the result here */}
                </div>
            </div>
        </div>
    )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SweetForm } from "../_components/sweet-form";

export default function NewSweetPage() {
  return (
    <div>
        <h1 className="font-headline text-4xl font-bold mb-6">Add New Sweet</h1>
        <Card>
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Fill out the form to add a new sweet to your catalog.</CardDescription>
            </CardHeader>
            <CardContent>
                <SweetForm />
            </CardContent>
        </Card>
    </div>
  )
}

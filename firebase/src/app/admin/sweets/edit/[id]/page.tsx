import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SweetForm } from "../../_components/sweet-form";
import { getSweetById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditSweetPage({ params }: { params: { id: string } }) {
  const sweet = await getSweetById(params.id);

  if (!sweet) {
    notFound();
  }

  return (
    <div>
        <h1 className="font-headline text-4xl font-bold mb-6">Edit Sweet</h1>
        <Card>
            <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Update the details for &quot;{sweet.name}&quot;.</CardDescription>
            </CardHeader>
            <CardContent>
                <SweetForm sweet={sweet} />
            </CardContent>
        </Card>
    </div>
  )
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Package, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-headline text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-6 w-6 text-primary" />
              Manage Sweets
            </CardTitle>
            <CardDescription>
              Add, edit, or remove sweets from your catalog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/admin/sweets">View All Sweets</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/sweets/new">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Daily Summary
            </CardTitle>
            <CardDescription>
              Use AI to generate a summary of daily orders for inventory management.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/summary">Generate Summary</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

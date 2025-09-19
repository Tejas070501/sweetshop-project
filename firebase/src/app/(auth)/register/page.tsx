import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const DiyaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M512 896a415.49 415.49 0 0 1-209.34-58.88a8 8 0 0 1 3.52-15.04c139.46-39.42 273.7-39.42 413.12 0a8 8 0 0 1 3.52 15.04A415.49 415.49 0 0 1 512 896M208 704h608a32 32 0 1 0 0-64H208a32 32 0 1 0 0 64m318.53 96.54a111.49 111.49 0 0 1-29.06-21.82C494.2 775.45 491.55 768 480 768s-14.2 7.45-17.47 10.72a111.49 111.49 0 0 1-29.06 21.82C394 816.58 368 794.62 368 752c0-70.4 57.6-128 128-128h32c70.4 0 128 57.6 128 128c0 42.62-26 64.58-65.47 48.54M512 512c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88s-39.4 88-88 88m0-240c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m-40-72a32 32 0 1 1-64 0a32 32 0 1 1 64 0m144-64a32 32 0 1 1-64 0a32 32 0 1 1 64 0M328 128a32 32 0 1 1-64 0a32 32 0 1 1 64 0"
      ></path>
    </svg>
);


export default function RegisterPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
           <div className="mb-4 flex justify-center">
            <DiyaIcon className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Create an Account</CardTitle>
          <CardDescription>Join the SweetSpot family to save your favorites.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
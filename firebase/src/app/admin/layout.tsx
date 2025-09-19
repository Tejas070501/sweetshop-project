import { Sidebar, SidebarProvider, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Shield, Home, Package, FileText } from "lucide-react";
import Link from "next/link";
import { AdminHeader } from "./_components/admin-header";

const menuItems = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/sweets", label: "Manage Sweets", icon: Package },
    { href: "/admin/summary", label: "Order Summary", icon: FileText },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
            <Sidebar className="border-r">
                <div className="flex h-full flex-col">
                    <div className="flex items-center gap-2 p-4">
                        <Shield className="h-8 w-8 text-primary" />
                        <h1 className="font-headline text-xl font-bold">Admin Panel</h1>
                    </div>
                    <SidebarMenu className="flex-1 p-4">
                        {menuItems.map(item => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href} passHref>
                                    <SidebarMenuButton>
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </div>
            </Sidebar>
            <div className="flex-1">
                <AdminHeader />
                <main className="p-4 md:p-6">{children}</main>
            </div>
        </div>
    </SidebarProvider>
  );
}

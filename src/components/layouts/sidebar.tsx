"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Sidebar = () => {
    const pathname = usePathname();

    const routes = [
        {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname === "/dashboard",
            icon: "📊",
        },
        {
            href: "/dashboard/team",
            label: "Employees",
            active: pathname.startsWith("/dashboard/team"),
            icon: "👥",
        },
        {
            href: "/dashboard/projects",
            label: "Projects",
            active: pathname.startsWith("/dashboard/projects"),
            icon: "📂",
        },
        {
            href: "/dashboard/settings",
            label: "Settings",
            active: pathname === "/dashboard/settings",
            icon: "⚙️",
        },
    ];

    return (
        <div className="mt-3 hidden md:flex h-full w-64 flex-col fixed inset-y-0 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
            <div className="flex flex-col h-full">
                <div className="p-6 pb-2">
                    <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
                </div>

                <ScrollArea className="flex-1 px-3">
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "flex items-center gap-3 py-2 px-4 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground",
                                    route.active
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground"
                                )}
                            >
                                <span className="text-lg">{route.icon}</span>
                                {route.label}
                                {route.active && (
                                    <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                                )}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>

                <div className="p-4 mt-auto">
                    <Separator className="my-4" />
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/avatars/default.png" />
                            <AvatarFallback>US</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">User Name</p>
                            <p className="text-xs text-muted-foreground truncate">user@example.com</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
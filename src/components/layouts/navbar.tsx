"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { cn } from "@/src/lib/utils";


const Navbar = () => {
    const pathname = usePathname();

    const routes = [
        {
            href: "/",
            label: "Home",
            active: pathname === "/",
            icon: "🏠",
        },
        {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname === "/dashboard",
            icon: "📊",
        },
        {
            href: "/settings",
            label: "Settings",
            active: pathname === "/dashboard/settings",
            icon: "⚙️",
        },
    ];

    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-16 items-center px-5">
                {/* Logo */}
                <Link
                    href="/"
                    className="mr-6 flex items-center space-x-2 hover:opacity-80 transition-opacity"
                >
                    <span className="font-bold text-lg bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        TeamSync
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 mx-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-md",
                                route.active
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                            )}
                        >
                            <span className="text-lg">{route.icon}</span>
                            {route.label}
                            {route.active && (
                                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Spacer */}
                <div className="flex-1" />

                <div className="flex items-center justify-end gap-2 ml-auto">
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "h-8 w-8",
                                userButtonPopoverCard: "shadow-lg",
                            },
                        }}
                    />

                    {/* Mobile Menu Button */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-accent/50"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
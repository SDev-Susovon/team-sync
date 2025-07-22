"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/src/lib/utils";


const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;

interface PortalProps {
    children?: React.ReactNode;
    className?: string;
}

const Portal = ({ children, className }: PortalProps) => (
    <DialogPrimitive.Portal>
        <div className={cn("fixed inset-0 z-50 flex", className)}>{children}</div>
    </DialogPrimitive.Portal>
);

const Overlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-all duration-100",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
            className
        )}
        {...props}
    />
));
Overlay.displayName = "Overlay";

const Content = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <Portal>
        <Overlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=closed]:duration-300 data-[state=open]:duration-500",
                className
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </Portal>
));
Content.displayName = "Content";

// Sheet Components
const Sheet = Dialog;
const SheetTrigger = DialogTrigger;

type SheetContentProps = React.ComponentPropsWithoutRef<typeof Content> & {
    side?: "top" | "bottom" | "left" | "right";
};

const SheetContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
    <Content
        ref={ref}
        className={cn(
            "inset-0",
            {
                "top-0 border-b": side === "top",
                "bottom-0 border-t": side === "bottom",
                "left-0 h-full w-3/4 border-r sm:max-w-sm": side === "left",
                "right-0 h-full w-3/4 border-l sm:max-w-sm": side === "right",
            },
            className
        )}
        {...props}
    >
        {children}
    </Content>
));

SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent };
"use client";

import { ReactNode } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-full">
            <Navbar />
            <Sidebar />
            <main className="md:pl-56 pt-16 h-full">{children}</main>
        </div>
    );
};

export default MainLayout;
"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export function Navbar() {
    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
    ];

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50"
        >
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
                <Link href="/" className="font-semibold text-lg tracking-tight hover:text-cinnamon transition-colors text-foreground">
                    Lana Anvar
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-cinnamon dark:hover:text-tea-green transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>
            </div>
        </motion.header>
    );
}

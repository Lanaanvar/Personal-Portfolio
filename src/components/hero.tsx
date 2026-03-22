"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const TERMINAL_LINES = [
    "> initializing ml_environment.sh",
    "> load_models --target NLP --mode inference",
    "> [SUCCESS] Model weights loaded successfully",
    "> optimizing inference speed...",
    "> [OK] Latency reduced by 40%",
    "> ready to build.",
];

export function Hero() {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < TERMINAL_LINES.length) {
            const timer = setTimeout(() => {
                setLines((prev) => [...prev, TERMINAL_LINES[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, Math.random() * 500 + 400); // Random delay between 400ms to 900ms
            return () => clearTimeout(timer);
        } else {
            // Loop the terminal lines after a pause
            const resetTimer = setTimeout(() => {
                setLines([]);
                setCurrentIndex(0);
            }, 5000);
            return () => clearTimeout(resetTimer);
        }
    }, [currentIndex]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6"
            >
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                        Lana Anvar
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground/80">
                        Machine Learning Engineer
                    </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-[42rem] leading-relaxed">
                    Building and deploying scalable ML solutions with a focus on NLP, LLMs, and efficient inference architecture.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                        href="#projects"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-ebony dark:bg-tea-green px-6 text-sm font-medium text-white dark:text-ebony transition-colors hover:bg-ebony/90 dark:hover:bg-tea-green/90 gap-2 group shadow-sm"
                    >
                        View Projects
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex gap-2">
                        <Link
                            href="https://github.com/lana-anvar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:border-cinnamon hover:text-cinnamon dark:hover:border-tea-green dark:hover:text-tea-green text-muted-foreground"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/lana-anvar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:border-cinnamon hover:text-cinnamon dark:hover:border-tea-green dark:hover:text-tea-green text-muted-foreground"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background transition-colors hover:border-cinnamon hover:text-cinnamon dark:hover:border-tea-green dark:hover:text-tea-green text-muted-foreground"
                            aria-label="Resume"
                        >
                            <FileText className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Animated Terminal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg border border-border bg-zinc-950/5 dark:bg-zinc-950/50 overflow-hidden shadow-sm"
            >
                <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-cinnamon/80" />
                        <div className="h-3 w-3 rounded-full bg-tea-green/80" />
                        <div className="h-3 w-3 rounded-full bg-muted-teal/80" />
                    </div>
                    <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
                        <Terminal className="h-3 w-3" />
                        <span>lana@portfolio:~</span>
                    </div>
                </div>
                <div className="p-4 sm:p-6 font-mono text-sm sm:text-base h-[200px] sm:h-[240px] flex flex-col gap-2 overflow-y-auto w-full">
                    <AnimatePresence mode="popLayout">
                        {lines.map((line, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className={
                                    line.includes("SUCCESS") || line.includes("OK")
                                        ? "text-tea-green dark:text-tea-green/90"
                                        : line.includes("error")
                                            ? "text-cinnamon dark:text-cinnamon/90"
                                            : "text-slate-grey dark:text-slate-grey/90"
                                }
                            >
                                {line}
                            </motion.div>
                        ))}
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2.5 h-5 bg-foreground/70 align-middle ml-1"
                        />
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

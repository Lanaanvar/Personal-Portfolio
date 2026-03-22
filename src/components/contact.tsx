"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <div className="flex flex-col items-center text-center gap-8 py-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-md"
            >
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch.</h2>
                <p className="text-muted-foreground text-lg">
                    I'm currently exploring new opportunities in applied machine learning. Whether you have a question or just want to connect, my inbox is always open.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    href="mailto:lana.anvar03@gmail.com"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cinnamon px-8 text-sm font-medium text-white transition-colors hover:bg-cinnamon/90 shadow-sm"
                >
                    <Mail className="h-4 w-4" />
                    Say Hello
                </Link>
                <div className="flex gap-4 justify-center">
                    <Link
                        href="https://github.com/Lanaanvar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background transition-colors hover:border-cinnamon hover:text-cinnamon dark:hover:border-tea-green dark:hover:text-tea-green text-muted-foreground"
                        aria-label="GitHub Profile"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/lana-anvar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border bg-background transition-colors hover:border-cinnamon hover:text-cinnamon dark:hover:border-tea-green dark:hover:text-tea-green text-muted-foreground"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

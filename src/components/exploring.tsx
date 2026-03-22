"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const TOPICS = [
    {
        title: "Long-Horizon Temporal Crowd Modeling",
        description: "Studying sequence models for detecting gradual behavioral shifts in dense crowds. Focused on modeling minute-scale evolution (not short clips) for early instability detection and real-world deployment constraints.",
    },
    {
        title: "Agentic AI & Deterministic Automation Systems",
        description: "Designing tool-augmented AI systems that combine reasoning models with structured workflows (APIs, rule engines, automation frameworks) for reliable multi-step task execution.",
    },
    // {
    //     title: "Agents and Tool Use",
    //     description: "Building autonomous systems that combine reasoning LLMs with deterministic tools to accomplish multi-step goals reliably.",
    // },
];

export function Exploring() {
    return (
        <div className="flex flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2">Currently Exploring.</h2>
                <p className="text-lg text-muted-foreground">
                    Areas of active research and self-study.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
                {TOPICS.map((topic, idx) => (
                    <motion.div
                        key={topic.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background/50 hover:bg-muted/30 transition-colors"
                    >
                        <div className="mt-1 h-8 w-8 rounded-lg bg-muted flex flex-shrink-0 items-center justify-center">
                            <Compass className="h-4 w-4 text-slate-grey" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground tracking-tight mb-1">
                                {topic.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {topic.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

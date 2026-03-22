"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Braces, Rocket } from "lucide-react";

export function About() {
    const focuses = [
        {
            icon: <BrainCircuit className="h-5 w-5 text-cinnamon" />,
            title: "Applied Machine Learning",
            description: "Translating research into practical, scalable solutions that solve real-world problems.",
        },
        {
            icon: <Braces className="h-5 w-5 text-muted-teal" />,
            title: "NLP & LLMs",
            description: "Building resilient natural language pipelines, from text generation to complex information extraction.",
        },
        {
            icon: <Rocket className="h-5 w-5 text-slate-grey" />,
            title: "Deployment Mindset",
            description: "Optimizing models for inference speed, maintaining high availability, and managing infrastructure.",
        },
    ];

    return (
        <div className="flex flex-col gap-8 sm:gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-6 text-foreground">
                    About.
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                    <p>
                        With a strong foundation in Python, I specialize in developing end-to-end applications that leverage modern AI. My toolkit includes Scikit-learn and LLMs for intelligent processing, paired with a deep interest in Computer Vision and NLP.
                    </p>
                    <p className="mt-4">
                        From deploying serverless architectures via GitHub Actions to architecting local automation hubs with n8n, I enjoy the challenge of streamlining the "behind-the-scenes" of technology. Whether I’m scraping web data or fine-tuning models in PyTorch, my goal is always the same: building tools that are as robust as they are intelligent.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {focuses.map((focus, idx) => (
                    <motion.div
                        key={focus.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex flex-col gap-3 p-5 rounded-xl border border-border/50 bg-background hover:bg-muted/30 transition-colors"
                    >
                        <div className="h-10 w-10 rounded-lg bg-muted/50 flex items-center justify-center">
                            {focus.icon}
                        </div>
                        <h3 className="font-semibold text-foreground tracking-tight">{focus.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {focus.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

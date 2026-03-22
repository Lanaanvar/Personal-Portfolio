"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// Placeholder data since exact details are to be provided
const PROJECTS = [
    {
        id: "sahaayi",
        title: "Sahaayi",
        shortDescription: "A machine learning based assistive tool.",
        fullDescription: "Sahaayi is an assistive technology project focused on making interactions more accessible using machine learning and NLP. Detail placeholders to be expanded upon provided info.",
        tags: ["NLP", "Python", "Transformers"],
        github: "#",
        link: "#",
    },
    {
        id: "asag",
        title: "ASAG",
        shortDescription: "Automated Short Answer Grading system.",
        fullDescription: "An advanced NLP system designed to automatically evaluate and grade short text answers using semantic similarity and vector embeddings.",
        tags: ["NLP", "LLMs", "Embeddings"],
        github: "#",
    },
    {
        id: "evaluator",
        title: "Handwritten Answersheet Evaluator",
        shortDescription: "CV-powered tool to parse and grade handwritten responses.",
        fullDescription: "Combines Computer Vision (OCR) and NLP to digitize handwritten answers, align them with marking rubrics, and provide automated evaluations.",
        tags: ["Computer Vision", "OCR", "Pytorch", "NLP"],
        github: "#",
    },
    {
        id: "aura",
        title: "A.U.R.A Stress Visualizer",
        shortDescription: "Application to analyze the emotional and mental state of users based on their textual input",
        fullDescription: "Leverage advanced natural language processing (NLP) techniques to detect emotions, analyze sentiment, and generate contextually relevant advice, thereby offering a comprehensive and user-friendly tool for mental health support",
        tags: ["FastAPI", "Pydantic", "Transformers"],
        github: "#",
    },
];

export function Projects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="flex flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2">Projects.</h2>
                <p className="text-lg text-muted-foreground">
                    A selection of my recent work in ML, NLP, and Computer Vision.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
                {PROJECTS.map((project, idx) => {
                    const isExpanded = expandedId === project.id;

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-col rounded-xl border border-border/50 bg-background overflow-hidden hover:border-border transition-colors group"
                        >
                            <div
                                className="p-5 sm:p-6 cursor-pointer flex flex-col h-full"
                                onClick={() => toggleExpand(project.id)}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-semibold text-lg tracking-tight group-hover:text-cinnamon dark:group-hover:text-tea-green transition-colors">
                                        {project.title}
                                    </h3>
                                    <button
                                        className="p-1 rounded-md hover:bg-muted text-muted-foreground transition-colors group-hover:text-cinnamon dark:group-hover:text-tea-green"
                                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                                    >
                                        <ChevronDown className={clsx("h-4 w-4 transition-transform duration-200", isExpanded && "rotate-180")} />
                                    </button>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                    {project.shortDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-md bg-cinnamon/10 dark:bg-muted-teal/20 border border-cinnamon/20 dark:border-muted-teal/30 px-2 py-1 text-xs font-medium text-cinnamon dark:text-tea-green"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-border/50 mt-2">
                                            <p className="text-sm text-foreground/90 mt-4 leading-relaxed">
                                                {project.fullDescription}
                                            </p>
                                            <div className="flex gap-4 mt-6">
                                                {project.github && (
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-cinnamon dark:hover:text-tea-green transition-colors"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        Source
                                                    </Link>
                                                )}
                                                {project.link && (
                                                    <Link
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-cinnamon dark:hover:text-tea-green transition-colors"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Live Demo
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

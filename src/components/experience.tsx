"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

// Placeholder timeline data since details will be provided later
const EXPERIENCES = [
    {
        company: "Mykare Health",
        role: "Machine Learning Intern",
        period: "Month Year - Month Year",
        location: "Location / Remote",
        description: "Brief placeholder description about the responsibilities and achievements during the time at Mykare Health.",
    },
    {
        company: "IIST",
        role: "Research Intern",
        period: "Month Year - Month Year",
        location: "Location",
        description: "Brief placeholder description about the research focus, projects, and findings at Indian Institute of Space Science and Technology.",
    },
    {
        company: "Astrek Innovations",
        role: "Intern",
        period: "Month Year - Month Year",
        location: "Location",
        description: "Brief placeholder description about the engineering tasks, tools used, and contributions at Astrek Innovations.",
    },
];

export function Experience() {
    return (
        <div className="flex flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2">Experience.</h2>
                <p className="text-lg text-muted-foreground">
                    My professional journey.
                </p>
            </motion.div>

            <div className="relative border-l border-border/60 ml-3 sm:ml-4 space-y-12 pb-4 pt-2">
                {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative pl-8 sm:pl-10"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cinnamon dark:bg-muted-teal ring-4 ring-background" />

                        <div className="flex flex-col gap-1.5 p-5 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 transition-colors shadow-sm relative overflow-hidden">
                            <h3 className="text-xl font-semibold text-foreground tracking-tight">
                                {exp.role}
                            </h3>
                            <div className="text-lg font-medium text-muted-foreground">
                                {exp.company}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm mt-1 text-muted-foreground/80 mb-3">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {exp.period}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {exp.location}
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

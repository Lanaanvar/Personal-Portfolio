"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
    {
        title: "Machine Learning (ML)",
        items: ["Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Transformers", "Deep Learning", "Scikit-Learn", "XGBoost"],
    },
    {
        title: "Computer Vision (CV)",
        items: ["Object Detection", "Image Classification", "OCR (Optical Character Recognition)", "OpenCV", "PyTorch"],
    },
    {
        title: "Backend & Deployment",
        items: ["Python", "TensorRT", "ONNX", "REST APIs", "FastAPI", "Docker", "Model Inference Optimization"],
    },
    {
        title: "Tools & Libraries",
        items: ["Git", "Linux", "Hugging Face", "Pandas", "NumPy", "Jupyter"],
    },
];

export function Skills() {
    return (
        <div className="flex flex-col gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2">Skills.</h2>
                <p className="text-lg text-muted-foreground">
                    Technologies and domains I specialize in.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex flex-col gap-4 p-5 sm:p-6 rounded-xl border border-border/50 bg-background"
                    >
                        <h3 className="font-semibold text-foreground tracking-tight border-b border-border/50 pb-3 group-hover:text-muted-teal transition-colors">
                            {category.title}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <li
                                    key={item}
                                    className="inline-flex items-center rounded-md bg-cinnamon/5 dark:bg-muted-teal/10 border border-cinnamon/10 dark:border-muted-teal/20 px-2.5 py-1 text-sm font-medium text-ebony dark:text-tea-green transition-colors hover:text-cinnamon dark:hover:text-tea-green hover:bg-cinnamon/10 dark:hover:bg-muted-teal/30"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

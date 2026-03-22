import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background py-8 text-center sm:py-12">
            <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Lana Anvar. Built with Next.js & Tailwind CSS.
                </p>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/lana-anvar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://linkedin.com/in/lana-anvar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href="mailto:lana.anvar@example.com"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}

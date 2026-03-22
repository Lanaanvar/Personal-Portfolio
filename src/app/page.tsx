import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 transition-all duration-300"
  >
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col justify-between">
      {/* Header Layout */}
      <header className="flex justify-between items-start font-mono text-sm md:text-base">
        <div>
          <h1 className="font-semibold text-foreground tracking-tight">lana anvar</h1>
          <p className="text-muted-foreground mt-1 opacity-80">machine learning engineer</p>
        </div>
        <nav className="flex flex-col items-end gap-3 md:gap-4">
          <a
            href="https://www.linkedin.com/in/lana-anvar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cinnamon dark:hover:text-muted-teal transition-colors inline-flex items-center group"
          >
            linkedin <ArrowIcon />
          </a>
          <a
            href="https://substack.com/@lanaanvar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-grey dark:hover:text-muted-teal transition-colors inline-flex items-center group"
          >
            newsletter <ArrowIcon />
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="max-w-2xl mt-40 mb-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
          hey, i'm lana.
        </h2>
        <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground mb-6 font-dm">
          learn. organize. build.
        </p>
        <p className="text-lg md:text-xl leading-relaxed opacity-80 font-dm">
          {/* i'm a machine learning engineer with a passion for building intelligent systems. */}
          i specialize in natural language processing and large language model deployment, but i'm always learning new things.
        </p>
      </main>

      {/* Footer & "Now" Layout */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 font-mono text-sm md:text-base">
        <div className="border-t border-border pt-6">
          <h3 className="text-muted-foreground mb-6 font-semibold uppercase tracking-widest text-xs">now</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center group">
              <span className="group-hover:text-cinnamon transition-colors">researching</span>
              <span className="text-muted-foreground text-right">crowd anomaly detection</span>
            </li>
            <li className="flex justify-between items-center group">
              <span className="group-hover:text-cinnamon transition-colors">reading</span>
              <span className="text-muted-foreground text-right">"the vegetarian"</span>
            </li>
            <li className="flex justify-between items-center group">
              <span className="group-hover:text-cinnamon transition-colors">location</span>
              <span className="text-muted-foreground text-right">kochi, kerala</span>
            </li>
          </ul>
        </div>

        {/* Desktop Copyright */}
        <div className="border-t border-border pt-6 flex-col justify-end text-right hidden md:flex">
          <p className="text-muted-foreground opacity-70">
            © {new Date().getFullYear()} lana anvar. <br /> built with minimalism.
          </p>
        </div>

        {/* Mobile Copyright */}
        <div className="md:hidden pt-8 flex flex-col justify-between">
          <p className="text-muted-foreground opacity-70 border-t border-border pt-6 text-center">
            © {new Date().getFullYear()} lana anvar.
          </p>
        </div>
      </footer>
    </div>
  );
}

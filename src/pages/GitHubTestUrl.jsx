import { motion } from "framer-motion";

export default function GitHubTestUrl() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Subtle pulse line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <h1 className="font-display text-foreground text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight select-none">
        GitHub Test URL
      </h1>
    </div>
  );
}
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // 👈 ADD THIS IMPORT
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";

export default function P3() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    base44.entities.TestData.list().then(setRecords);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <Link
        to="/"
        className="absolute top-6 right-6 font-mono text-sm text-muted-foreground border border-border px-4 py-2 hover:border-green-500 hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
      >
        ← Back
      </Link>

      <h1 className="font-display text-green-500 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight select-none mb-12">
        GitHub Test URL
      </h1>

      <div className="w-full max-w-md space-y-3">
        {records.map((record) => (
          <div
            key={record.id}
            className="border border-border bg-card rounded-md px-5 py-3 flex justify-between items-center font-mono text-sm"
          >
            <span className="text-green-500">{record.unique_id}</span>
            <span className="text-foreground">{record.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

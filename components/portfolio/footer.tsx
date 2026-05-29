"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="text-lg italic text-muted-foreground mb-6">
            &ldquo;Clean data, clear insights — one row at a time.&rdquo;
          </blockquote>
          <p className="text-sm text-muted-foreground">
            — Santhosh Kumar U
          </p>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Santhosh Kumar U. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

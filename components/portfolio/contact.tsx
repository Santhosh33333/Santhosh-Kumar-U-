"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Open to Data Analyst, FinOps, AI/ML Operations, and IT Administration roles. 
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://linkedin.com/in/santhosh-kumar-u-22a3971b4"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="mailto:santhoshkrishna958@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-card transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send an Email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground italic text-lg">
            &quot;Clean data, clear insights — one row at a time.&quot;
          </p>
          <p className="text-center text-muted-foreground/60 mt-2 text-sm">
            — Santhosh Kumar U
          </p>
        </motion.div>
      </div>
    </section>
  );
}

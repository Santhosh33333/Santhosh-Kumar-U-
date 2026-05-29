"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "1+", label: "Year Experience" },
    { value: "YUBI", label: "Current Company" },
    { value: "FinOps", label: "Domain Focus" },
    { value: "Python", label: "Primary Tool" },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left column - Text */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Transforming raw data into{" "}
              <span className="text-primary">actionable insights</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m a Data Analyst at Yuverse (YUBI Group), where I specialize in 
                bank statement analysis, anomaly detection, and HITL AI validation 
                for FinOps operations.
              </p>
              <p>
                My background combines IT administration with data analytics, giving 
                me a unique perspective on building robust, automated data pipelines 
                that drive business decisions.
              </p>
              <p>
                I believe in clean data, clear insights, and the power of automation 
                to transform how organizations understand their financial operations.
              </p>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm tracking-wide uppercase mb-8 block"
        >
          About
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed">
            I specialize in transforming complex financial data into actionable insights 
            through <span className="text-muted-foreground">bank statement analysis</span>, {" "}
            <span className="text-muted-foreground">anomaly detection</span>, and{" "}
            <span className="text-muted-foreground">HITL AI validation</span>.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            With a background in IT administration and system management, I bring a unique 
            perspective to data operations - combining technical infrastructure knowledge 
            with analytical precision to build robust, automated data pipelines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { label: "Domain", value: "FinOps" },
            { label: "Focus", value: "Data Quality" },
            { label: "Tools", value: "Python, SQL" },
            { label: "Location", value: "Chennai" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                {item.label}
              </p>
              <p className="text-foreground font-medium">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

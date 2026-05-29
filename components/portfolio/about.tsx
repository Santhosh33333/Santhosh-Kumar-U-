"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-sm font-mono text-primary mb-8 tracking-wide">
          ABOUT
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I&apos;m a Data Analyst at{" "}
              <span className="text-primary font-medium">
                Yuverse (YUBI Group)
              </span>
              , where I specialize in human-in-the-loop AI validation for
              financial operations. My work sits at the intersection of data
              quality, credit risk assessment, and automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a background in IT administration and network management, I
              bring a unique perspective to data operations—understanding both
              the technical infrastructure and the analytical workflows that
              drive business decisions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm text-muted-foreground mb-1">Current Role</p>
              <p className="text-foreground">Data Analyst — HITL AI Validation</p>
            </div>
            <div className="border-l-2 border-border pl-4">
              <p className="text-sm text-muted-foreground mb-1">Focus Areas</p>
              <p className="text-foreground">
                FinOps · Bank Statement Analysis · Python Automation
              </p>
            </div>
            <div className="border-l-2 border-border pl-4">
              <p className="text-sm text-muted-foreground mb-1">Languages</p>
              <p className="text-foreground">Tamil · English</p>
            </div>
            <div className="border-l-2 border-border pl-4">
              <p className="text-sm text-muted-foreground mb-1">Fun Fact</p>
              <p className="text-foreground italic">
                I catch anomalies faster than coffee brews ☕
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

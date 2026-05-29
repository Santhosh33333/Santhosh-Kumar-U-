"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const learningAreas = [
  {
    category: "Data Analysis",
    items: ["Advanced SQL", "Pandas", "NumPy", "Data Storytelling"],
  },
  {
    category: "AI & Automation",
    items: ["HITL Frameworks", "Python Scripting", "Workflow Automation"],
  },
  {
    category: "Cloud",
    items: ["Google Cloud Fundamentals", "Cloud Storage", "BigQuery"],
  },
  {
    category: "BI & Analytics",
    items: ["Dashboard Design", "Business Intelligence", "Power BI"],
  },
];

export function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          CURRENTLY LEARNING
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background rounded-xl border border-border p-6 font-mono text-sm"
        >
          <pre className="text-muted-foreground overflow-x-auto">
            <code>
              <span className="text-primary">currently_learning</span>
              <span className="text-foreground">{" = {"}</span>
              {"\n"}
              {learningAreas.map((area, index) => (
                <span key={area.category}>
                  {"    "}
                  <span className="text-accent">{`"${area.category}"`}</span>
                  <span className="text-foreground">: [</span>
                  {area.items.map((item, itemIndex) => (
                    <span key={item}>
                      <span className="text-green-400">{`"${item}"`}</span>
                      {itemIndex < area.items.length - 1 && (
                        <span className="text-foreground">, </span>
                      )}
                    </span>
                  ))}
                  <span className="text-foreground">]</span>
                  {index < learningAreas.length - 1 && (
                    <span className="text-foreground">,</span>
                  )}
                  {"\n"}
                </span>
              ))}
              <span className="text-foreground">{"}"}</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

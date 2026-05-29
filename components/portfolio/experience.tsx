"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    role: "Data Analyst",
    company: "Yuverse (YUBI Group)",
    description: "Bank statement analysis and HITL AI validation for credit risk operations. Building Python automation for data quality pipelines.",
    highlights: ["Anomaly Detection", "HITL AI", "Python", "Excel"],
    current: true,
  },
  {
    period: "2024 - 2025",
    role: "IT Administrator",
    company: "Srimukha Precision Technology",
    description: "Managed network infrastructure including pfSense firewall, VPN, and system administration. Reduced incident resolution time by 20%.",
    highlights: ["pfSense", "Network", "Linux", "Windows"],
    current: false,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm tracking-wide uppercase mb-8 block"
        >
          Experience
        </motion.span>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group py-8 border-b border-border last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-32 shrink-0">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-medium text-foreground flex items-center gap-2">
                        {exp.role}
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">
                            Current
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

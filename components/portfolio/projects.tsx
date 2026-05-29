"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bank Statement Analyzer",
    description: "Automated high-volume transaction anomaly detection for credit risk teams. Processes thousands of statements to identify irregularities.",
    tags: ["Python", "Pandas", "SQL"],
    year: "2025",
  },
  {
    title: "HITL AI Validation Pipeline",
    description: "Human-in-the-loop AI review system ensuring output accuracy in FinOps. Validates AI-generated insights for quality assurance.",
    tags: ["Python", "Excel", "JIRA"],
    year: "2025",
  },
  {
    title: "Network Infrastructure Redesign",
    description: "End-to-end network overhaul achieving 20% faster incident resolution. Implemented robust firewall rules and monitoring.",
    tags: ["pfSense", "VPN", "DNS"],
    year: "2024",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm tracking-wide uppercase mb-8 block"
        >
          Projects
        </motion.span>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group py-8 border-b border-border last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-20 shrink-0">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-medium text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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

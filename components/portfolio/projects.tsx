"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Bot, Globe } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Bank Statement Analyzer",
    tech: "Python · Pandas · Excel · SQL",
    description:
      "Automated high-volume transaction anomaly detection for credit risk teams. Processes thousands of bank statements to identify irregularities and support underwriting decisions.",
  },
  {
    icon: Bot,
    title: "HITL AI Validation Pipeline",
    tech: "Python · Excel · JIRA",
    description:
      "Human-in-the-loop AI review system ensuring output accuracy in FinOps. Validates AI-generated insights against ground truth data for quality assurance.",
  },
  {
    icon: Globe,
    title: "Network Infrastructure Overhaul",
    tech: "pfSense · VPN · DHCP · DNS",
    description:
      "End-to-end network redesign achieving 20% faster incident resolution. Implemented robust firewall rules, VPN access, and network monitoring systems.",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          FEATURED PROJECTS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <project.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-primary mb-3">{project.tech}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

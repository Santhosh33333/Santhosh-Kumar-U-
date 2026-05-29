"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Bot, Globe, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Bank Statement Analyzer",
    tech: ["Python", "Pandas", "Excel", "SQL"],
    description:
      "Automated high-volume transaction anomaly detection for credit risk teams. Processes thousands of bank statements to identify irregularities and support underwriting decisions.",
    highlight: "High-Volume Data Processing",
  },
  {
    icon: Bot,
    title: "HITL AI Validation Pipeline",
    tech: ["Python", "Excel", "JIRA"],
    description:
      "Human-in-the-loop AI review system ensuring output accuracy in FinOps. Validates AI-generated insights against ground truth data for quality assurance.",
    highlight: "AI Quality Assurance",
  },
  {
    icon: Globe,
    title: "Network Infrastructure Overhaul",
    tech: ["pfSense", "VPN", "DHCP", "DNS"],
    description:
      "End-to-end network redesign achieving 20% faster incident resolution. Implemented robust firewall rules, VPN access, and network monitoring systems.",
    highlight: "20% Faster Resolution",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full w-fit mb-4">
                {project.highlight}
              </span>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

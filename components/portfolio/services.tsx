"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Bot, Code2, Network, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bank Statement Analysis",
    description: "Credit risk assessment, anomaly & fraud detection, cash-flow trend analysis for underwriting teams.",
    tags: ["Risk Analysis", "Fraud Detection", "Credit Ops"],
  },
  {
    icon: Bot,
    title: "HITL AI Validation",
    description: "Human-in-the-loop AI output verification ensuring data quality and accuracy in FinOps pipelines.",
    tags: ["AI Review", "Data Quality", "Validation"],
  },
  {
    icon: Code2,
    title: "Python Automation",
    description: "Building automated data pipelines, Excel processing, and report generation systems.",
    tags: ["Python", "Pandas", "Automation"],
  },
  {
    icon: Network,
    title: "IT & Networking",
    description: "Former IT Administrator with expertise in pfSense, VPN, LAN/WAN, and system administration.",
    tags: ["pfSense", "VPN", "Linux"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Core Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
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

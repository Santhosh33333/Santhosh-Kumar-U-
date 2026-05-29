"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Bot, Code2, Globe } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bank Statement Analysis",
    description: "Credit risk assessment, anomaly & fraud detection, cash-flow trend analysis for underwriting teams.",
  },
  {
    icon: Bot,
    title: "HITL AI Validation",
    description: "AI output verification, data quality control, ensuring accuracy in FinOps pipelines.",
  },
  {
    icon: Code2,
    title: "Python Automation",
    description: "Excel & data pipelines, process optimization, report automation for efficiency gains.",
  },
  {
    icon: Globe,
    title: "IT & Networking",
    description: "pfSense firewall, VPN/NAT/DHCP configuration, Windows/Linux/macOS support.",
  },
];

export function WhatIDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          WHAT I DO
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

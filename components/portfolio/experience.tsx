"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "Jul 2025 → Present",
    role: "Data Analyst",
    subtitle: "Bank Statement Analysis & HITL AI Validation",
    company: "Yuverse (YUBI Group)",
    location: "Chennai",
    current: true,
    highlights: [
      "Anomaly detection on high-volume banking transaction data",
      "HITL AI validation ensuring FinOps data accuracy",
      "Python & Excel automation for data quality pipelines",
      "Credit risk reporting for underwriting & credit teams",
    ],
  },
  {
    period: "2024 → Jun 2025",
    role: "IT Administrator & IT Support",
    subtitle: "Assistant Manager",
    company: "Srimukha Precision Technology Pvt. Ltd",
    location: "Chennai",
    current: false,
    highlights: [
      "Managed pfSense firewall · VPN · NAT · DHCP · DNS",
      "Reduced incident resolution time by 20% via SOP redesign",
      "Configured LAN/WLAN switches & optimized network uptime",
      "Windows OS support · Linux administration · Outlook backup",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          EXPERIENCE
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative md:pl-8"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-1/2 hidden md:block ${
                    exp.current ? "bg-primary" : "bg-muted-foreground"
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">
                      {exp.role}
                      {exp.current && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p className="text-foreground">{exp.company}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5">✦</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

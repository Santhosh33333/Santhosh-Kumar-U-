"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Jul 2025 - Present",
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
    period: "2024 - Jun 2025",
    role: "IT Administrator & IT Support",
    subtitle: "Assistant Manager",
    company: "Srimukha Precision Technology Pvt. Ltd",
    location: "Chennai",
    current: false,
    highlights: [
      "Managed pfSense firewall, VPN, NAT, DHCP, DNS",
      "Reduced incident resolution time by 20% via SOP redesign",
      "Configured LAN/WLAN switches & optimized network uptime",
      "Windows OS support, Linux administration, Outlook backup",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
                className="relative lg:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-5 h-5 rounded-full border-4 border-background hidden lg:flex items-center justify-center ${
                    exp.current ? "bg-primary" : "bg-muted"
                  }`}
                >
                  {exp.current && <div className="w-2 h-2 bg-background rounded-full" />}
                </div>

                <div className="p-6 md:p-8 bg-background border border-border rounded-2xl hover:border-primary/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg lg:hidden">
                          <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground">{exp.subtitle}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-foreground font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

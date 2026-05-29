"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Query",
    skills: ["Python", "SQL", "Bash"],
  },
  {
    title: "Data & Automation",
    skills: ["Excel", "Pandas", "NumPy", "Google Sheets"],
  },
  {
    title: "IT & Networking",
    skills: ["pfSense", "Linux", "Windows", "VPN/NAT/DHCP"],
  },
  {
    title: "Tools & Platforms",
    skills: ["JIRA", "Spiceworks", "MS Office", "Google Workspace"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group flex items-center gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all cursor-default"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

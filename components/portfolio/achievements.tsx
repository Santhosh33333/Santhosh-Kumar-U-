"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Wifi, Zap, Bot, BarChart3 } from "lucide-react";

const achievements = [
  {
    icon: Award,
    text: "Recognized at Yuverse (YUBI Group) for speed & accuracy in financial data analysis",
  },
  {
    icon: Wifi,
    text: "Maintained high network uptime — zero downtime operations at Srimukha Precision",
  },
  {
    icon: Zap,
    text: "20% faster IT incident resolution via SOP-driven process redesign",
  },
  {
    icon: Bot,
    text: "Selected as HITL AI Specialist — human judgement meets AI in FinOps pipelines",
  },
  {
    icon: BarChart3,
    text: "Processed & validated large-scale banking datasets for credit underwriting teams",
  },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          ACHIEVEMENTS & RECOGNITION
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              <achievement.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground text-sm leading-relaxed">
                {achievement.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

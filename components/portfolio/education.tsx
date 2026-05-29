"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "BBA",
    institution: "Alagappa University",
    period: "In Progress",
    score: null,
  },
  {
    degree: "Diploma in EEE",
    institution: "Vivekananda Polytechnic College",
    period: "2021",
    score: "79%",
  },
];

const certifications = [
  { name: "Manual Software Testing", status: "Completed" },
  { name: "Data Analysis", status: "In Progress" },
];

const skills = [
  "Python", "SQL", "Bash", "Excel", "Pandas", "NumPy",
  "pfSense", "Linux", "Windows", "VPN/NAT/DHCP",
  "JIRA", "Google Workspace", "MS Office"
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-muted-foreground text-sm tracking-wide uppercase mb-6 block">
              Education
            </span>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-foreground font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.period} {edu.score && `| ${edu.score}`}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-muted-foreground text-sm tracking-wide uppercase mb-6 block">
              Certifications
            </span>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="text-foreground font-medium">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.status}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-muted-foreground text-sm tracking-wide uppercase mb-6 block">
              Skills
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

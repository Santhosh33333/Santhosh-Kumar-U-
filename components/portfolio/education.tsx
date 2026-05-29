"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CheckCircle2, Clock } from "lucide-react";

const education = [
  {
    degree: "BBA",
    institution: "Alagappa University",
    year: "In Progress",
    score: null,
    inProgress: true,
  },
  {
    degree: "Diploma in EEE",
    institution: "Vivekananda Polytechnic College (DOTE)",
    year: "2021",
    score: "79%",
    inProgress: false,
  },
];

const certifications = [
  {
    name: "Manual Software Testing",
    status: "Completed",
    completed: true,
  },
  {
    name: "Data Analysis",
    status: "In Progress",
    completed: false,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -translate-x-[7px]" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      {edu.score && (
                        <p className="text-sm font-semibold text-primary">{edu.score}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-background border border-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <span className="font-medium text-foreground">{cert.name}</span>
                  <span
                    className={`flex items-center gap-2 text-sm font-medium ${
                      cert.completed ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {cert.completed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

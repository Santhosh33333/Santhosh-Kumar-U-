"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, CheckCircle2, Clock } from "lucide-react";

const education = [
  {
    degree: "BBA",
    institution: "Alagappa University",
    year: "In Progress",
    score: "—",
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
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-12 tracking-wide"
        >
          EDUCATION & CERTIFICATIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      {!edu.inProgress && (
                        <p className="text-sm font-medium text-primary">
                          {edu.score}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 bg-card rounded-lg border border-border flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{cert.name}</span>
                  <span
                    className={`flex items-center gap-1.5 text-sm ${
                      cert.completed
                        ? "text-green-400"
                        : "text-muted-foreground"
                    }`}
                  >
                    {cert.completed ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

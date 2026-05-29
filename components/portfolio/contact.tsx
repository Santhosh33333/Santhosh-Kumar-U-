"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-primary mb-8 tracking-wide"
        >
          GET IN TOUCH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl text-foreground mb-4"
        >
          Let&apos;s work together
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-8 max-w-lg mx-auto"
        >
          Open to Data Analyst, FinOps, AI/ML Operations, and IT Administration
          roles. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg">
            <a
              href="https://linkedin.com/in/santhosh-kumar-u-22a3971b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:santhoshkrishna958@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              santhoshkrishna958@gmail.com
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

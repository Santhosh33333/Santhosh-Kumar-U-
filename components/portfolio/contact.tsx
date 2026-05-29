"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { LOOKING_FOR_JOB, PROFILE } from "@/lib/config";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm tracking-wide uppercase mb-8 block"
        >
          Contact
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
            {LOOKING_FOR_JOB ? (
              <>
                Looking for new opportunities.{" "}
                <span className="text-muted-foreground">Let&apos;s connect and discuss how I can contribute to your team.</span>
              </>
            ) : (
              <>
                Want to collaborate or just say hi?{" "}
                <span className="text-muted-foreground">Feel free to reach out anytime.</span>
              </>
            )}
          </h2>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded hover:bg-foreground/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
            {LOOKING_FOR_JOB && (
              <Link
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded hover:bg-card transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Link>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Mail</p>
              <Link
                href={`mailto:${PROFILE.email}`}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                {PROFILE.email}
              </Link>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">LinkedIn</p>
              <Link
                href={PROFILE.linkedin}
                target="_blank"
                className="text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                {PROFILE.name.toLowerCase().replace(/\s+/g, "-")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

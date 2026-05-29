"use client";

import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Santhosh Kumar U. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://linkedin.com/in/santhosh-kumar-u-22a3971b4"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/santhoshkumar-u"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href="mailto:santhoshkrishna958@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

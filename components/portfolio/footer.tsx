"use client";

import { Linkedin, Mail, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              SK<span className="text-primary">.</span>
            </span>
            <span className="text-muted-foreground text-sm">
              | Santhosh Kumar U
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/santhosh-kumar-u-22a3971b4"
              target="_blank"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-card rounded-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:santhoshkrishna958@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-card rounded-lg transition-all"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/santhoshkumar-u"
              target="_blank"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-card rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Santhosh Kumar U
          </p>
        </div>
      </div>
    </footer>
  );
}

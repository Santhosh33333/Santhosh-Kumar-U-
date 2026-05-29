"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <a href="#" className="text-xl font-bold text-foreground tracking-tight">
            SK<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-card rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex flex-col h-full px-6 py-6">
              <div className="flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-foreground tracking-tight">
                  SK<span className="text-primary">.</span>
                </a>
                <button
                  className="p-2 text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-primary text-primary-foreground text-center font-medium rounded-xl"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

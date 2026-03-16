"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/photography", label: "Photography" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0b0b0b]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          Eric Varghese
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-[#00e5ff] px-5 py-2.5 text-sm font-medium text-[#0b0b0b] transition-all hover:bg-[#00e5ff]/90 hover:shadow-lg hover:shadow-[#00e5ff]/20 sm:flex"
          >
            Get in touch
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b0b0b]/10 text-xs transition-transform group-hover:scale-110">
              +
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#0b0b0b] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-zinc-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#00e5ff] px-4 py-2.5 text-center text-sm font-medium text-[#0b0b0b]"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/courses", label: "Courses" },
  { href: "/photography", label: "Photography" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/evarg-sys",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/eric-varghese-4b1513262/",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M6.94 8.5H3.56V19.5h3.38zM5.25 3a1.97 1.97 0 100 3.94 1.97 1.97 0 000-3.94zM20.44 12.64c0-3.31-1.77-4.85-4.13-4.85-1.9 0-2.75 1.05-3.22 1.78V8.5H9.72c.04.71 0 11 0 11h3.37v-6.14c0-.33.02-.66.12-.89.26-.66.86-1.34 1.87-1.34 1.32 0 1.85 1.01 1.85 2.49v5.88h3.37z" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-[-0.02em] text-white transition-opacity hover:opacity-80"
        >
          Eric Varghese
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-200 transition-colors hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/[0.18] hover:bg-white/[0.07] sm:inline-block"
          >
            Get in touch
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
            className="mt-2 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
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
              <div className="mt-3 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-white"
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

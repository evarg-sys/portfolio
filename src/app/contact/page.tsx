"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const email = "evarg22@uic.edu";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl"
        >
          Get in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-8 text-zinc-400 leading-relaxed"
        >
          Open to research collaboration, internships, and interesting problems.
          Fill out the form and I&apos;ll get a notification.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-500">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-500">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none"
              placeholder="Your message..."
            />
          </div>
          {status === "success" && (
            <p className="text-sm text-emerald-400">Thanks! I got your message and will get back to you.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Try again or email me directly at {email}.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-white px-8 py-3 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-sm text-zinc-500"
        >
          Or email directly:{" "}
          <a href={`mailto:${email}`} className="text-white underline underline-offset-2 hover:no-underline">
            {email}
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-14 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6"
        >
          <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            AI Assistant / API
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            To connect the &quot;Ask Eric&quot; chatbot to your own LLM, add your API key or
            endpoint. See <code className="rounded bg-white/10 px-1 py-0.5 text-xs">.env.example</code> or
            email{" "}
            <a href={`mailto:${email}`} className="text-white underline underline-offset-2">
              {email}
            </a>{" "}
            for the API shape.
          </p>
        </motion.div>
      </div>
    </main>
  );
}

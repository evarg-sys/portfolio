"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function renderMessage(text: string) {
  // Parse markdown links: [label](url)
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/);
  return parts.map((part, i) => {
    if (i % 3 === 1) return null; // label — handled with url below
    if (i % 3 === 2) {
      // This is the URL; the label is the previous part
      const label = parts[i - 1];
      const url = part;
      const isInternal = url.startsWith("/");
      return isInternal ? (
        <Link key={i} href={url} className="underline text-white hover:opacity-80">
          {label}
        </Link>
      ) : (
        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="underline text-white hover:opacity-80">
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const PLACEHOLDER_MESSAGE =
  "The assistant ran into an error. Try again in a moment or email evarg22@uic.edu.";

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([
    {
      role: "assistant",
      text: "Hi! I'm Eric's assistant. Ask me about his projects, research, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);

    try {
      // Next step: call your API route, e.g. POST /api/chat with { message: text }
      // For now return a placeholder until you provide the API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json().catch(() => null);
      const reply =
        (data && typeof data.reply === "string" && data.reply) || PLACEHOLDER_MESSAGE;
      setMessages((m) => [...m, { role: "assistant", text: reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: PLACEHOLDER_MESSAGE },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] text-white shadow-lg transition-colors hover:border-white/20 hover:bg-white/5"
        aria-label="Open AI assistant"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-display text-sm font-medium text-white">
                Ask Eric
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1.5 text-zinc-500 transition-colors hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex max-h-[320px] flex-1 flex-col overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 ${msg.role === "user" ? "ml-6 text-right" : "mr-6 text-left"}`}
                >
                  <span
                    className={`inline-block rounded-lg px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-white text-[#0a0a0a]"
                        : "bg-white/10 text-zinc-300"
                    }`}
                  >
                    {msg.role === "assistant" ? renderMessage(msg.text) : msg.text}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="mb-3 mr-6 text-left">
                  <span className="inline-block rounded-lg bg-white/10 px-3 py-2 text-sm text-zinc-500">
                    ...
                  </span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-white/10 p-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, research, resume..."
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-[#0a0a0a] transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

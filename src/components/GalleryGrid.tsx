"use client";

import { motion } from "framer-motion";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {images.map((img, i) => (
        <motion.div
          key={img.src + i}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ scale: 1.02 }}
          className="aspect-[4/3] overflow-hidden rounded-lg bg-white/5"
        >
          <div className="h-full w-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-zinc-500 text-sm">
            {img.alt || "Photo"}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

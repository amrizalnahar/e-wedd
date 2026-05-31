"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { gallery } = weddingConfig;

  const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : gallery.length - 1));
  const next = () => setLightbox((i) => (i! < gallery.length - 1 ? i! + 1 : 0));

  // Masonry-style layout weights
  const colSpans = [1, 1, 2, 1, 2, 1];

  return (
    <section
      id="gallery"
      className="section-wedding"
      style={{ background: "linear-gradient(180deg, var(--ivory) 0%, var(--cream) 100%)" }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-lg mb-2" style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}>
            Kenangan Indah
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
            Galeri Pre-Wedding
          </h2>
          <div className="ornament-divider mt-4">
            <span style={{ color: "var(--gold)" }}>♥</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                colSpans[i % colSpans.length] === 2 ? "col-span-2 md:col-span-1" : ""
              }`}
              style={{ aspectRatio: colSpans[i % colSpans.length] === 2 ? "16/9" : "4/5" }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/600x750/fdf6ec/c9a84c?text=Pre-Wedding+${i + 1}`;
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(74,55,40,0.35)" }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-lg">↗</span>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 transition-all duration-300"
                style={{ borderColor: "var(--gold-light)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              id="lightbox-close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Tutup galeri"
            >
              <X size={22} />
            </button>

            {/* Prev */}
            <button
              id="lightbox-prev"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[lightbox].src}
                alt={gallery[lightbox].alt}
                width={900}
                height={900}
                unoptimized
                className="object-contain w-full h-full rounded-xl"
                style={{ maxHeight: "85vh" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/900x900/fdf6ec/c9a84c?text=Pre-Wedding+${lightbox + 1}`;
                }}
              />
              <p className="text-center text-white/70 text-sm mt-3">
                {lightbox + 1} / {gallery.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              id="lightbox-next"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Foto berikutnya"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

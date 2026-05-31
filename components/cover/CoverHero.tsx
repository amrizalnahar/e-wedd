"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { weddingConfig } from "@/config/wedding";
import { ParticleBackground } from "./ParticleBackground";

interface CoverHeroProps {
  guestName: string;
}

export function CoverHero({ guestName }: CoverHeroProps) {
  const router = useRouter();
  const [opening, setOpening] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  const { bride, groom, events } = weddingConfig;
  const akadDate = new Date(events.akad.date);
  const dateStr = akadDate.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!opening && (
        <motion.div
          key="cover"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "var(--cream)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background gradient layers */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(212,165,165,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(168,181,160,0.12) 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.08) 0%, transparent 50%)",
            }}
          />

          <ParticleBackground />

          {/* Ornamental Border Frame */}
          <div className="absolute inset-4 md:inset-8 border pointer-events-none z-10"
            style={{ borderColor: "rgba(201,168,76,0.3)", borderRadius: "1rem" }}
          />
          <div className="absolute inset-6 md:inset-10 border pointer-events-none z-10"
            style={{ borderColor: "rgba(201,168,76,0.15)", borderRadius: "0.75rem" }}
          />

          {/* Corner ornaments */}
          {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} text-gold z-10 text-xl`}
              style={{ color: "var(--gold-light)" }}
            >
              ✦
            </div>
          ))}

          {/* Main Content */}
          <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-lg mx-auto">

            {/* Script top label */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl mb-3"
              style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}
            >
              The Wedding of
            </motion.p>

            {/* Couple Names */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-2"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}
            >
              {bride.nickname}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-4 my-2"
            >
              <div className="h-px w-16" style={{ background: "var(--gold-light)" }} />
              <span className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-great-vibes)", color: "var(--dusty-rose)" }}>
                &amp;
              </span>
              <div className="h-px w-16" style={{ background: "var(--gold-light)" }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}
            >
              {groom.nickname}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="ornament-divider w-full mb-6"
            >
              <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>♥</span>
            </motion.div>

            {/* Guest Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="mb-8"
            >
              <p className="text-sm uppercase tracking-widest mb-1" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
                Kepada Yth.
              </p>
              <p className="text-xl md:text-2xl font-medium" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
                {guestName}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              id="btn-open-invitation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              className="btn-gold flex items-center gap-2 mb-8"
            >
              <span>💌</span>
              <span>Buka Undangan</span>
            </motion.button>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="text-sm tracking-wider uppercase"
              style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}
            >
              {dateStr}
            </motion.p>
          </div>

          {/* Scroll hint bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          >
            <div className="w-px h-8 mb-1" style={{ background: "linear-gradient(to bottom, var(--gold-light), transparent)" }} />
          </motion.div>
        </motion.div>
      )}

      {/* Opening curtain overlay */}
      {opening && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "var(--cream)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl"
            style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}
          >
            Membuka undangan...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

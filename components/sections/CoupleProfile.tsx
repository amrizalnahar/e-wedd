"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { FaInstagram } from "react-icons/fa";

export function CoupleProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { bride, groom } = weddingConfig;

  return (
    <section
      id="couple"
      className="section-wedding"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-lg mb-2" style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}>
            Mempelai
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
            Yang Berbahagia
          </h2>
          <div className="ornament-divider mt-4">
            <span style={{ color: "var(--gold)" }}>♥</span>
          </div>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo Frame */}
            <div className="relative mb-6">
              <div
                className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden relative"
                style={{
                  border: "3px solid var(--gold-light)",
                  boxShadow: "0 0 0 8px var(--cream), 0 0 0 10px var(--gold-light), var(--shadow-lg)",
                }}
              >
                <Image
                  src={bride.photo}
                  alt={bride.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 256px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x400/fdf6ec/c9a84c?text=" + encodeURIComponent(bride.nickname);
                  }}
                />
              </div>
              {/* Decorative dot */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{ background: "var(--dusty-rose)", border: "2px solid var(--cream)" }}
              />
            </div>

            <p className="text-sm uppercase tracking-widest mb-1" style={{ color: "var(--dusty-rose)", fontFamily: "var(--font-dm-sans)" }}>
              Mempelai Wanita
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
              {bride.name}
            </h3>
            <p className="text-sm mb-3" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
              {bride.fullName}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
              {bride.childOrder}<br />
              <span className="font-medium" style={{ color: "var(--deep-brown)" }}>{bride.father}</span>
              {" & "}
              <span className="font-medium" style={{ color: "var(--deep-brown)" }}>{bride.mother}</span>
            </p>
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mt-3 text-xs hover:opacity-70 transition-opacity"
                style={{ color: "var(--gold)" }}
              >
                <FaInstagram size={14} />
                {bride.instagram}
              </a>
            )}
          </motion.div>

          {/* Heart Connector — hidden on mobile, shown between on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center rounded-full z-10"
            style={{
              background: "var(--ivory)",
              border: "2px solid var(--gold-light)",
              boxShadow: "var(--shadow-gold)",
            }}
          >
            <span className="text-2xl" style={{ color: "var(--dusty-rose)" }}>♥</span>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo Frame */}
            <div className="relative mb-6">
              <div
                className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden relative"
                style={{
                  border: "3px solid var(--gold-light)",
                  boxShadow: "0 0 0 8px var(--cream), 0 0 0 10px var(--gold-light), var(--shadow-lg)",
                }}
              >
                <Image
                  src={groom.photo}
                  alt={groom.name}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, 256px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x400/fdf6ec/c9a84c?text=" + encodeURIComponent(groom.nickname);
                  }}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                style={{ background: "var(--sage)", border: "2px solid var(--cream)" }}
              />
            </div>

            <p className="text-sm uppercase tracking-widest mb-1" style={{ color: "var(--sage)", fontFamily: "var(--font-dm-sans)" }}>
              Mempelai Pria
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
              {groom.name}
            </h3>
            <p className="text-sm mb-3" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
              {groom.fullName}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
              {groom.childOrder}<br />
              <span className="font-medium" style={{ color: "var(--deep-brown)" }}>{groom.father}</span>
              {" & "}
              <span className="font-medium" style={{ color: "var(--deep-brown)" }}>{groom.mother}</span>
            </p>
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 mt-3 text-xs hover:opacity-70 transition-opacity"
                style={{ color: "var(--gold)" }}
              >
                <FaInstagram size={14} />
                {groom.instagram}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

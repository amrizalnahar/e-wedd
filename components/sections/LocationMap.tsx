"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { weddingConfig } from "@/config/wedding";
import { MapPin, Navigation } from "lucide-react";

export function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { events } = weddingConfig;

  return (
    <section
      id="location"
      className="section-wedding"
      style={{ background: "var(--cream)" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-lg mb-2" style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}>
            Lokasi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
            Temukan Kami Di Sini
          </h2>
          <div className="ornament-divider mt-4">
            <span style={{ color: "var(--gold)" }}>♥</span>
          </div>
        </motion.div>

        {/* Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {([
            { event: events.akad, accent: "var(--dusty-rose)" },
            { event: events.resepsi, accent: "var(--sage)" },
          ] as const).map(({ event, accent }, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              className="card-wedding overflow-hidden p-0"
            >
              {/* Map iframe */}
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  src={event.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Peta ${event.venue}`}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--ivory), transparent)" }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: accent, color: "var(--ivory)" }}
                  >
                    <MapPin size={13} />
                  </div>
                  <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
                    {event.title}: {event.venue}
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
                  {event.address}
                </p>
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
                  style={{ background: accent, color: "var(--ivory)", fontFamily: "var(--font-dm-sans)" }}
                >
                  <Navigation size={14} />
                  Petunjuk Arah
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

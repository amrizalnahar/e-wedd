"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) return null;

  const units = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <div className="flex gap-3 justify-center flex-wrap mt-6">
      {units.map(({ value, label }) => (
        <div key={label} className="flip-card">
          <div className="number">{String(value).padStart(2, "0")}</div>
          <div className="label">{label}</div>
        </div>
      ))}
    </div>
  );
}

function EventCard({
  event,
  delay,
  accentColor,
}: {
  event: typeof weddingConfig.events.akad;
  delay: number;
  accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="card-wedding flex-1"
    >
      {/* Card Header */}
      <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: accentColor, color: "var(--ivory)" }}
        >
          <Calendar size={18} />
        </div>
        <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
          {event.title}
        </h3>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Calendar size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
          <p className="text-sm" style={{ color: "var(--deep-brown)", fontFamily: "var(--font-dm-sans)" }}>
            {dateStr}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Clock size={16} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
          <p className="text-sm" style={{ color: "var(--deep-brown)", fontFamily: "var(--font-dm-sans)" }}>
            {timeStr} – {event.endTime} WIB
          </p>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--deep-brown)", fontFamily: "var(--font-dm-sans)" }}>
              {event.venue}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
              {event.address}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Shirt size={16} className="flex-shrink-0" style={{ color: "var(--gold)" }} />
          <p className="text-sm" style={{ color: "var(--deep-brown)", fontFamily: "var(--font-dm-sans)" }}>
            Dress Code: <span className="font-medium">{event.dresscode}</span>
          </p>
        </div>
      </div>

      {/* Map Button */}
      <a
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
        style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)", fontFamily: "var(--font-dm-sans)" }}
      >
        <MapPin size={14} />
        Buka di Google Maps
      </a>
    </motion.div>
  );
}

export function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { events } = weddingConfig;

  return (
    <section
      id="events"
      className="section-wedding"
      style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--ivory) 100%)" }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-lg mb-2" style={{ fontFamily: "var(--font-great-vibes)", color: "var(--gold)" }}>
            Rangkaian
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
            Acara Pernikahan
          </h2>
          <div className="ornament-divider mt-4">
            <span style={{ color: "var(--gold)" }}>♥</span>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          <EventCard event={events.akad} delay={0.2} accentColor="var(--dusty-rose)" />
          <EventCard event={events.resepsi} delay={0.35} accentColor="var(--sage)" />
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}>
            Hitung Mundur Menuju Hari Bahagia
          </p>
          <Countdown targetDate={events.akad.date} />
        </motion.div>
      </div>
    </section>
  );
}

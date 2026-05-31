"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function QuranVerse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="quran-verse"
      className="section-wedding"
      style={{
        background: "linear-gradient(180deg, var(--ivory) 0%, var(--cream) 100%)",
      }}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--gold-light))" }} />
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--gold-light), transparent)" }} />
        </motion.div>

        {/* Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl mb-6 leading-loose"
          style={{ fontFamily: "var(--font-amiri)", color: "var(--deep-brown)", direction: "rtl" }}
        >
          بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* Arabic Verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-2xl md:text-3xl leading-loose mb-6"
          style={{ fontFamily: "var(--font-amiri)", color: "var(--deep-brown)", direction: "rtl", lineHeight: "2.5" }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="ornament-divider mb-4"
        >
          <span style={{ color: "var(--gold)" }}>♥</span>
        </motion.div>

        {/* Translation */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-base md:text-lg italic leading-relaxed mb-4"
          style={{ color: "var(--warm-gray)", fontFamily: "var(--font-dm-sans)" }}
        >
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu dapat
          merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih
          dan sayang.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
        >
          — QS. Ar-Rum: 21 —
        </motion.p>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--gold-light))" }} />
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--gold-light), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}

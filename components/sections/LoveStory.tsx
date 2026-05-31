"use client";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { Icon } from "@/components/ui/Icon"; // assume an Icon component exists or fallback to emoji

export function LoveStory() {
  const timeline = weddingConfig.loveStory;

  return (
    <section id="love-story" className="section-wedding py-16 bg-ivory">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
          Cerita Cinta Kami
        </h2>
        <ul className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.year}
              className="flex items-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gold-light text-white" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {/* Simple icon fallback */}
                {item.icon === "heart" && "❤️"}
                {item.icon === "chat" && "💬"}
                {item.icon === "ring" && "💍"}
                {item.icon === "celebration" && "🎉"}
              </div>
              <div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>{item.year} — {item.title}</h3>
                <p className="mt-2 text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

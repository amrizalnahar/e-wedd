"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { supabase } from "@/lib/supabaseClient";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  // Fetch existing wishes on mount
  useEffect(() => {
    const fetchWishes = async () => {
      const { data, error } = await supabase
        .from("wishes")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) console.error('Supabase fetch error:', error);
      else setWishes(data || []);
    };
    fetchWishes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Nama dan pesan tidak boleh kosong.");
      return;
    }
    setStatus("Mengirim...");
    try {
      const { error } = await supabase.from("wishes").insert({
        name: form.name,
        message: form.message,
        wedding_id: weddingConfig.id,
      });
      if (error) throw error;
      setStatus("Terima kasih atas doanya!");
      setWishes((prev) => [{ id: Date.now(), name: form.name, message: form.message, created_at: new Date().toISOString() }, ...prev].slice(0, 20));
      setForm({ name: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Gagal mengirim, coba lagi.");
    }
  };

  return (
    <section id="wishes" className="section-wedding" style={{ background: "var(--ivory)" }}>
      <ScrollProgress />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Doa & Pesan
        </motion.h2>

        {/* Input Form */}
        <motion.form
          className="flex flex-col gap-4 mb-10"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Pesan (maks 200 kata)"
            rows={3}
            value={form.message}
            onChange={handleChange}
            required
            className="input-field"
          />
          <button type="submit" className="btn-gold">
            Kirim Doa
          </button>
          {status && <p className="text-sm mt-2" style={{ color: "var(--warm-gray)" }}>{status}</p>}
        </motion.form>

        {/* Existing Wishes */}
        <AnimatePresence>
          {wishes.map((w) => (
            <motion.div
              key={w.id}
              className="p-4 mb-4 rounded-lg bg-white/90 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-medium" style={{ color: "var(--deep-brown)" }}>{w.name}</p>
              <p className="text-sm" style={{ color: "var(--warm-gray)" }}>{w.message}</p>
              <p className="text-xs mt-1" style={{ color: "var(--dusty-rose)" }}>
                {new Date(w.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

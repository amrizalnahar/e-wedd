"use client"

import { useState } from "react"
import { weddingConfig } from "@/config/wedding"
import { supabase } from "@/lib/supabaseClient"

export function RSVP() {
  const [form, setForm] = useState({ name: "", email: "", attending: "yes", message: "" })
  const [status, setStatus] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")
    try {
      const { error } = await supabase.from("rsvp").insert({
        name: form.name,
        email: form.email,
        attending: form.attending,
        message: form.message,
        wedding_id: weddingConfig.id,
      })
      if (error) throw error
      setStatus("Terima kasih! Kami mencatat kehadiran Anda.")
      setForm({ name: "", email: "", attending: "yes", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("Oops! Ada yang tidak beres. Silakan coba lagi.")
    }
  }

  return (
    <section id="rsvp" className="section-wedding" style={{ background: "var(--ivory)" }}>
      <div className="max-w-md mx-auto py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ fontFamily: "var(--font-playfair)", color: "var(--deep-brown)" }}>
          Konfirmasi Kehadiran
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={form.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (opsional)"
            value={form.email}
            onChange={handleChange}
            className="input-field"
          />
          <select name="attending" value={form.attending} onChange={handleChange} className="input-field">
            <option value="yes">Akan Hadir</option>
            <option value="no">Tidak Hadir</option>
          </select>
          <textarea
            name="message"
            placeholder="Pesan untuk mempelai (opsional)"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="input-field"
          />
          <button type="submit" className="btn-gold mt-2">
            Kirim Konfirmasi
          </button>
        </form>
        {status && <p className="mt-4 text-center" style={{ color: "var(--warm-gray)" }}>{status}</p>}
      </div>
    </section>
  )
}

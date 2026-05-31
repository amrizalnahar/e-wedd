# 💍 Wedding Invitation — Modern Next.js Project Plan

> Undangan pernikahan digital berbasis Next.js dengan nuansa romantis, elegan, dan interaktif.

---

## 🎨 Design Direction

| Aspek | Pilihan |
|---|---|
| **Aesthetic** | Romantic Luxury — cream, gold, sage green, dusty rose |
| **Typography** | Display: `Cormorant Garamond` · Body: `DM Sans` |
| **Motion** | Framer Motion — staggered reveal, parallax scroll, fade-in per section |
| **Mood** | Hangat, intim, elegan, seperti undangan fisik premium yang dibuka |

---

## 🗂️ Struktur Proyek

```
wedding-invitation/
├── app/
│   ├── page.tsx                  # Cover / Landing Page (halaman pertama)
│   ├── invitation/
│   │   └── page.tsx              # Main Invitation Page (halaman utama)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Cover/
│   │   ├── CoverPage.tsx         # Header + nama tamu + tombol buka
│   │   └── EnvelopeAnimation.tsx # Animasi amplop (opsional)
│   ├── Invitation/
│   │   ├── QuranSection.tsx      # QS Ar-Rum: 21
│   │   ├── BrideGroom.tsx        # Profil mempelai
│   │   ├── EventDetail.tsx       # Tanggal, waktu, tempat
│   │   ├── MapSection.tsx        # Google Maps embed
│   │   ├── Gallery.tsx           # Foto pra-wedding
│   │   ├── GuestComment.tsx      # Form ucapan tamu
│   │   └── Countdown.tsx         # Hitung mundur hari H (opsional)
│   └── shared/
│       ├── AudioPlayer.tsx       # Backsound Payung Teduh - Akad
│       ├── FloatingPetals.tsx    # Animasi kelopak bunga (opsional)
│       └── ScrollProgress.tsx    # Progress bar scroll
├── lib/
│   ├── db.ts                     # Koneksi DB (Supabase/Prisma untuk komentar)
│   └── actions.ts                # Server actions (simpan ucapan)
├── public/
│   ├── audio/
│   │   └── akad-payung-teduh.mp3
│   ├── images/
│   │   ├── prewedding/
│   │   └── couple/
│   └── fonts/
└── .env.local
```

---

## 📄 Halaman & Fitur Detail

### 1. Cover Page — `/` (Halaman Pertama)

**Fungsi:** Pintu masuk undangan, menampilkan nama tamu undangan.

**Fitur:**
- URL dinamis: `/` atau `/?to=Bapak%20Fulan` untuk personalisasi nama tamu
- Animasi floral / kelopak halus di background
- Nama pengantin besar di tengah (dekoratif)
- Nama tamu: *"Kepada Yth. [Nama Tamu]"*
- Tombol **"Buka Undangan"** → redirect ke `/invitation`
- Background: foto pre-wedding blur dengan overlay gradient

**Komponen utama:**
```tsx
// app/page.tsx
export default function CoverPage({ searchParams }) {
  const guestName = searchParams?.to ?? "Tamu Undangan"
  return <CoverPage guestName={guestName} />
}
```

**UI Pattern:**
```
┌─────────────────────────────┐
│   🌸  [floral ornament]     │
│                             │
│   Ahmad & Siti              │  ← nama pengantin (display font)
│   ─────────────────         │
│   Kepada Yth.               │
│   Bapak/Ibu Fulan           │  ← nama tamu dari query param
│                             │
│   [ 💌 Buka Undangan ]      │  ← CTA button
│                             │
│   12 · 12 · 2025            │
└─────────────────────────────┘
```

---

### 2. Main Invitation Page — `/invitation`

Satu halaman panjang (single-page scroll) dengan beberapa section:

---

#### 📖 Section 1 — Ayat Al-Qur'an (QS Ar-Rum: 21)

**Tampilan saat pertama kali halaman dibuka.**

- Animasi fade-in teks Arab dari tengah
- Teks Arab + transliterasi + terjemahan Bahasa Indonesia
- Background: paper texture / ornamen islami halus
- Backsound mulai autoplay (dengan fallback click-to-play karena kebijakan browser)

```
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا...
"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
pasangan-pasangan untukmu dari jenismu sendiri..."
— QS. Ar-Rum: 21
```

---

#### 💑 Section 2 — Profil Mempelai

- Card dua kolom (mobile: stacked): Mempelai Wanita & Pria
- Foto masing-masing dengan bingkai dekoratif
- Nama lengkap, nama orang tua, asal kota
- Animasi: slide-in dari kiri (wanita) & kanan (pria) saat scroll masuk viewport

```
┌──────────────┐   ┌──────────────┐
│  [foto W]    │   │  [foto P]    │
│  Siti Nuraini│ ♥ │  Ahmad Fauzi │
│  Putri dari  │   │  Putra dari  │
│  Bpk. A &    │   │  Bpk. B &    │
│  Ibu B       │   │  Ibu C       │
└──────────────┘   └──────────────┘
```

---

#### 📅 Section 3 — Detail Acara (Opsional Tambahan)

- Akad Nikah: tanggal, waktu, lokasi
- Resepsi: tanggal, waktu, lokasi
- Countdown timer hitung mundur ke hari H

---

#### 🗺️ Section 4 — Peta Lokasi

- Google Maps embed via `<iframe>` atau `@react-google-maps/api`
- Tombol **"Buka di Google Maps"** (deep link)
- Nama venue + alamat lengkap

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-64 rounded-2xl"
  loading="lazy"
/>
```

---

#### 🖼️ Section 5 — Galeri Foto Pre-Wedding

- Masonry grid / carousel (Embla Carousel atau Swiper)
- Lightbox saat foto diklik (Framer Motion modal)
- Jumlah foto: 6–12 foto optimal
- Lazy loading dengan `next/image`

```tsx
import Image from 'next/image'
// Gunakan next/image untuk optimasi otomatis
```

---

#### 💬 Section 6 — Ucapan & Doa Tamu

- Form: Nama, ucapan/doa, pilihan kehadiran (Hadir / Tidak Hadir / Masih Ragu)
- Submit → simpan ke database (Supabase / PlanetScale)
- Tampilkan daftar ucapan tamu sebelumnya (scrollable card list)
- Real-time update opsional via Supabase Realtime

```tsx
// Server Action (Next.js App Router)
async function submitComment(formData: FormData) {
  'use server'
  const name = formData.get('name')
  const message = formData.get('message')
  const attend = formData.get('attend')
  await db.insert({ name, message, attend })
}
```

---

## 🎵 Audio Player — Akad (Payung Teduh)

**Komponen: `AudioPlayer.tsx`**

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // Autoplay sering diblokir browser — fallback: tampilkan tombol play
    audioRef.current?.play().catch(() => setPlaying(false))
  }, [])

  return (
    <>
      <audio ref={audioRef} src="/audio/akad-payung-teduh.mp3" loop />
      <button
        onClick={() => {
          playing ? audioRef.current?.pause() : audioRef.current?.play()
          setPlaying(!playing)
        }}
        className="fixed bottom-4 right-4 z-50 ..."
      >
        {playing ? '🔊' : '🔇'}
      </button>
    </>
  )
}
```

> **Catatan penting:** File audio harus ditempatkan di `/public/audio/`. Pastikan memiliki hak penggunaan lagu (untuk penggunaan pribadi/pernikahan biasanya dapat dikecualikan, tapi perlu diperhatikan jika dipublikasikan secara luas).

---

## 🛠️ Tech Stack Rekomendasi

| Kategori | Library / Tool |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS v4 |
| **Animasi** | Framer Motion |
| **Font** | Google Fonts — Cormorant Garamond + DM Sans |
| **Maps** | Google Maps Embed API atau `@react-google-maps/api` |
| **Database** | Supabase (PostgreSQL + Realtime) |
| **Image** | `next/image` (built-in) |
| **Carousel** | Embla Carousel atau Swiper.js |
| **Form** | React Hook Form + Zod (validasi) |
| **Deployment** | Vercel |

---

## 📦 Instalasi & Setup

```bash
# 1. Buat proyek Next.js
npx create-next-app@latest wedding-invitation \
  --typescript --tailwind --app --src-dir=false

cd wedding-invitation

# 2. Install dependencies
npm install framer-motion embla-carousel-react react-hook-form zod
npm install @supabase/supabase-js
npm install @react-google-maps/api

# 3. Font (via next/font)
# Tambahkan di app/layout.tsx:
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
```

---

## 🌐 URL & Personalisasi Tamu

Gunakan query parameter untuk personalisasi nama tamu:

```
https://namadomain.com/?to=Bapak%20Ahmad%20Fulan
```

Untuk undangan massal, bisa generate link otomatis dari spreadsheet nama tamu dengan script sederhana.

---

## 🗃️ Database Schema (Supabase)

```sql
-- Tabel ucapan tamu
CREATE TABLE guest_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  attend TEXT CHECK (attend IN ('hadir', 'tidak_hadir', 'ragu')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE guest_comments ENABLE ROW LEVEL SECURITY;

-- Policy: siapa saja bisa insert & read
CREATE POLICY "public insert" ON guest_comments FOR INSERT WITH CHECK (true);
CREATE POLICY "public read" ON guest_comments FOR SELECT USING (true);
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| Mobile (< 640px) | Single column, stacked |
| Tablet (640–1024px) | 2 kolom untuk section mempelai |
| Desktop (> 1024px) | Max-width container, centered |

Prioritaskan **mobile-first** karena mayoritas tamu membuka undangan via WhatsApp di smartphone.

---

## ✅ Checklist Fitur Lengkap

### Wajib (Must-Have)
- [x] Cover page dengan nama tamu (query param `?to=`)
- [x] Tombol "Buka Undangan" → `/invitation`
- [x] QS Ar-Rum: 21 (Arab + terjemahan)
- [x] Backsound Akad - Payung Teduh (autoplay + toggle)
- [x] Profil mempelai pria & wanita
- [x] Peta lokasi (Google Maps embed)
- [x] Galeri foto pre-wedding
- [x] Form ucapan & kehadiran tamu

### Opsional (Nice-to-Have)
- [ ] Animasi amplop terbuka saat transisi Cover → Main
- [ ] Countdown timer ke hari H
- [ ] Detail acara (Akad + Resepsi terpisah)
- [ ] Konfirmasi kehadiran dengan jumlah tamu
- [ ] Dark/light mode (opsional)
- [ ] Floating petal animation
- [ ] OG Image dinamis (nama tamu di preview WhatsApp)
- [ ] QR Code undangan untuk dicetak
- [ ] Admin dashboard sederhana untuk lihat daftar tamu

---

## 🚀 Estimasi Waktu Pengerjaan

| Fase | Durasi Estimasi |
|---|---|
| Setup proyek + struktur folder | 1–2 jam |
| Cover page + animasi | 3–4 jam |
| Main page: Quran + Mempelai | 3–4 jam |
| Maps + Event detail | 2–3 jam |
| Galeri pre-wedding | 2–3 jam |
| Form ucapan + Supabase | 3–4 jam |
| Audio player | 1 jam |
| Responsive polish + animasi | 3–5 jam |
| Deployment ke Vercel | 1 jam |
| **Total** | **~19–27 jam** |

---

## 🎯 Rekomendasi Prioritas Pengerjaan

1. **Setup + Cover Page** — kesan pertama paling penting
2. **Main Page: QS + Mempelai** — inti undangan
3. **Audio Player** — elemen emosional
4. **Maps** — informasi praktis
5. **Galeri** — visual storytelling
6. **Form Ucapan** — interaksi tamu
7. **Polish: animasi, responsive, deployment**

---

> 💡 **Tips:** Mulai dari satu halaman statis dulu (hardcode semua data), baru kemudian refactor ke komponen yang menerima props/config agar mudah digunakan ulang untuk undangan berikutnya.
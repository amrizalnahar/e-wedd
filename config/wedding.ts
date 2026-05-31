export const weddingConfig = {
  id: "e-wedding",
  // Couple Info
  // Couple Info
  bride: {
    name: "Siti Nuraini",
    fullName: "Siti Nuraini, S.Kom.",
    nickname: "Siti",
    father: "Bapak H. Ahmad Sulaiman",
    mother: "Ibu Hj. Fatimah Azzahra",
    photo: "https://placehold.co/400x400?text=Bride",
    childOrder: "Putri pertama dari",
    instagram: "@sitinuraini",
  },
  groom: {
    name: "Ahmad Fauzi",
    fullName: "Ahmad Fauzi, S.T.",
    nickname: "Ahmad",
    father: "Bapak H. Mahmud Hasan",
    mother: "Ibu Hj. Aisyah Rahmawati",
    photo: "https://placehold.co/400x400?text=Groom",
    childOrder: "Putra kedua dari",
    instagram: "@ahmadfauzi",
  },

  // Events
  events: {
    akad: {
      title: "Akad Nikah",
      date: "2026-08-15T08:00:00+07:00",
      endTime: "09:30",
      venue: "Masjid Al-Ikhlas",
      address: "Jl. Mawar No. 12, Kelurahan Sukajadi, Bandung 40162",
      mapUrl: "https://maps.google.com/?q=-6.9,107.6",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985!2d107.6191!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMDMuMCJTIDEwN8KwMzcnMDkuMCJF!5e0!3m2!1sid!2sid!4v1",
      dresscode: "Putih / Pastel",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      date: "2026-08-15T11:00:00+07:00",
      endTime: "14:00",
      venue: "Gedung Serbaguna Melati",
      address: "Jl. Kenanga No. 45, Kelurahan Sukamaju, Bandung 40163",
      mapUrl: "https://maps.google.com/?q=-6.9,107.6",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985!2d107.6191!3d-6.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMDMuMCJTIDEwN8KwMzcnMDkuMCJF!5e0!3m2!1sid!2sid!4v1",
      dresscode: "Sage Green / Earth Tone",
    },
  },

  // Love Story Timeline
  loveStory: [
    {
      year: "2020",
      title: "Pertama Bertemu",
      description:
        "Kami bertemu di acara seminar kampus. Saat itu, sebuah senyuman sederhana menjadi awal dari perjalanan panjang yang indah ini.",
      icon: "heart" as const,
    },
    {
      year: "2021",
      title: "Mulai Dekat",
      description:
        "Dari teman diskusi menjadi lebih dari sekadar teman. Setiap percakapan menjadi hal yang selalu kami nantikan.",
      icon: "chat" as const,
    },
    {
      year: "2023",
      title: "Lamaran",
      description:
        "Dengan restu kedua keluarga, kami memutuskan untuk melangkah ke jenjang yang lebih serius. Alhamdulillah.",
      icon: "ring" as const,
    },
    {
      year: "2026",
      title: "Hari Bahagia",
      description:
        "Kami mengundang Anda untuk menjadi saksi cinta kami dalam ikatan suci pernikahan.",
      icon: "celebration" as const,
    },
  ],

  // Digital Gift
  gifts: [
    {
      bank: "Bank Central Asia (BCA)",
      accountNumber: "1234567890",
      accountName: "Siti Nuraini",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "0987654321",
      accountName: "Ahmad Fauzi",
    },
  ],
  giftAddress: {
    name: "Ahmad & Siti",
    address: "Jl. Kenanga No. 45, Bandung 40123",
    phone: "+62812xxxxxxxx",
  },

  // Audio
  music: {
    src: "/audio/background-music.mp3",
    title: "Akad — Payung Teduh",
  },

  // Gallery (placeholder paths — replace with actual pre-wedding photos)
  gallery: [
    { src: "https://placehold.co/400x400?text=Prewedding+1", alt: "Pre-wedding foto 1" },
    { src: "https://placehold.co/400x400?text=Prewedding+2", alt: "Pre-wedding foto 2" },
    { src: "https://placehold.co/400x400?text=Prewedding+3", alt: "Pre-wedding foto 3" },
    { src: "https://placehold.co/400x400?text=Prewedding+4", alt: "Pre-wedding foto 4" },
    { src: "https://placehold.co/400x400?text=Prewedding+5", alt: "Pre-wedding foto 5" },
    { src: "https://placehold.co/400x400?text=Prewedding+6", alt: "Pre-wedding foto 6" },
  ],

  // Meta / SEO
  meta: {
    title: "Undangan Pernikahan Ahmad & Siti",
    description:
      "Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami. Sabtu, 15 Agustus 2026.",
    url: "https://ahmad-siti.vercel.app",
  },
};

export type WeddingConfig = typeof weddingConfig;

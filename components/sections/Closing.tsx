import { weddingConfig } from '@/config/wedding';

export function Closing() {
  return (
    <section
      id="closing"
      className="section-wedding py-20 bg-gradient-to-b from-[var(--cream)] to-[var(--ivory)] text-center relative"
    >
      {/* subtle paper texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter\%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E')",
        }}
      />
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-serif text-[var(--deep-brown)] mb-6" style={{ fontFamily: 'var(--font-amiri)' }}>
          Terima Kasih
        </h2>
        <p className="text-lg text-[var(--warm-gray)] mb-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
          {weddingConfig.meta.title} – Kami sangat berbahagia dapat berbagi momen bahagia ini dengan Anda.
        </p>
        <a
          href="mailto:{weddingConfig.giftAddress?.email ?? ''}"
          className="inline-block px-8 py-3 bg-[var(--gold)] text-[var(--ivory)] rounded-full shadow-lg hover:opacity-90 transition"
        >
          Kirim Ucapan
        </a>
      </div>
    </section>
  );
}

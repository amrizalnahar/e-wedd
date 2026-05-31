"use client";

import { weddingConfig } from "@/config/wedding";

export function DigitalGift() {
  const { gifts, giftAddress } = weddingConfig;
  return (
    <section id="digital-gift" className="section-wedding py-16" style={{ background: "linear-gradient(180deg, var(--cream) 0%, var(--ivory) 100%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
          Kirim Hadiah Digital
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {gifts.map((gift, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-white/90 backdrop-blur-sm">
              <p className="font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>{gift.bank}</p>
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>No. Rek: {gift.accountNumber}</p>
              <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>A/N: {gift.accountName}</p>
            </div>
          ))}
        </div>
        <address className="not-italic text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
          <p>{giftAddress.name}</p>
          <p>{giftAddress.address}</p>
          <p>{giftAddress.phone}</p>
        </address>
      </div>
    </section>
  );
}

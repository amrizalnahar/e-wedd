import type { Metadata } from "next";
import { weddingConfig } from "@/config/wedding";
import { CoverHero } from "@/components/cover/CoverHero";
import { QuranVerse } from "@/components/sections/QuranVerse";
import { CoupleProfile } from "@/components/sections/CoupleProfile";
import { EventDetails } from "@/components/sections/EventDetails";
import { LocationMap } from "@/components/sections/LocationMap";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";
import { Wishes } from "@/components/sections/Wishes";
import { LoveStory } from "@/components/sections/LoveStory";
import { DigitalGift } from "@/components/sections/DigitalGift";
import { Closing } from "@/components/sections/Closing";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// searchParams is a Promise in Next.js 16 App Router
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}): Promise<Metadata> {
  const { to } = await searchParams;
  const guestName = to ? decodeURIComponent(to) : "Tamu Undangan";
  return {
    title: `${weddingConfig.meta.title} — Kepada ${guestName}`,
    description: weddingConfig.meta.description,
  };
}

export default async function InvitationPage({
  searchParams,
}: {
  searchParams: Promise<{ to?: string }>;
}) {
  const { to } = await searchParams;
  const guestName = to ? decodeURIComponent(to) : "Tamu Undangan";
  return (
    <>
      <ScrollProgress />
      <CoverHero guestName={guestName} />
      <QuranVerse />
      <CoupleProfile />
      <EventDetails />
      <LocationMap />
      <Gallery />
      <RSVP />
      <Wishes />
      <LoveStory />
      <DigitalGift />
      <Closing />
    </>
  );
}


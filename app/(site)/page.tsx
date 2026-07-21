import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { AboutNewsRow } from "@/components/sections/about-news-row";
import { QuickLinks } from "@/components/sections/quick-links";
import { FeaturedGuides } from "@/components/sections/featured-guides";
import { EventsArtworkJoinRow } from "@/components/sections/events-artwork-join-row";
import { CommunityHighlights } from "@/components/sections/community-highlights";
import { AlliesBand } from "@/components/sections/allies-band";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutNewsRow />
      <QuickLinks />
      <FeaturedGuides />
      <EventsArtworkJoinRow />
      <CommunityHighlights />
      <AlliesBand />
    </>
  );
}

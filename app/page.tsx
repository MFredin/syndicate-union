import { Hero } from "@/components/sections/hero";
import { StatsBand } from "@/components/sections/stats-band";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { NewsGrid } from "@/components/sections/news-grid";
import { FeaturedGuides } from "@/components/sections/featured-guides";
import { UpcomingEvents } from "@/components/sections/upcoming-events";
import { RecruitmentCta } from "@/components/sections/recruitment-cta";
import { FeaturedArtwork } from "@/components/sections/featured-artwork";
import { CommunityHighlights } from "@/components/sections/community-highlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutTeaser />
      <NewsGrid />
      <FeaturedGuides />
      <UpcomingEvents />
      <FeaturedArtwork />
      <CommunityHighlights />
      <RecruitmentCta />
    </>
  );
}

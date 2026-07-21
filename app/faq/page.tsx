import type { Metadata } from "next";
import { PageHero } from "@/components/common/page-hero";
import { FaqExplorer } from "@/components/common/faq-explorer";
import { faqs } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about joining, participating in, and navigating Syndicate Union.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        variant="contact"
        eyebrow="Frequently Asked"
        crumb="FAQ"
        title="Questions, Answered"
        description="Search or browse by category — and if you can't find what you need, the Contact page always reaches a real person."
      />
      <section className="section-y">
        <div className="container max-w-4xl">
          <FaqExplorer faqs={faqs} />
        </div>
      </section>
    </>
  );
}

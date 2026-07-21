export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Membership" | "Departments" | "Events" | "Technical";
  popular?: boolean;
}

export const faqs: FaqItem[] = [
  {
    id: "what-is-su",
    question: "What is Syndicate Union?",
    answer:
      "Syndicate Union (SU) is a player-driven community within Foundation: Galactic Frontier, built around five core values: liberty, unity, honour, progress, and service. We coordinate fleet operations, publish guides, and run a full calendar of community events.",
    category: "General",
    popular: true,
  },
  {
    id: "is-su-official",
    question: "Is Syndicate Union affiliated with the developers of Foundation: Galactic Frontier?",
    answer:
      "No. SU is an independent, player-run community. We're not affiliated with or endorsed by the game's publisher or developers.",
    category: "General",
  },
  {
    id: "how-to-join",
    question: "How do I join Syndicate Union?",
    answer:
      "Head to the Recruitment page and follow the application process — it takes about five minutes. Once submitted, a member of Recruitment & Onboarding will reach out on Discord within 48 hours.",
    category: "Membership",
    popular: true,
  },
  {
    id: "membership-cost",
    question: "Does it cost anything to join?",
    answer: "Membership in Syndicate Union is completely free. We're a volunteer-run community.",
    category: "Membership",
    popular: true,
  },
  {
    id: "age-requirement",
    question: "Is there an age requirement?",
    answer: "Yes — in line with Discord's terms of service, members must be at least 13 years old.",
    category: "Membership",
  },
  {
    id: "multiple-departments",
    question: "Can I join more than one department?",
    answer:
      "Most members focus on one department, but cross-department contributions are welcome and common — for example, a Fleet Command pilot who also writes guides for Research & Industry.",
    category: "Departments",
  },
  {
    id: "no-experience",
    question: "Do I need prior experience with the game to join?",
    answer:
      "Not at all. Many of our best contributors joined as complete newcomers. Onboarding pairs every new member with a mentor to help you get oriented.",
    category: "Membership",
    popular: true,
  },
  {
    id: "how-departments-chosen",
    question: "How do I choose which department to join?",
    answer:
      "The Recruitment page describes each department's focus and current open positions. If you're unsure, mention your interests during onboarding and your mentor will help you find the right fit.",
    category: "Departments",
  },
  {
    id: "leadership-elected",
    question: "How is Union leadership chosen?",
    answer:
      "Department leads are appointed by the Council of Elders based on demonstrated contribution and peer nomination. The Chancellor and Council seats are elected by the general membership each season.",
    category: "Departments",
  },
  {
    id: "event-timezone",
    question: "I'm not sure what time events are in my timezone. Help?",
    answer:
      "Every event on the Events page automatically converts to your device's local timezone. You can also add events directly to your calendar from the event detail view.",
    category: "Events",
    popular: true,
  },
  {
    id: "missed-event",
    question: "What happens if I can't make a scheduled event?",
    answer:
      "Nothing bad — RSVPs help us plan, but they're not mandatory. Recordings and recaps of major operations are posted to the News page afterward.",
    category: "Events",
  },
  {
    id: "how-to-rsvp",
    question: "How do RSVPs work?",
    answer:
      "Open any upcoming event and select RSVP. You'll see a live headcount, and you can change your response any time before the event starts.",
    category: "Events",
  },
  {
    id: "discord-required",
    question: "Do I need Discord to participate?",
    answer:
      "Yes — Discord is where the Union coordinates day to day. The website is our public hub for news, guides, and events, but membership itself happens on Discord.",
    category: "Technical",
    popular: true,
  },
  {
    id: "wiki-vs-guides",
    question: "What's the difference between the Wiki and the Guides library?",
    answer:
      "The Wiki is our structured knowledge base — foundational reference material organized by category. Guides are longer-form, opinionated strategy write-ups aimed at a specific goal or playstyle.",
    category: "Technical",
  },
  {
    id: "submit-guide",
    question: "Can I submit my own guide?",
    answer:
      "Yes. Research & Industry reviews community-submitted guides for accuracy each month. Reach out in the guides channel on Discord to get started.",
    category: "Departments",
  },
  {
    id: "report-issue",
    question: "I found a bug on the website. How do I report it?",
    answer:
      "Use the Contact page's general enquiries form, or post in the #website-feedback channel on Discord. Include the page and a short description of what happened.",
    category: "Technical",
  },
  {
    id: "leave-union",
    question: "How do I leave the Union if I need to?",
    answer:
      "You're free to leave at any time — just let your department lead or anyone on the Council know, or simply leave the Discord server. No hard feelings, and you're always welcome back.",
    category: "Membership",
  },
  {
    id: "inactive-policy",
    question: "What's the inactivity policy?",
    answer:
      "We understand life gets busy. Members are moved to an inactive role after 60 days of no Discord activity, but this is easily reversed — just say hello when you're back.",
    category: "Membership",
  },
  {
    id: "allied-orgs",
    question: "What are 'Allied Organizations'?",
    answer:
      "These are other player communities SU maintains formal non-aggression pacts or cooperative agreements with, negotiated and maintained by the Diplomatic Corps.",
    category: "General",
  },
  {
    id: "content-creators",
    question: "I stream or make content — is there a program for that?",
    answer:
      "Media & Culture runs regular Creator Spotlights, and a more formal Creator Program with Patreon-supported perks is on our public roadmap.",
    category: "General",
  },
];

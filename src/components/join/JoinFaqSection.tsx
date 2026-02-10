import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "Who is this for?",
    a: "U.S. full-time students (18+ or 17 with consent) planning to travel abroad — study abroad, gap year, or personal trips.",
  },
  {
    q: "What exactly do I get for $20?",
    a: "Your official ISIC card + access to global discounts + a personalized itinerary + prep resources + ongoing trip support.",
  },
  {
    q: "Is this just a discount card?",
    a: "No. ISIC alone is just discounts. Student Travel Buddy helps you actually use them and plan your trip.",
  },
  {
    q: "How fast do I get my ISIC card?",
    a: "After purchase and verification, your ISIC is issued shortly after approval. You'll get clear updates every step.",
  },
  {
    q: "What if I don't know where I'm going yet?",
    a: "That's okay. You can join now, explore options, and plan your trip later.",
  },
  {
    q: "Is this a subscription?",
    a: "Yes — $20 per year. You can cancel anytime before renewal.",
  },
];

const JoinFaqSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner max-w-3xl mx-auto">
        <p className="text-center text-muted-foreground mb-4 font-handwritten text-lg">
          Still deciding? Here's what students usually ask before they join.
        </p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-10">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="sunny-card border-none px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default JoinFaqSection;

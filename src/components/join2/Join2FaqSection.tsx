import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: "Is this only for full-time students?",
    a: "Yes — Student Travel Buddy is for verified students only.",
  },
  {
    q: "Is the ISIC card included?",
    a: "Yes. Your membership includes ISIC access and discounts.",
  },
  {
    q: "How fast do I get access?",
    a: "Immediately after checkout. Verification is quick and guided.",
  },
  {
    q: "What's included in the membership?",
    a: "Student discounts, ISIC access, itineraries, city guides, community perks, and support.",
  },
  {
    q: "Can I cancel?",
    a: "Yes — cancel anytime.",
  },
  {
    q: "Is this useful if I don't travel often?",
    a: "Yes. Many perks and discounts apply locally too.",
  },
];

const Join2FaqSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="inner max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-10">
          Questions? We've got you.
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

export default Join2FaqSection;

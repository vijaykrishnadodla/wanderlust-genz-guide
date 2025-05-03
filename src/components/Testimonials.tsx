
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sunny helped me find a €15 train deal — in 2 minutes. Legend.",
      author: "Emma, Berlin",
      color: "bg-stb-blue/10"
    },
    {
      quote: "Used my card for 5 discounts in 1 day. Trip = made.",
      author: "Jamal, London",
      color: "bg-stb-yellow/10"
    },
    {
      quote: "The guide felt like it was written for me. Because it was.",
      author: "Sofia, Barcelona",
      color: "bg-stb-pink/10"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display">REAL STUDENTS. REAL WINS.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`${testimonial.color} border-none shadow-lg`}>
              <CardContent className="p-8">
                <div className="flex flex-col gap-4">
                  <blockquote className="text-xl font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-right font-medium">— {testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

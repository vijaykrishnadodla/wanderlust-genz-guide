
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sunny helped me find a €15 train deal — in 2 minutes. Legend.",
      author: "Emma, Berlin",
      color: "bg-[#c5e0f3]/50",
      rotation: "rotate-2"
    },
    {
      quote: "Used my card for 5 discounts in 1 day. Trip = made.",
      author: "Jamal, London",
      color: "bg-[#FEF7CD]/50",
      rotation: "rotate-0"
    },
    {
      quote: "The guide felt like it was written for me. Because it was.",
      author: "Sofia, Barcelona",
      color: "bg-[#FDE1D3]/50",
      rotation: "-rotate-2"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FEF7CD]/40 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block transform -rotate-2 relative">
            <h2 className="text-3xl md:text-4xl font-display inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg">
              REAL STUDENTS. REAL WINS.
            </h2>
            <div className="absolute -bottom-3 -right-3 bg-[#FEF7CD] p-2 rounded-lg shadow-sm">
              <span className="font-handwritten text-[#F97316]">Summer memories ✨</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`${testimonial.color} border border-white/20 shadow-lg transform ${testimonial.rotation}`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute -right-2 -top-2 bg-[#F97316] text-white rounded-full h-8 w-8 flex items-center justify-center rotate-12">
                    "
                  </div>
                  <blockquote className="text-xl font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="text-right font-handwritten text-lg text-[#F97316]">— {testimonial.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block transform rotate-1">
            <p className="font-handwritten text-xl text-[#F97316]">Join them on the adventure!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

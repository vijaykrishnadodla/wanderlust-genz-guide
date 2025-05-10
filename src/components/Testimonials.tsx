import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ArrowRight, Quote } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Sunny helped me find a €15 train deal — took only 2 mins! Total legend.",
      author: "Emma 🌸",
      location: "Berlin",
      color: "bg-sunny-yellow-pale",
      rotation: "rotate-2",
      emoji: "🚆"
    },
    {
      quote: "Used my student card for 5 discounts in 1 day. Trip = absolute vibe!",
      author: "Jamal ✌️",
      location: "London",
      color: "bg-sunny-orange-pale",
      rotation: "rotate-0",
      emoji: "💰"
    },
    {
      quote: "The city guide felt like it was written for me. Because it literally was!",
      author: "Sofia ⭐",
      location: "Barcelona",
      color: "bg-sunny-peach",
      rotation: "-rotate-2",
      emoji: "🗺️"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-sunny-soft z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full sunny-dot-pattern opacity-20 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block stb-blob bg-white p-4 shadow-sm transform -rotate-2 mb-2">
            <h2 className="text-3xl md:text-4xl font-display text-sunny-orange m-0">
              REAL STUDENTS. REAL VIBES.
            </h2>
          </div>
          
          <div className="bg-sunny-yellow-light inline-block px-4 py-1 rounded-full mt-3">
            <span className="font-handwritten text-lg text-sunny-orange-dark">The proof is in the adventures ✈️</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`${testimonial.color} border-none shadow-lg transform ${testimonial.rotation} transition-transform hover:-translate-y-2 duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 relative">
                  <div className="absolute -right-2 -top-2 bg-sunny-orange text-white rounded-full h-8 w-8 flex items-center justify-center rotate-12 shadow-sm">
                    <Quote className="h-4 w-4" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sunny-yellow-dark text-sunny-yellow-dark" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-sunny-orange-dark">{testimonial.location}</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm sunny-bounce">
                      {testimonial.emoji}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="sunny-bounce" style={{ animationDelay: "0.3s" }}>
              <SunnyMascot size="sm" travelStyle="adventure" />
            </div>
            <p className="font-handwritten text-xl text-sunny-orange">Join these happy travelers!</p>
          </div>
          
          <Button 
            className="bg-sunny-gradient text-white font-bold rounded-full px-6 py-3 h-auto shadow-md hover:shadow-lg hover:-translate-y-1 transition-all group"
          >
            See More Success Stories
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

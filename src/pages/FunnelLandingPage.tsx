
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Instagram, Mail, ArrowRight, Check, MessageSquare } from 'lucide-react';
import TravelQuiz from '@/components/TravelQuiz';

const FunnelLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD]/30">
      <Navbar />
      <main className="pt-24">
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Film grain texture overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 transform -rotate-1">
                Want epic student travel perks for less than $30?
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-handwritten text-[#F97316]">
                Get your ISIC card + personalized travel guide + discounts. Just answer 4 quick questions.
              </p>
              <Button 
                className="stb-button text-lg px-8 py-6 flex items-center gap-2 mx-auto"
                onClick={() => {
                  const quizElement = document.getElementById('quiz');
                  if (quizElement) {
                    quizElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                🎒 Take the Quiz <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 hidden md:block">
            <div className="bg-white p-2 rounded-lg shadow-md transform rotate-6">
              <span className="text-[#F97316] font-bold">✈️</span>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 hidden md:block">
            <div className="bg-[#FEC6A1] p-2 rounded-lg shadow-md transform -rotate-3">
              <span className="text-black font-bold">🌍</span>
            </div>
          </div>
        </section>
        
        {/* Embedded Quiz Section */}
        <TravelQuiz />
        
        {/* SECTION 2: WHAT YOU GET */}
        <section className="py-16 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
                What's inside the $29 Travel Starter Kit?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3 bg-[#FEF7CD]/40 p-4 rounded-lg">
                  <div className="bg-[#F97316] rounded-full p-1 text-white mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">🌍 Verified ISIC card</h3>
                    <p>150K+ discounts worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-[#FEC6A1]/30 p-4 rounded-lg">
                  <div className="bg-[#F97316] rounded-full p-1 text-white mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">🧠 Smart travel guide</h3>
                    <p>Customized for your destination</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-[#FEF7CD]/40 p-4 rounded-lg">
                  <div className="bg-[#F97316] rounded-full p-1 text-white mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">📩 Personalized daily travel plan</h3>
                    <p>Detailed PDF itinerary just for you</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-[#FEC6A1]/30 p-4 rounded-lg">
                  <div className="bg-[#F97316] rounded-full p-1 text-white mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">🤖 24/7 AI travel help</h3>
                    <p>Support during your entire trip</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-[#FEF7CD]/40 p-4 rounded-lg">
                  <div className="bg-[#F97316] rounded-full p-1 text-white mt-1">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">🎁 Surprise student discounts</h3>
                    <p>Exclusive hacks & deals for students</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button className="stb-button text-lg px-8 py-6">
                  Buy It Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION 3: SOCIAL PROOF */}
        <section className="py-16 bg-[#FEF7CD]/30 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-8 text-center">
                Trusted by students around the world
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Student" />
                      <AvatarFallback>👩</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Maya S.</p>
                      <p className="text-sm text-gray-500">Paris, France</p>
                    </div>
                  </div>
                  <p className="italic">"I got free museum entry in Paris with this card."</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="Student" />
                      <AvatarFallback>👨</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Alex T.</p>
                      <p className="text-sm text-gray-500">Tokyo, Japan</p>
                    </div>
                  </div>
                  <p className="italic">"Saved $90 in my first week abroad."</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Student" />
                      <AvatarFallback>👧</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Jamie K.</p>
                      <p className="text-sm text-gray-500">Barcelona, Spain</p>
                    </div>
                  </div>
                  <p className="italic">"Finally a Gen Z travel guide that gets me!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION 4: ABOUT YOU / STORY */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-center">
                Why we created this
              </h2>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/6babe884-a973-49d2-9125-fad3e4a98f6e.jpg" 
                    alt="Student Travel Buddy Team" 
                    className="rounded-lg polaroid"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    We're student travelers just like you — broke, curious, and always on the hunt for the best deal.
                  </p>
                  <p className="text-lg mb-4">
                    This starter kit is what we wish we had on our first trip abroad.
                  </p>
                  <p className="text-lg font-handwritten text-[#F97316]">
                    No more overpaying or missing out on the best student experiences!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION 5: NEED HELP? */}
        <section className="py-16 bg-[#FEF7CD]/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display mb-4">
                Got questions?
              </h2>
              <p className="text-xl mb-8">
                Our AI travel assistant has answers 24/7.
              </p>
              <Button className="stb-button flex items-center gap-2">
                Ask a Question <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FunnelLandingPage;

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TravelQuiz = () => {
  return (
    <section id="quiz" className="py-16 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform rotate-1">
              WHAT'S YOUR TRAVEL STYLE?
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Take our quick quiz to discover your travel personality and get personalized recommendations!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1">
              <h3 className="text-xl font-bold mb-4 text-[#F97316]">Find Your Perfect Travel Match</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-bold">•</span>
                  <span>Discover your unique travel personality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-bold">•</span>
                  <span>Get personalized destination recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-bold">•</span>
                  <span>Learn budget-friendly tips tailored to your style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-bold">•</span>
                  <span>Connect with like-minded student travelers</span>
                </li>
              </ul>
              
              <Button className="bg-[#F97316] hover:bg-[#fe4c02] text-white font-bold px-6 py-2 rounded-full transform rotate-1 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Take the Quiz
              </Button>
            </div>
            
            <div className="relative">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="bg-[#FEF7CD]/60 p-4 rounded-lg text-center h-full flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <SunnyMascot size="md" travelStyle="adventure" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Adventure Seeker</h4>
                        <p className="text-sm">You live for thrills and off-the-beaten-path experiences!</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="bg-[#FDE1D3]/60 p-4 rounded-lg text-center h-full flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <SunnyMascot size="md" travelStyle="culture" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Culture Explorer</h4>
                        <p className="text-sm">You're all about museums, history, and local traditions!</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="bg-[#FEF7CD]/60 p-4 rounded-lg text-center h-full flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <SunnyMascot size="md" travelStyle="foodie" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Food Enthusiast</h4>
                        <p className="text-sm">Your trips revolve around culinary discoveries and local flavors!</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="bg-[#FDE1D3]/60 p-4 rounded-lg text-center h-full flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <SunnyMascot size="md" travelStyle="fashion" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Social Butterfly</h4>
                        <p className="text-sm">You travel to meet people and create connections worldwide!</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-sm">
                <p className="text-sm font-medium text-[#F97316]">Which one are you?</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg italic">
              "I never knew I was a 'Culture Explorer' until I took this quiz! The recommendations were spot-on for my semester abroad."
            </p>
            <p className="font-bold mt-2">— Emma, University of Manchester</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelQuiz;

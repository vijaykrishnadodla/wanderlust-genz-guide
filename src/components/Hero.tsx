import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, MapPin, Sun } from 'lucide-react';
import SunnyMascot from './SunnyMascot';
import MiniSignUpForm from './MiniSignUpForm';
const Hero = () => {
  return <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Sunny background gradients */}
      <div className="absolute inset-0 bg-sunny-soft z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sunny-yellow-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sunny-orange-light/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 z-0"></div>
      
      {/* Subtle pattern overlay */}
      
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-block mb-2 md:mb-4 self-center md:self-start">
              <div className="bg-sunny-orange text-white px-4 py-1.5 rounded-full font-medium text-sm shadow-sm sunny-wiggle">
                @STUDENTTRAVELBUDDYOFFICIAL
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display">
              TRAVEL <span className="text-sunny-yellow-dark">BRIGHTER.</span> SPEND <span className="text-sunny-orange">SMARTER.</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-handwritten text-sunny-orange sunny-bounce">
              The ultimate travel sidekick for students - with Sunny by your side!
            </p>
            
            <p className="text-lg">
              Join thousands of students saving <span className="font-bold text-sunny-orange">$200+ per week</span> on travel with our exclusive membership perks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button className="bg-sunny-gradient text-white font-bold rounded-full px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-1 transition-all group" onClick={() => {
              const quizElement = document.getElementById('quiz');
              if (quizElement) {
                quizElement.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                Find Your Travel Style
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="rounded-full border-sunny-orange text-sunny-orange hover:bg-sunny-orange/10 h-auto py-3 group" onClick={() => {
              const offeringSection = document.getElementById('offering');
              if (offeringSection) offeringSection.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> Join Sunshine Club
              </Button>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-3 mt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-sunny-yellow flex items-center justify-center text-xs">🌞</div>
                <div className="w-8 h-8 rounded-full bg-sunny-orange-light flex items-center justify-center text-xs">✈️</div>
                <div className="w-8 h-8 rounded-full bg-sunny-yellow-dark flex items-center justify-center text-xs">👋</div>
              </div>
              <p className="text-sm">Joined by <span className="font-bold text-sunny-orange">5,000+</span> student travelers</p>
            </div>
            
            {/* Popular Destinations */}
            <div className="mt-4 bg-white/70 backdrop-blur-sm p-3 rounded-2xl shadow-sm hidden md:block">
              <p className="font-medium text-sm mb-2">Popular Student Destinations:</p>
              <div className="flex flex-wrap gap-2">
                {["Paris", "Barcelona", "London", "Rome", "Berlin"].map(city => <span key={city} className="bg-sunny-yellow-pale px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-sunny-yellow-light">
                    <MapPin className="h-3 w-3 text-sunny-orange" /> {city}
                  </span>)}
              </div>
            </div>
          </div>
          
          <div className="relative h-[350px] md:h-[450px]">
            {/* Central Sunny character */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="bg-white p-6 rounded-[2rem] stb-blob shadow-lg border border-sunny-yellow-light/30">
                <div className="relative">
                  <div className="flex justify-center" style={{
                  width: '220px',
                  height: '220px'
                }}>
                    <SunnyMascot size="lg" travelStyle="beach" className="sunny-bounce" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-12 flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-sunny-orange">Meet Sunny</h3>
                    <p className="font-handwritten text-lg text-sunny-yellow-dark">Your travel bestie!</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 right-10 z-30 sunny-float">
              <div className="bg-sunny-gradient p-3 rounded-full shadow-md">
                <span className="text-white font-bold">✈️</span>
              </div>
            </div>
            
            <div className="absolute bottom-16 left-10 z-30 sunny-bounce" style={{
            animationDelay: "0.5s"
          }}>
              <div className="bg-sunny-yellow p-3 rounded-full shadow-md">
                <span className="text-white font-bold">🌴</span>
              </div>
            </div>
            
            <div className="absolute bottom-32 right-12 z-30 sunny-pulse" style={{
            animationDelay: "1s"
          }}>
              <div className="bg-sunny-orange-light p-3 rounded-full shadow-md">
                <span className="text-white font-bold">📸</span>
              </div>
            </div>
            
            {/* Speech bubble from Sunny */}
            <div className="absolute top-24 left-16 z-30 sunny-bounce" style={{
            animationDelay: "0.7s"
          }}>
              <div className="sunny-speech-bubble sunny-speech-bubble-right max-w-[200px]">
                <p className="font-handwritten text-sunny-orange">
                  "Ready for adventure? I'll help you save money and find hidden gems!" ☀️
                </p>
              </div>
            </div>
            
            {/* Mini signup form for immediate engagement */}
            <div className="absolute bottom-2 inset-x-0 z-30 px-4">
              <MiniSignUpForm />
            </div>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Sun className="h-5 w-5 text-sunny-yellow-dark sunny-spin" />
            <span className="font-medium text-sunny-orange-dark">Start your sunny adventure today!</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
import React from 'react';
import { Sun, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
const SunshineClub = () => {
  return <section id="sunshine-club" className="py-16 bg-gradient-to-t from-[#FDE1D3] to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform -rotate-1 mb-4 flex flex-col items-center justify-center">
            <span className="font-handwritten text-2xl font-bold text-[#F97316] -mb-1 transform -rotate-2">JOIN</span>
            <div className="flex items-center justify-center">
              <Sun className="h-6 w-6 text-[#F97316] mr-2" />
              <h2 className="text-3xl md:text-4xl font-display mb-0">THE SUNSHINE CLUB</h2>
            </div>
          </div>
          <p className="text-xl italic text-[#F97316] max-w-2xl mx-auto">
            Join a community of student travelers with your unproblematic, worldly bestie ☀️
          </p>
        </div>

        <div className="mb-10 relative">
          <img alt="Sunshine mascot with heart sunglasses and pink hat" className="mx-auto max-w-sm md:max-w-md" src="/lovable-uploads/2f0c4da4-6e39-4a7b-be74-64aa968d3eca.jpg" />
          <p className="text-center font-handwritten text-xl text-[#F97316] mt-4">
            Warm sunny glow ✨ anywhere you go
          </p>
        </div>

        {/* Membership comparison table */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FEC6A1]">
                <th className="py-4 px-6 text-left"></th>
                <th className="py-4 px-6 text-left">
                  <span className="font-handwritten text-2xl text-[#C75D4D]">Fulltimer</span>
                </th>
                <th className="py-4 px-6 text-left">
                  <span className="font-handwritten text-2xl text-[#C75D4D]">Part timer</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FEC6A1]/30">
                <td className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">10 top secret spot-specific student travel rules</td>
                <td className="py-3 px-6">✓</td>
                <td className="py-3 px-6"></td>
              </tr>
              <tr className="border-b border-[#FEC6A1]/30">
                <td className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">City guides</td>
                <td className="py-3 px-6">✓</td>
                <td className="py-3 px-6">✓</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">SAVE MONEY</h3>
            <p className="text-lg mb-2">
              Members save an average of <span className="font-bold">$200/week</span> on travel costs with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Exclusive ISIC student discounts</li>
              <li>Insider pricing on accommodations</li>
              <li>Secret deal alerts from locals</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">💰</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">AUTHENTIC EXPERIENCES</h3>
            <p className="text-lg mb-2">
              Skip the tourist traps with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Hidden gem maps by local students</li>
              <li>Real cultural connections</li>
              <li>Instagram-worthy secret spots</li>
            </ul>
            <div className="polaroid transform -rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌎</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">EMOTIONAL SUPPORT</h3>
            <p className="text-lg mb-2">
              We've got your back with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Live chat support during your trip</li>
              <li>Weekly community Zoom meetups</li>
              <li>City-specific WhatsApp groups</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center">
              <span className="text-5xl">🌞</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="stb-button text-lg flex items-center gap-2">
            <UserRound className="h-5 w-5" />
            Join The Sunshine Club
          </Button>
          <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
            <span className="font-handwritten text-base">With Sunny by your side:</span> you'll never just go somewhere — you'll own it, love it, and come back changed
          </p>
        </div>
      </div>
    </section>;
};
export default SunshineClub;
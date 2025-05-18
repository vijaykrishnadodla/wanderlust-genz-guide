
import React from 'react';
import { UserRound, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Ambassador = () => {
  return (
    <section id="ambassador" className="py-16 bg-gradient-to-t from-[#FEF7CD]/60 to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="inner">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img alt="When you can't find the sunshine, be the sunshine" className="rounded-lg shadow-lg transform rotate-3" src="/lovable-uploads/4e8ca135-6b1c-4114-955b-e29bc9a85a77.png" />
              <div className="mt-8">
                <h3 className="text-2xl font-display text-[#F97316] mb-4">Ambassador Program</h3>
                <p className="text-xl mb-2">
                  Are you an experienced student traveler or do you want to encourage others to travel? <Globe className="inline h-5 w-5 text-[#F97316]" />
                </p>
                <Button className="stb-button mt-4 flex items-center gap-2">
                  <UserRound className="h-5 w-5" />
                  Join
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-[#FEF7CD]/40 p-6 rounded-lg border border-[#FEC6A1]/30 transform -rotate-1">
                <h3 className="text-2xl font-handwritten text-[#F97316] mb-4">The Sunshine Leaders</h3>
                
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#F97316] shrink-0 mt-1" />
                    <p>As a sunshine leader you will be in charge of a specific city or in some cases country</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#F97316] shrink-0 mt-1" />
                    <p>You will have creative freedom to organize community events and meet ups</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#F97316] shrink-0 mt-1" />
                    <p>You will share reels/pictures/tips</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#F97316] shrink-0 mt-1" />
                    <p>You can get warm CV referral</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-[#F97316] shrink-0 mt-1" />
                    <p>Help create new local and relevant deals for students</p>
                  </li>
                </ul>

                <div className="mt-8 bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Get your membership free and get paid for sustaining and growing your sunshine local group</p>
                  <p className="mt-2 font-medium text-gray-800">Get direct connection with the core team of Student Travel Buddy</p>
                </div>

                <div className="mt-6 flex justify-end">
                  <div className="inline-block bg-[#FEF7CD] p-3 rounded-lg shadow-lg transform rotate-12">
                    <p className="font-handwritten text-[#F97316]">APPLY NOW</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-lg border border-[#FEC6A1]/30">
                <h4 className="font-bold text-lg text-[#F97316] mb-3">When You Focus on the Good, the Good Gets Better</h4>
                <p className="text-gray-700">Join a global network of student travel enthusiasts making cultural exchange and international friendship accessible to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ambassador;

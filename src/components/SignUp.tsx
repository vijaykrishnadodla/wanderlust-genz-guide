import React from 'react';
import { UserCheck, Mail, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SunnyMascot from './SunnyMascot';
const SignUp = () => {
  const partnerLogos = [{
    name: "ISIC Logo",
    imageSrc: "/lovable-uploads/43907e87-ce60-45f2-a662-8f7e82bff4e8.png",
    website: "https://www.isic.org/"
  }, {
    name: "UNESCO Logo",
    imageSrc: "/lovable-uploads/241e9ec1-4a58-41c8-9ee9-bd701f46b2c7.png",
    website: "https://www.unesco.org/"
  }, {
    name: "University Partners",
    imageSrc: "/lovable-uploads/12acd66e-e6bb-4740-a251-d4f72ad2d5d8.png",
    website: "https://www.studentclearinghouse.org/"
  }];
  return <section id="signup" className="py-16 bg-gradient-to-b from-white to-[#ffeea6]/60 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        

        {/* Newsletter Section */}
        <div className="mt-16 max-w-xl mx-auto p-6 rounded-lg shadow-md border border-[ffbf7033]/30 bg-[#ffbf7033]/20">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-[#f1a019]">Stay Updated</h3>
            <p className="text-gray-700">Get travel tips, exclusive deals, and destination inspiration</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input placeholder="Your email address" className="border-[#3A67CA] rounded-lg" />
            </div>
            <Button className="bg-gradient-to-r from-[#3A67CA] to-[#5eb8dc] hover:brightness-105 text-white font-bold flex items-center gap-2 rounded-full">
              <Mail className="h-4 w-4" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
            By subscribing, you agree to receive marketing emails. You can unsubscribe anytime.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted partners and affiliations</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {partnerLogos.map((partner, index) => <a key={index} href={partner.website} target="_blank" rel="noopener noreferrer" className="transition-opacity">
                <img alt={partner.name} className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" src={partner.imageSrc} />
              </a>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SignUp;
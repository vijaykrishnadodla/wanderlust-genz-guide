
import React from 'react';
import { UserCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUp = () => {
  return (
    <section id="signup" className="py-16 bg-gradient-to-b from-white to-[#FEF7CD]/60 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform -rotate-1 mb-4 flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-[#F97316] mr-2" />
              <h2 className="text-3xl md:text-4xl font-display mb-0">JOIN NOW</h2>
            </div>
            <p className="text-xl italic text-[#F97316]">
              Start your student travel adventure today!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-[#FEC6A1]/20 transform rotate-1">
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your name" className="border-[#FEC6A1]" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="student@university.edu" className="border-[#FEC6A1]" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="university">University/College</Label>
                <Input id="university" placeholder="Your school" className="border-[#FEC6A1]" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="graduation">Expected Graduation Year</Label>
                <Input id="graduation" placeholder="e.g., 2026" className="border-[#FEC6A1]" />
              </div>
              
              <div className="pt-2">
                <Button className="w-full stb-button text-lg flex items-center justify-center gap-2">
                  <UserRound className="h-5 w-5" />
                  Get Started with FullTimer Plan
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-600 pt-2">
                <span className="font-handwritten text-base">Limited offer!</span> Only 24 spots remaining at this price
              </p>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already a member? <a href="#" className="text-[#F97316] font-medium">Sign in here</a>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 max-w-xl mx-auto bg-[#FDE1D3]/40 p-6 rounded-lg shadow-md border border-[#FEC6A1]/30">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-[#F97316]">Stay Updated</h3>
            <p className="text-gray-700">Get travel tips, exclusive deals, and destination inspiration</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-grow">
              <Input placeholder="Your email address" className="border-[#FEC6A1]" />
            </div>
            <Button className="bg-[#F97316] hover:bg-[#fe4c02] text-white font-bold flex items-center gap-2">
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
            <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/43eabef1-8bb9-46f7-b153-0a0c02087110.png" alt="UNESCO Logo" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png" alt="University Partners" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

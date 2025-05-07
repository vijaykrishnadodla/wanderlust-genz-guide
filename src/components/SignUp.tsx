import React from 'react';
import { UserCheck, Mail, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SunnyMascot from './SunnyMascot';
const SignUp = () => {
  return <section id="signup" className="py-16 bg-gradient-to-b from-white to-[#ffeea6]/60 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-[#fdad32] to-[#fe4c02] px-6 py-2 rounded-lg mb-4 flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-white mr-2" />
              <h2 className="text-3xl md:text-4xl font-display mb-0 text-white">JOIN NOW</h2>
            </div>
            <p className="text-xl text-[#fe4c02] font-handwritten">
              Start your student travel adventure today!
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-[#fdad32]/20">
            <div className="flex justify-center mb-6">
              <SunnyMascot withText message="Let me be your travel buddy!" />
            </div>
            
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your name" className="border-[#fdad32] rounded-lg" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="student@university.edu" className="border-[#fdad32] rounded-lg" />
                <p className="text-xs text-[#fe4c02]">* We'll auto-verify your student status with your .edu email</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="university">University/College</Label>
                <Input id="university" placeholder="Your school" className="border-[#fdad32] rounded-lg" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="graduation">Expected Graduation Year</Label>
                <Input id="graduation" placeholder="e.g., 2026" className="border-[#fdad32] rounded-lg" />
              </div>
              
              <div className="pt-2">
                <Button className="w-full bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white font-bold text-lg flex items-center justify-center gap-2 rounded-full py-6">
                  <UserRound className="h-5 w-5" />
                  Get Started with FullTimer Plan
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-600 pt-2">
                <span className="font-handwritten text-base text-[#fe4c02]">Limited offer!</span> Only 24 spots remaining at this price
              </p>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already a member? <a href="#" className="text-[#fdad32] font-medium">Sign in here</a>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 max-w-xl mx-auto p-6 rounded-lg shadow-md border border-[ffbf7033]/30 bg-[#ffbf7033]/20">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-[#3A67CA]">Stay Updated</h3>
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
            <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/43eabef1-8bb9-46f7-b153-0a0c02087110.png" alt="UNESCO Logo" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png" alt="University Partners" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>;
};
export default SignUp;
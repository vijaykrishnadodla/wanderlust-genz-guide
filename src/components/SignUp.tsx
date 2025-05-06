
import React from 'react';
import { UserCheck } from 'lucide-react';
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
                <Button className="w-full stb-button text-lg">
                  Get Started with FullTimer Plan
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-600 pt-2">
                <span className="font-handwritten text-base">Limited offer!</span> Join now and get a free city guide of your choice
              </p>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already a member? <a href="#" className="text-[#F97316] font-medium">Sign in here</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

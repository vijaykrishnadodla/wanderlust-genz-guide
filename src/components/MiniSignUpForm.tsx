
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, ArrowRight } from 'lucide-react';

const MiniSignUpForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <div className="relative w-full md:w-auto">
        <Input 
          placeholder="Your email" 
          className="pr-10 rounded-full border-[#fdad32] bg-white/80"
        />
        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#fdad32] h-4 w-4" />
      </div>
      <Button className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white font-bold rounded-full w-full md:w-auto flex items-center gap-2">
        Join Now
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MiniSignUpForm;

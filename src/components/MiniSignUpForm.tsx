
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const MiniSignUpForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <div className="relative w-full md:w-auto">
        <Input 
          placeholder="Your email" 
          className="pr-10 rounded-full border-[#FEC6A1] bg-white/80"
        />
        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F97316] h-4 w-4" />
      </div>
      <Button className="bg-[#FEC6A1] hover:bg-[#F97316] text-black font-bold rounded-full w-full md:w-auto transform rotate-1">
        Join Now
      </Button>
    </div>
  );
};

export default MiniSignUpForm;

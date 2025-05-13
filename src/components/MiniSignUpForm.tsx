
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, ArrowRight, CheckCircle } from 'lucide-react';

const MiniSignUpForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-2.5 rounded-full shadow-md">
      {isSubmitted ? (
        <div className="flex items-center justify-center py-1 gap-2 text-sunny-orange">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">You're on the list!</span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative w-full sm:w-auto flex-1">
            <Input 
              placeholder="Your email for travel tips" 
              className="pr-10 rounded-full border-sunny-yellow bg-white/80 focus:bg-white pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sunny-orange h-4 w-4" />
          </div>
          <Button type="submit" className="bg-sunny-gradient text-white font-medium rounded-full w-full sm:w-auto flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            Join Free
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </form>
  );
};

export default MiniSignUpForm;

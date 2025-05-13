
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
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md">
      {isSubmitted ? (
        <div className="flex items-center justify-center py-1 gap-1 text-sunny-orange">
          <CheckCircle className="h-4 w-4" />
          <span className="font-medium text-sm">You're on the list!</span>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative w-full sm:w-auto flex-1">
            <Input 
              placeholder="Email for tips" 
              className="pr-8 rounded-full border-sunny-yellow bg-white/80 focus:bg-white pl-3 h-9 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <User className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sunny-orange h-3 w-3" />
          </div>
          <Button type="submit" className="bg-sunny-gradient text-white font-medium rounded-full w-full sm:w-auto flex items-center gap-1 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-8 px-3 text-xs">
            Join
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      )}
    </form>
  );
};

export default MiniSignUpForm;

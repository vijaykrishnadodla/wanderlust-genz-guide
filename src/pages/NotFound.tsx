
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SunnyMascot from '@/components/SunnyMascot';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ffeea6]/50 to-white p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <SunnyMascot size="lg" withText message="Oops! I think we took a wrong turn!" />
        </div>
        
        <h1 className="text-4xl font-display font-bold mb-4">Page Not Found</h1>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        
        <div className="space-y-4">
          <Button 
            asChild
            className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white rounded-full"
          >
            <Link to="/">
              Back to Homepage
            </Link>
          </Button>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-[#fdad32] underline">Contact support</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

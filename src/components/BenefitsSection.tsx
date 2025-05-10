
import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import SunnyAvatar from './SunnyAvatar';

const BenefitsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements with wavy patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-sunny-yellow-pale/70 to-sunny-yellow-light/30 -z-10"></div>
      
      {/* Top wave pattern */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFFBEB" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 sunshine-accent mb-3">
            <Star className="h-4 w-4" />
            <span>Why Join Us</span>
          </div>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-display mb-6 relative z-10 bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FDAD32] text-transparent drop-shadow-sm animate-pulse-gentle">
              WHY STUDENTS LOVE US
            </h2>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 blur-lg transform scale-110"></div>
            <span className="absolute -top-6 right-0 text-yellow-300 animate-float">✨</span>
            <span className="absolute -bottom-4 left-4 text-yellow-400 animate-bounce-subtle">⭐</span>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of students who are transforming their travel experience with our community and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#FFD600]/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            {/* Add subtle top wave pattern inside card */}
            <div className="absolute top-0 left-0 right-0 h-12 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                <path fill="#FFD600" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,277.3C672,288,768,288,864,277.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
            
            <div className="mx-auto bg-gradient-to-br from-[#FFD600] to-[#F97316] w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
            <p className="text-gray-600">
              Get insider tips and exclusive discounts only available to our community members
            </p>
            
            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <SunnyAvatar size="lg" travelStyle="default" withGlow={false} />
            </div>
          </div>
          
          {/* Benefit Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#FFD600]/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                <path fill="#FFD600" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,277.3C672,288,768,288,864,277.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
            
            <div className="mx-auto bg-gradient-to-br from-[#FFD600] to-[#F97316] w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Save Money</h3>
            <p className="text-gray-600">
              Our members save an average of $200 per trip with our exclusive student deals
            </p>
            
            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <SunnyAvatar size="lg" travelStyle="adventure" withGlow={false} />
            </div>
          </div>
          
          {/* Benefit Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-[#FFD600]/30 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
                <path fill="#FFD600" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,277.3C672,288,768,288,864,277.3C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
              </svg>
            </div>
            
            <div className="mx-auto bg-gradient-to-br from-[#FFD600] to-[#F97316] w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Global Community</h3>
            <p className="text-gray-600">
              Connect with peers from top universities worldwide for authentic travel experiences
            </p>
            
            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
              <SunnyAvatar size="lg" travelStyle="cultural" withGlow={false} />
            </div>
          </div>
        </div>
        
        {/* Section with logos */}
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center space-x-4">
            <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12 object-contain" />
            <img src="/lovable-uploads/43eabef1-8bb9-46f7-b153-0a0c02087110.png" alt="UNESCO Logo" className="h-10 object-contain" />
          </div>
        </div>
      </div>
      
      {/* Bottom wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#FFF1E6" fillOpacity="0.8" d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,160C672,171,768,149,864,138.7C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

// List of universities to show the total count
const universities = ["Harvard", "Oxford", "MIT", "Stanford", "Yale", "Princeton", "Columbia", "Cambridge", "Berkeley", "Chicago", "UPenn", "Caltech", "Cornell", "Toronto", "NUS", "NTU", "HKUST", "Sydney", "Tsinghua", "UCLA", "NYU", "Duke", "Imperial", "ETH Zurich", "McGill", "ANU", "Tokyo", "Seoul", "Singapore"];
export default BenefitsSection;

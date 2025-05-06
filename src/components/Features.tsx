
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Map, User, Calendar, Flag, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Spontaneous but Smart",
      description: "Discover last-minute flights and hidden gems. Vibe with going off-plan, but always have a backup.",
      icon: <Compass className="h-10 w-10 text-[#F97316]" />,
      color: "bg-[#FEC6A1]/30",
      rotation: "rotate-1"
    },
    {
      title: "Plugged In",
      description: "Get TikTok travel hacks, Google Maps tips, and always have the Wi-Fi password.",
      icon: <Map className="h-10 w-10 text-[#fdad32]" />,
      color: "bg-[#FEF7CD]/40",
      rotation: "-rotate-1"
    },
    {
      title: "Socially Aware",
      description: "Respect local cultures, understand climate impact, and support ethical travel experiences.",
      icon: <User className="h-10 w-10 text-[#ff77a0]" />,
      color: "bg-[#FDE1D3]/40",
      rotation: "rotate-2"
    },
    {
      title: "Budget-Savvy",
      description: "Find student discounts, Airbnb codes, rail passes, and cheap eats everywhere you go.",
      icon: <Calendar className="h-10 w-10 text-[#fe4c02]" />,
      color: "bg-[#FEC6A1]/30",
      rotation: "-rotate-2"
    },
    {
      title: "Adventure-Ready",
      description: "Hike a volcano or nap on a beach with coconut water. Stay open-minded without complaints.",
      icon: <Flag className="h-10 w-10 text-[#F97316]" />,
      color: "bg-[#FEF7CD]/40",
      rotation: "rotate-1"
    },
    {
      title: "Aesthetic-Aware",
      description: "Capture perfect golden hour photos and enjoy sunset picnics at rooftop cafés.",
      icon: <MapPin className="h-10 w-10 text-[#ff77a0]" />,
      color: "bg-[#FDE1D3]/40",
      rotation: "-rotate-1"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-[#FDE1D3]/20 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-2 text-center mb-12">
          <div className="inline-block transform rotate-1 bg-[#FEC6A1]/60 px-6 py-2 rounded-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-display">WHAT MAKES THE IDEAL GEN Z TRAVEL BUDDY</h2>
          </div>
          <p className="text-[#F97316] md:text-lg font-handwritten mt-2">It's not just someone to split a hostel with — it's a whole vibe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-lg hover:shadow-xl transition-shadow transform ${feature.rotation}`}
            >
              <CardHeader className={`${feature.color} rounded-t-lg`}>
                <div className="flex justify-center">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-6 bg-white">
                <CardTitle className="text-xl mb-2 text-center">{feature.title}</CardTitle>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-5 left-10 hidden md:block">
          <div className="bg-[#FEF7CD] p-2 rounded-lg shadow-sm transform rotate-12">
            <p className="font-handwritten text-sm text-[#F97316]">Travel like a pro! ✌️</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

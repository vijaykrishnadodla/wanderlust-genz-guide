
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Map, User, Calendar, Flag, MapPin } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Spontaneous but Smart",
      description: "Discover last-minute flights and hidden gems. Vibe with going off-plan, but always have a backup.",
      icon: <Compass className="h-10 w-10 text-stb-blue" />,
      color: "bg-stb-blue/10"
    },
    {
      title: "Plugged In",
      description: "Get TikTok travel hacks, Google Maps tips, and always have the Wi-Fi password.",
      icon: <Map className="h-10 w-10 text-stb-yellow-dark" />,
      color: "bg-stb-yellow/10"
    },
    {
      title: "Socially Aware",
      description: "Respect local cultures, understand climate impact, and support ethical travel experiences.",
      icon: <User className="h-10 w-10 text-stb-pink" />,
      color: "bg-stb-pink/10"
    },
    {
      title: "Budget-Savvy",
      description: "Find student discounts, Airbnb codes, rail passes, and cheap eats everywhere you go.",
      icon: <Calendar className="h-10 w-10 text-stb-orange" />,
      color: "bg-stb-orange/10"
    },
    {
      title: "Adventure-Ready",
      description: "Hike a volcano or nap on a beach with coconut water. Stay open-minded without complaints.",
      icon: <Flag className="h-10 w-10 text-stb-blue-dark" />,
      color: "bg-stb-blue/10"
    },
    {
      title: "Aesthetic-Aware",
      description: "Capture perfect golden hour photos and enjoy sunset picnics at rooftop cafés.",
      icon: <MapPin className="h-10 w-10 text-stb-pink" />,
      color: "bg-stb-pink/10"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display">WHAT MAKES THE IDEAL GEN Z TRAVEL BUDDY</h2>
          <p className="text-gray-500 md:text-lg">It's not just someone to split a hostel with — it's a whole vibe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className={`${feature.color} rounded-t-lg`}>
                <div className="flex justify-center">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-xl mb-2 text-center">{feature.title}</CardTitle>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

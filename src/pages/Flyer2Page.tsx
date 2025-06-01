
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Clock, Users, MapPin, DollarSign, Heart, Plane, Globe, Camera } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';
import { Link } from 'react-router-dom';

const Flyer2Page = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* FRONT FLYER SECTION */}
      <section className="relative min-h-screen py-8 px-6 bg-gradient-to-br from-yellow-100 to-orange-50">
        <div className="max-w-6xl mx-auto">
          {/* Website URL at top */}
          <div className="text-center mb-4">
            <p className="text-lg text-gray-600">www.studenttravelbuddy.com</p>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Content */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                PLANNING TO TRAVEL THIS YEAR <span className="text-orange-500">AS A STUDENT?</span>
              </h1>
              
              {/* Save Money Callout - Orange Rectangle */}
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-2xl transform hover:-rotate-1 transition-all">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  SAVE UP TO
                </h2>
                <div className="text-4xl md:text-5xl font-bold">$200+ PER WEEK</div>
              </div>

              {/* Pricing in Teal Pill */}
              <div className="flex justify-center">
                <div className="bg-teal-500 text-white px-8 py-4 rounded-full">
                  <div className="flex items-center gap-4">
                    <span className="text-lg line-through opacity-75">Reg. $29</span>
                    <span className="text-2xl font-bold">→ Now $20/yr</span>
                    <span className="text-sm">(limited time)</span>
                  </div>
                </div>
              </div>

              {/* Four Teal Benefits Bubbles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-500 text-white p-4 rounded-2xl text-center">
                  <img alt="ISIC Logo" className="h-8 mx-auto mb-2" src="/lovable-uploads/b5a79eba-f98b-4e5f-9717-ff8fce4cc79a.png" />
                  <div className="text-sm font-bold">OFFICIAL ISIC CARD</div>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-2xl text-center">
                  <div className="text-2xl font-bold mb-1">50% OFF</div>
                  <div className="text-xs">ON EVERYTHING</div>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-2xl text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-bold">NO TOURIST TRAPS</div>
                </div>
                <div className="bg-teal-500 text-white p-4 rounded-2xl text-center">
                  <Users className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-bold">TRAVEL BUDDIES</div>
                </div>
              </div>
            </div>

            {/* Right side - Mascot */}
            <div className="flex justify-center lg:justify-end">
              <SunnyMascot size="xl" travelStyle="fashion" className="sunny-bounce" />
            </div>
          </div>

          {/* QR Code bottom right */}
          <div className="absolute bottom-8 right-8">
            <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-orange-300">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/lovable-uploads/1f781ab9-025b-4e22-9174-975611b14701.png" 
                  alt="QR Code" 
                  className="w-24 h-24 object-contain"
                />
                <div className="text-xs font-bold text-orange-600 text-center">
                  STUDENT TRAVEL<br/>BUDDY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK FLYER SECTION */}
      <section className="relative min-h-screen py-8 px-6 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          {/* QR Code top left */}
          <div className="absolute top-8 left-8">
            <div className="bg-orange-400 p-2 rounded-lg">
              <div className="bg-white p-3 rounded">
                <img 
                  src="/lovable-uploads/1f781ab9-025b-4e22-9174-975611b14701.png" 
                  alt="QR Code" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-8 pt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              BECOME A MEMBER OF
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
              SUNSHINE CLUB NOW!
            </h2>
          </div>

          {/* Teal banner about diploma/student perks */}
          <div className="bg-teal-500 text-white p-4 rounded-2xl mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Got Your Student ID or Diploma?</h3>
            <p className="text-lg">Unlock exclusive student perks and travel discounts worldwide!</p>
          </div>

          {/* Orange How It Works section */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">HOW IT WORKS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">1</div>
                <h4 className="font-bold mb-2">SIGN UP</h4>
                <p className="text-sm opacity-90">Join our community and get your ISIC card</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">2</div>
                <h4 className="font-bold mb-2">PLAN WITH SUNNY</h4>
                <p className="text-sm opacity-90">Get personalized travel recommendations</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">3</div>
                <h4 className="font-bold mb-2">SAVE & TRAVEL</h4>
                <p className="text-sm opacity-90">Enjoy massive discounts and connect with students</p>
              </div>
            </div>
          </div>

          {/* Grid layout for remaining content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - What You Get */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">WHAT YOU GET</h3>
              <div className="space-y-3">
                {[
                  "☀️ Personalized travel planning with Sunny AI",
                  "💳 Official ISIC card with global discounts",
                  "🗺️ Hidden gems maps & local recommendations",
                  "👥 City community groups & student meetups",
                  "📱 24/7 travel support & emergency help",
                  "🎒 Travel prep checklists & packing guides",
                  "🏠 Verified accommodation recommendations",
                  "🎉 Exclusive events & group trip opportunities"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Mascot and Ambassador */}
            <div className="space-y-6">
              {/* Mascot on cloud in meditation */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-white rounded-full p-8 shadow-lg">
                    <SunnyMascot size="lg" travelStyle="adventure" />
                  </div>
                </div>
              </div>

              {/* Ambassador section */}
              <div className="bg-yellow-100 border-2 border-orange-300 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <SunnyMascot size="md" travelStyle="fashion" />
                  <div>
                    <h3 className="text-lg font-bold text-orange-600">BECOME A SUNSHINE LEADER!</h3>
                    <p className="text-sm text-gray-700">Lead your city's community & earn rewards</p>
                  </div>
                </div>
                <Link to="/ambassador-application">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full">
                    Apply as Ambassador
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Website URL at bottom */}
          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-gray-800">
              www.studenttravelbuddy.com
            </div>
            <p className="text-gray-600 mt-2">Your gateway to affordable student travel</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flyer2Page;

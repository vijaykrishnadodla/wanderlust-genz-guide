
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Clock, Users, MapPin, DollarSign, Heart } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';
import { Link } from 'react-router-dom';

const FlyerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sunny-yellow-pale via-sunny-orange-light/30 to-sunny-yellow-pale overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 px-4">
        {/* Launch Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full transform rotate-12 shadow-lg animate-pulse">
          <span className="font-bold text-sm">🚀 WE ARE JUST LAUNCHING!</span>
        </div>
        
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-display text-sunny-orange-dark mb-4 transform -rotate-1">
              PLANNING TO <span className="text-sunny-yellow-dark">TRAVEL</span> THIS YEAR AS A STUDENT?
            </h1>
            <div className="bg-sunny-orange text-white px-6 py-3 rounded-2xl transform rotate-1 inline-block shadow-xl mb-4">
              <h2 className="text-2xl md:text-4xl font-display">
                DO NOT MISS OUT ON THESE DISCOUNTS!
              </h2>
            </div>
          </div>

          {/* Sunny Mascot */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <SunnyMascot size="lg" travelStyle="adventure" className="sunny-bounce" />
              <div className="absolute -top-4 -right-4 bg-sunny-yellow text-sunny-orange-dark px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                I'm here to help! ✨
              </div>
            </div>
          </div>

          {/* ISIC Spotlight */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl mb-8 transform -rotate-1">
            <h3 className="text-2xl font-bold text-sunny-orange-dark mb-4">
              GET YOUR <span className="text-sunny-yellow-dark">INTERNATIONAL STUDENT ID</span>
            </h3>
            <p className="text-lg mb-4">and enjoy ALL the benefits you can get as a student!</p>
            <div className="flex justify-center items-center gap-4">
              <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12" />
              <div className="text-2xl font-bold text-sunny-orange">Save up to 50% worldwide!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Planning Headache */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">PLANNING HEADACHE?</h3>
                <div className="text-4xl font-bold text-sunny-orange mb-2">WE HELP YOU!</div>
                <p className="text-gray-700">Custom itineraries, hidden gems, and local tips from real students!</p>
              </div>
            </div>

            {/* Budget Restrictions */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform -rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">BUDGET RESTRICTIONS?</h3>
                <div className="text-4xl font-bold text-sunny-orange mb-2">WE ARE HERE FOR YOU!</div>
                <p className="text-gray-700">Save $200+ per week with exclusive student discounts!</p>
              </div>
            </div>

            {/* Solo Travel Fear */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">SCARED TO TRAVEL ALONE?</h3>
                <div className="text-4xl font-bold text-sunny-orange mb-2">WE GOT YOU!</div>
                <p className="text-gray-700">Join 5,000+ students in our global travel community!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Checklist */}
      <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display text-sunny-orange-dark mb-8">
            HERE'S HOW WE SOLVE YOUR TRAVEL PROBLEMS:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "✈️ Personalized travel plans by Sunny AI",
              "💰 Official ISIC card with global discounts",
              "🗺️ Hidden gems maps & local recommendations", 
              "👥 City WhatsApp groups & student meetups",
              "📱 24/7 travel support & emergency help",
              "🎒 Travel prep checklists & packing guides",
              "🌍 Safe accommodation recommendations",
              "🎉 Group trip opportunities & events"
            ].map((solution, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 p-4 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-left font-medium">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Bird Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sunny-yellow to-sunny-orange text-white p-8 rounded-3xl shadow-xl mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="font-bold">LIMITED TIME - FOUNDING MEMBERS ONLY!</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">BE ONE OF THE FIRST TO JOIN!</h2>
            <p className="text-xl mb-4">We're launching with only 100 founding member spots</p>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-bold">67 spots left!</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-bold">50% OFF launch price</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 p-8 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-display text-sunny-orange-dark mb-6 transform -rotate-1">
              JOIN THE SUNSHINE CLUB TODAY!
            </h2>
            
            <div className="mb-8">
              <div className="text-2xl font-bold text-gray-800 mb-2">Get started for just</div>
              <div className="text-5xl font-bold text-sunny-orange mb-2">$99</div>
              <div className="text-lg text-gray-600">One-time payment • Lifetime access</div>
            </div>

            <Link to="/checkout">
              <Button className="bg-sunny-gradient text-white text-xl font-bold px-12 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all mb-6">
                <Users className="w-6 h-6 mr-2" />
                SECURE MY SPOT NOW
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>

            <div className="mb-6">
              <div className="text-2xl font-bold text-sunny-orange-dark mb-2">
                www.studenttravelbuddy.com
              </div>
              <p className="text-gray-600">Visit our website for more details</p>
            </div>

            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>5,000+ happy students</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-600">
        <p className="text-sm">
          Don't let budget restrictions, planning stress, or fear hold you back from the adventure of a lifetime!
        </p>
      </footer>
    </div>
  );
};

export default FlyerPage;

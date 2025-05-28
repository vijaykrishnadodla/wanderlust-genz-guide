
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Clock, Users, MapPin, DollarSign, Heart, Plane, Globe } from 'lucide-react';
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
          {/* What is Student Travel Buddy */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-display text-sunny-orange-dark mb-4">
              MEET <span className="text-sunny-yellow-dark">STUDENT TRAVEL BUDDY</span>
            </h1>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl mb-6 transform -rotate-1">
              <h2 className="text-2xl font-bold text-sunny-orange-dark mb-4">
                THE ULTIMATE PLATFORM FOR STUDENT TRAVELERS
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Your AI-powered companion Sunny + Global student community + Official ISIC card with massive discounts
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-sunny-orange" />
                  <span className="font-medium">5,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-500" />
                  <span className="font-medium">$200+ Savings/Week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-6 h-6 text-blue-500" />
                  <span className="font-medium">AI Trip Planning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sunny Mascot */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <SunnyMascot size="lg" travelStyle="adventure" className="sunny-bounce" />
              <div className="absolute -top-4 -right-4 bg-sunny-yellow text-sunny-orange-dark px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                I'm Sunny, your AI travel buddy! ✨
              </div>
            </div>
          </div>

          {/* ISIC Spotlight */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl mb-8 transform rotate-1">
            <h3 className="text-2xl font-bold text-sunny-orange-dark mb-4">
              GET YOUR <span className="text-sunny-yellow-dark">INTERNATIONAL STUDENT ID</span>
            </h3>
            <p className="text-lg mb-4">Plus access to exclusive student discounts worldwide!</p>
            <div className="flex justify-center items-center gap-4">
              <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12" />
              <div className="text-2xl font-bold text-sunny-orange">Save up to 50% on everything!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display text-sunny-orange-dark mb-8 text-center">
            TIRED OF THESE STUDENT TRAVEL STRUGGLES?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Planning Headache */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">PLANNING OVERWHELM?</h3>
                <div className="text-2xl font-bold text-sunny-orange mb-2">SUNNY AI SOLVES THIS!</div>
                <p className="text-gray-700">Personalized itineraries, hidden gems, and insider tips from real students worldwide!</p>
              </div>
            </div>

            {/* Budget Restrictions */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform -rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">BROKE STUDENT BUDGET?</h3>
                <div className="text-2xl font-bold text-sunny-orange mb-2">SAVE $200+ PER WEEK!</div>
                <p className="text-gray-700">Official ISIC card + exclusive student discounts on everything you need!</p>
              </div>
            </div>

            {/* Solo Travel Fear */}
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-all">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">TRAVELING SOLO & SCARED?</h3>
                <div className="text-2xl font-bold text-sunny-orange mb-2">JOIN OUR COMMUNITY!</div>
                <p className="text-gray-700">Connect with 5,000+ verified students in WhatsApp groups worldwide!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-12 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display text-sunny-orange-dark mb-4">
            ONE MEMBERSHIP. EVERYTHING YOU NEED.
          </h2>
          <div className="bg-gradient-to-r from-sunny-yellow to-sunny-orange text-white p-6 rounded-3xl shadow-xl mb-8">
            <h3 className="text-2xl font-bold mb-2">INTRODUCING: FULLTIMER</h3>
            <p className="text-lg">The only student travel membership you'll ever need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "🤖 Sunny AI: Personalized travel planning",
              "💳 Official ISIC card with global discounts",
              "🗺️ Hidden gems maps & local recommendations", 
              "👥 City WhatsApp groups & student meetups",
              "📱 24/7 travel support & emergency help",
              "🎒 Travel prep checklists & packing guides",
              "🏠 Verified accommodation recommendations",
              "🎉 Exclusive events & group trip opportunities"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 p-4 rounded-2xl shadow-sm">
                <Check className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-left font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Pricing Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-sunny-yellow to-sunny-orange text-white p-8 rounded-3xl shadow-xl mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6" />
              <span className="font-bold">LIMITED TIME LAUNCH OFFER!</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">30% OFF - LAUNCHING PRICE</h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-lg line-through opacity-75">$29/year</div>
              <div className="text-4xl font-bold">$20/year</div>
              <div className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold">SAVE 30%</div>
            </div>
            <p className="text-xl">Join while we're launching at this special price!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/90 p-8 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-display text-sunny-orange-dark mb-6 transform -rotate-1">
              START YOUR ADVENTURE TODAY!
            </h2>
            
            <div className="mb-8">
              <div className="text-2xl font-bold text-gray-800 mb-2">Get FULLTIMER membership for</div>
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-2xl text-gray-500 line-through">$29</div>
                <div className="text-5xl font-bold text-sunny-orange">$20</div>
                <div className="text-lg text-gray-600">/year</div>
              </div>
              <div className="text-lg text-gray-600 mb-4">One payment • Lifetime of adventures</div>
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-full inline-block font-bold">
                🔥 30% OFF Launch Special - Don't Miss Out!
              </div>
            </div>

            <Link to="/checkout">
              <Button className="bg-sunny-gradient text-white text-xl font-bold px-12 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all mb-6">
                <Users className="w-6 h-6 mr-2" />
                JOIN FULLTIMER NOW
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>

            <div className="mb-6">
              <div className="text-2xl font-bold text-sunny-orange-dark mb-2">
                www.studenttravelbuddy.com
              </div>
              <p className="text-gray-600">Your gateway to affordable student travel</p>
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
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Trusted community</span>
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
        <p className="text-xs mt-2">
          Limited time 30% discount - regular price $29/year
        </p>
      </footer>
    </div>
  );
};

export default FlyerPage;

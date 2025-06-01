
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, BookOpen, Backpack, HelpCircle, MapPin, Crown, ArrowRight, Globe, Users, Heart, Zap, Gift, Star, Compass, Camera, Plane, Coffee } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';
import { Link } from 'react-router-dom';

const FreebiesPage = () => {
  const handleDownload = (fileName: string) => {
    console.log(`Downloading: ${fileName}`);
  };

  const handleDownloadAll = () => {
    console.log('Downloading all 5 guides');
  };

  return (
    <div className="min-h-screen bg-fixed bg-radialSunny from-[#FFD447] via-[#FFEFE2] to-white bg-grain text-midnight overflow-hidden relative">
      {/* Enhanced film grain texture overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-sunny-yellow/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-sunny-orange/20 rounded-full animate-bounce-subtle" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-sunny-yellow-light/40 rounded-full animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
      
      {/* HERO SECTION - Enhanced */}
      <section className="relative min-h-screen py-16 px-4 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-sunny-orange-light/30 mb-6 sunny-bounce">
            <Star className="w-4 h-4 text-sunny-orange fill-current" />
            <span className="text-sm font-medium text-sunny-orange-dark">Downloaded by 15,000+ students</span>
            <Star className="w-4 h-4 text-sunny-orange fill-current" />
          </div>

          {/* Enhanced Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-sunny-orange-dark mb-6 leading-tight">
            <span className="block">🎒 Your FREE</span>
            <span className="text-gradient bg-sunny-gradient bg-clip-text text-transparent block">Student Travel Toolkit</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">Awaits! 🌍✨</span>
          </h1>
          
          {/* Personal subheadline */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-8 max-w-4xl mx-auto border border-sunny-orange-light/20">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Hey future explorer! 👋 Ready to travel smarter, not harder? These 5 game-changing guides will transform you from 
              <span className="font-semibold text-sunny-orange-dark"> "stressed student" </span>
              to 
              <span className="font-semibold text-sunny-orange-dark"> "savvy traveler" </span>
              in minutes.
            </p>
          </div>

          {/* Mascot with speech bubble */}
          <div className="flex justify-center mb-8 relative">
            <SunnyMascot 
              size="xl" 
              travelStyle="adventure" 
              className="sunny-bounce" 
              withText={true}
              message="These guides changed my travel game completely! 🚀"
            />
          </div>

          {/* Enhanced CTA with stats */}
          <div className="space-y-4">
            <Button 
              onClick={handleDownloadAll}
              className="bg-sunny-gradient text-white text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 font-bold group"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              📥 Get All 5 Guides (FREE!)
              <Zap className="w-5 h-5 ml-2 text-yellow-200" />
            </Button>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>15k+ downloads</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-1">
                <Gift className="w-4 h-4 text-green-500" />
                <span>Always free</span>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 text-sunny-orange-dark font-medium animate-bounce">
            ⬇️ Explore each guide below ⬇️
          </div>
        </div>
      </section>

      {/* SECTION 1: General Travel Guide - Left aligned */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-sunny-orange-light/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-2 bg-sunny-gradient"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sunny-gradient p-3 rounded-full shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-sunny-yellow-light/50 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-sunny-orange-dark">Perfect for beginners</span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display text-sunny-orange-dark leading-tight">
                  🌎 The Ultimate Student Travel Guide
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  New to student travel? Start here! This comprehensive starter pack is like having a seasoned traveler as your best friend. 
                  From packing secrets to safety hacks, we've got your back.
                </p>
                
                <div className="bg-sunny-yellow-light/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-sunny-orange fill-current" />
                    What You'll Master:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { text: "Smart travel habits that save $$$", icon: Coffee },
                      { text: "ISIC card hacks for max savings", icon: Zap }, 
                      { text: "Safety tips that actually work", icon: Heart },
                      { text: "Budget strategies from pros", icon: Star }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/60 rounded-xl p-3">
                        <div className="bg-sunny-orange/20 p-2 rounded-full">
                          <item.icon className="w-4 h-4 text-sunny-orange" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <p className="text-green-700 font-medium text-center">
                    💡 "This guide literally saved me $500 on my first trip!" - Sarah, 20
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 lg:w-80">
                <div className="bg-sunny-gradient p-6 rounded-full shadow-xl sunny-float">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-500">⏱️ 15 min read</div>
                  <div className="text-sm text-gray-500">📄 12 pages</div>
                </div>
                <Button 
                  onClick={() => handleDownload('general-travel-guide.pdf')}
                  className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  📘 Get The Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pack Light Guide - Right aligned */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-sunny-yellow-light/40 to-sunny-orange-light/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-sunny-orange-light/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-l from-sunny-orange to-sunny-yellow"></div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-start lg:justify-end">
                  <div className="bg-sunny-yellow-light/50 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-sunny-orange-dark">Overpacker's salvation</span>
                  </div>
                  <div className="bg-gradient-to-r from-sunny-orange to-sunny-yellow p-3 rounded-full shadow-lg">
                    <Backpack className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display text-sunny-orange-dark leading-tight text-left lg:text-right">
                  🎽 Pack Light Like a Pro
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed text-left lg:text-right">
                  Tired of lugging around a suitcase that weighs more than you do? This checklist will turn you into a 
                  packing ninja with genius tips from students who've been there, done that.
                </p>
                
                <div className="bg-white/60 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-4 flex items-center gap-2 justify-start lg:justify-end">
                    <Compass className="w-5 h-5 text-sunny-orange" />
                    Your Packing Arsenal:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { text: "Trip-length packing formulas", icon: Plane },
                      { text: "Toiletry & tech checklists", icon: Zap },
                      { text: "Carry-on optimization hacks", icon: Camera }, 
                      { text: "Pro tips (hello, rolling clothes!)", icon: Heart }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-sunny-yellow-light/40 rounded-xl p-3">
                        <div className="bg-sunny-yellow/30 p-2 rounded-full">
                          <item.icon className="w-4 h-4 text-sunny-orange-dark" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-blue-700 font-medium text-center">
                    ✈️ "Went from 50lbs to 22lbs and still had everything I needed!" - Mike, 22
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 lg:w-80">
                <div className="bg-gradient-to-br from-sunny-yellow to-sunny-orange p-6 rounded-full shadow-xl sunny-wiggle">
                  <Backpack className="w-16 h-16 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-500">⏱️ 10 min read</div>
                  <div className="text-sm text-gray-500">📋 Easy checklists</div>
                </div>
                <Button 
                  onClick={() => handleDownload('packing-guide.pdf')}
                  className="bg-gradient-to-r from-sunny-yellow to-sunny-orange hover:from-sunny-orange hover:to-sunny-yellow text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  🧳 Grab This Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ Guide - Left aligned with different styling */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-sunny-orange-light/30 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-sunny-gradient opacity-10 rounded-3xl"></div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 relative">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sunny-gradient p-3 rounded-full shadow-lg sunny-pulse">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-purple-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-purple-700">Anxiety-buster</span>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display text-sunny-orange-dark leading-tight">
                  ❓ Student Travel FAQs — Solved!
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Got travel anxiety? We feel you! This is your ultimate worry-killer guide. Every "what if" scenario, 
                  every midnight panic thought — we've answered it all with real, actionable advice.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Real Questions, Real Answers:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "How do I use my ISIC card for maximum savings?",
                      "What if I get sick abroad?",
                      "How do I avoid tourist scams?",
                      "Is travel insurance really necessary?"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white/70 rounded-xl p-3">
                        <div className="bg-purple-200 p-1.5 rounded-full mt-0.5">
                          <Check className="w-3 h-3 text-purple-700" />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-orange-700 font-medium text-center">
                    🧠 "Answered every single worry I had. Pure gold!" - Emma, 19
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 lg:w-80">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-full shadow-xl sunny-bounce">
                  <HelpCircle className="w-16 h-16 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-500">⏱️ 8 min read</div>
                  <div className="text-sm text-gray-500">🔍 Quick answers</div>
                </div>
                <Button 
                  onClick={() => handleDownload('travel-faqs.pdf')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  📖 Get Answers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cancun Itinerary - Right aligned tropical theme */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-100/60 to-blue-200/40 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-cyan-300/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            {/* Tropical wave decoration */}
            <div className="absolute top-0 right-0 w-full h-3 bg-gradient-to-l from-cyan-400 via-blue-400 to-teal-400 rounded-t-3xl"></div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 mb-4 justify-start lg:justify-end">
                  <div className="bg-cyan-100 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-cyan-700">Paradise planning</span>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-full shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display text-sunny-orange-dark leading-tight text-left lg:text-right">
                  🌴 Cancun in 3 Days — Dream Itinerary
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed text-left lg:text-right">
                  Ready for paradise? This isn't just another basic itinerary — it's your blueprint for the perfect 
                  balance of culture, adventure, and beach bliss. All with student-friendly prices!
                </p>
                
                <div className="bg-white/70 rounded-2xl p-6 border border-cyan-200">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-4 flex items-center gap-2 justify-start lg:justify-end">
                    <Compass className="w-5 h-5 text-cyan-600" />
                    Your Cancun Adventure:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { text: "Day-by-day culture + chill plans", icon: Camera },
                      { text: "Verified ISIC discounts", icon: Star },
                      { text: "Local food & ferry secrets", icon: Coffee }, 
                      { text: "Hidden gems + photo spots", icon: Heart }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-cyan-50 rounded-xl p-3">
                        <div className="bg-cyan-200 p-2 rounded-full">
                          <item.icon className="w-4 h-4 text-cyan-700" />
                        </div>
                        <span className="text-gray-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4 border border-teal-200">
                  <p className="text-teal-700 font-medium text-center">
                    🏝️ "Best 3 days of my life! The local spots were incredible." - Alex, 21
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 lg:w-80">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-6 rounded-full shadow-xl sunny-float">
                  <MapPin className="w-16 h-16 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-500">⏱️ 12 min read</div>
                  <div className="text-sm text-gray-500">🗓️ 3-day plan</div>
                </div>
                <Button 
                  onClick={() => handleDownload('cancun-itinerary.pdf')}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  📅 Get Itinerary
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Sunshine Club - Premium styling */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-sunny-gradient rounded-3xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            {/* Premium border glow */}
            <div className="absolute inset-0 bg-white/10 rounded-3xl border-2 border-white/20"></div>
            
            {/* Crown decoration */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 p-3 rounded-full shadow-lg">
                <Crown className="w-6 h-6 text-yellow-800" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 relative pt-8">
              <div className="flex-1 space-y-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                    <Crown className="w-4 h-4 text-yellow-200" />
                    <span className="text-white/90 font-medium">Premium Membership</span>
                    <Crown className="w-4 h-4 text-yellow-200" />
                  </div>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display text-white leading-tight text-center lg:text-left">
                  ☀️ Sunshine Club — Your Golden Key
                </h2>
                
                <p className="text-lg text-white/90 leading-relaxed text-center lg:text-left">
                  This isn't just a membership — it's your VIP pass to the ultimate student travel experience. 
                  Join 15,000+ savvy students who unlock exclusive perks worldwide.
                </p>
                
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                    <Gift className="w-5 h-5 text-yellow-200" />
                    Exclusive Perks Inside:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { text: "Official ISIC card included", icon: Star },
                      { text: "Custom itineraries made for YOU", icon: Heart },
                      { text: "150,000+ worldwide discounts", icon: Globe }, 
                      { text: "Only $20 (crazy value!)", icon: Zap }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                        <div className="bg-yellow-400/30 p-2 rounded-full">
                          <item.icon className="w-4 h-4 text-yellow-200" />
                        </div>
                        <span className="text-white/90 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-xl p-4 border border-yellow-400/30">
                  <p className="text-yellow-100 font-medium text-center">
                    👑 "Best $20 I've ever spent. Saved me hundreds already!" - Jessica, 20
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 lg:w-80">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full shadow-2xl sunny-pulse border-2 border-white/30">
                  <Crown className="w-16 h-16 text-yellow-200" />
                </div>
                <div className="text-center space-y-2">
                  <div className="text-sm text-white/80">🎯 Everything you need</div>
                  <div className="text-sm text-white/80">💰 Incredible value</div>
                </div>
                <Button 
                  onClick={() => handleDownload('sunshine-club-guide.pdf')}
                  className="bg-white text-sunny-orange hover:bg-gray-100 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-2 border-white/20"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  🔐 Unlock VIP Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION - Enhanced */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-sunny-orange-light/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            {/* Sparkle decorations */}
            <div className="absolute top-4 right-4">
              <Star className="w-6 h-6 text-sunny-yellow fill-current animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Star className="w-4 h-4 text-sunny-orange fill-current animate-pulse" style={{animationDelay: '1s'}} />
            </div>

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-sunny-yellow-light/50 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-sunny-orange" />
                  <span className="text-sm font-medium text-sunny-orange-dark">Bonus: Personalized for YOU</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display text-sunny-orange-dark leading-tight">
                  🧠 Want Your Perfect Trip Plan?
                </h2>
                
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Take our fun 2-minute quiz and get a custom itinerary that matches your vibe, budget, and travel dreams. 
                  It's like having a travel buddy who actually gets you! ✨
                </p>
              </div>
              
              <div className="flex justify-center mb-6">
                <SunnyMascot 
                  size="lg" 
                  travelStyle="cultural" 
                  withText={true}
                  message="Let's find your perfect adventure! 🎯"
                />
              </div>
              
              <div className="space-y-4">
                <Link to="/quiz">
                  <Button className="bg-sunny-gradient hover:shadow-lg text-white font-bold px-10 py-5 rounded-full text-lg hover:-translate-y-1 transition-all duration-300 group">
                    <Compass className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    🎯 Take the Quiz (2 min)
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>5,000+ personalized</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span>100% free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED FOOTER */}
      <footer className="relative py-16 px-4 bg-white/95 backdrop-blur-sm border-t border-sunny-orange-light/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <SunnyMascot size="md" travelStyle="default" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-sunny-orange-dark">
              Ready to Transform Your Travel Game?
            </h3>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of students who've already downloaded these life-changing guides. 
              Your next adventure starts with a single click! 🚀
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2 hover:text-sunny-orange transition-colors">
              <Globe className="w-5 h-5" />
              <a href="https://www.studenttravelbuddy.com" className="hover:underline">
                studenttravelbuddy.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              <span>@studenttravelbuddyofficial</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200">
            <div className="bg-sunny-yellow-light/30 rounded-2xl p-6">
              <p className="text-gray-700 font-medium text-lg">
                Ready to start your adventure? 🌟 Download these free guides and join thousands of students exploring the world! ✈️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreebiesPage;

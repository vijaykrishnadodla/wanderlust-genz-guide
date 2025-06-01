
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Check, BookOpen, Backpack, HelpCircle, MapPin, Crown, ArrowRight } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';
import { Link } from 'react-router-dom';

const FreebiesPage = () => {
  const handleDownload = (fileName: string) => {
    // For now, we'll just log the download - files can be added later
    console.log(`Downloading: ${fileName}`);
    // When files are uploaded, this will be: window.open(`/lovable-uploads/${fileName}`, '_blank');
  };

  const handleDownloadAll = () => {
    console.log('Downloading all 5 guides');
    // This will trigger downloads of all 5 files when they're uploaded
  };

  return (
    <div className="min-h-screen bg-fixed bg-radialSunny from-[#FFD447] via-[#FFEFE2] to-white bg-grain text-midnight overflow-hidden">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen py-16 px-4 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-sunny-orange-dark mb-6 leading-tight">
            🎒 Get Your FREE <span className="text-sunny-yellow-dark">Student Travel Toolkit</span> 🌍
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Level up your adventures with 5 must-have guides made for student travelers — from packing hacks to destination discounts.
          </p>

          {/* Large Sunny Mascot */}
          <div className="flex justify-center mb-8">
            <SunnyMascot size="xl" travelStyle="adventure" className="sunny-bounce" />
          </div>

          {/* Main CTA */}
          <Button 
            onClick={handleDownloadAll}
            className="bg-sunny-gradient text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 font-bold"
          >
            <Download className="w-6 h-6 mr-3" />
            📥 Download All 5 Guides Now
          </Button>

          {/* Visual indicator */}
          <div className="mt-8 text-sunny-orange-dark font-medium">
            ⬇️ Scroll down to see all freebies ⬇️
          </div>
        </div>
      </section>

      {/* SECTION 1: General Travel Guide */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-white hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-display text-sunny-orange-dark mb-4">
                  🌎 The Ultimate Student Travel Guide
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Start here if you're new to student travel! This all-in-one starter pack covers essential tips, tools, and resources — from packing and planning to safety and discounts.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-3">What You'll Learn:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Smart travel habits",
                      "How to save with your ISIC card", 
                      "Student-friendly safety tips",
                      "Budget strategies"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-sunny-orange" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <BookOpen className="w-16 h-16 text-sunny-orange" />
                <Button 
                  onClick={() => handleDownload('general-travel-guide.pdf')}
                  className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-6 py-3 rounded-full"
                >
                  📘 Download General Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pack Light Like a Pro */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-sunny-yellow-light hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-display text-sunny-orange-dark mb-4">
                  🎽 Pack Light Like a Pro – The No-Stress Packing Guide
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Tired of overpacking or forgetting the essentials? This checklist breaks down what to pack for 1–7 day trips — with genius tips from seasoned student travelers.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-3">What You'll Get:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Trip-length based packing tables",
                      "Toiletry + tech checklists",
                      "Carry-on hacks", 
                      "Bonus pro tips (like rolling your clothes!)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-sunny-orange" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Backpack className="w-16 h-16 text-sunny-orange" />
                <Button 
                  onClick={() => handleDownload('packing-guide.pdf')}
                  className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-6 py-3 rounded-full"
                >
                  🧳 Download Packing Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Common Travel FAQs */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-white hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-display text-sunny-orange-dark mb-4">
                  ❓ Student Travel FAQs — Answered!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Wondering what to pack, how to use your ISIC, or whether you need insurance? We got you. This guide is your go-to cheat sheet for all those "what if?" questions.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-3">Highlights:</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Real answers to student worries",
                      "Tips for saving, staying safe & avoiding scams",
                      "Quick links to must-know travel tools"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-sunny-orange" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <HelpCircle className="w-16 h-16 text-sunny-orange" />
                <Button 
                  onClick={() => handleDownload('travel-faqs.pdf')}
                  className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-6 py-3 rounded-full"
                >
                  📖 Download FAQ Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 3-Day Cancun Itinerary */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-sunny-yellow-light hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-display text-sunny-orange-dark mb-4">
                  🌴 Cancun in 3 Days — Student Itinerary
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Sun, tacos, Mayan ruins, and savings? Yes, please. This itinerary packs it all into a dream trip — with real student discounts on every activity.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-sunny-orange-dark mb-3">What's Inside:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Daily plans (culture + chill)",
                      "Verified ISIC savings",
                      "Travel, food, and ferry hacks",
                      "Free time ideas + local tips"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-sunny-orange" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <MapPin className="w-16 h-16 text-sunny-orange" />
                <Button 
                  onClick={() => handleDownload('cancun-itinerary.pdf')}
                  className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-6 py-3 rounded-full"
                >
                  📅 Download Cancun Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Sunshine Club Membership Guide */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-sunny-gradient text-white hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-display text-white mb-4">
                  ☀️ Sunshine Club Membership — Unlock Everything
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  This isn't just a membership — it's your golden key to exclusive student travel perks. Find out why thousands of students use this to access 150,000+ discounts worldwide.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Why Join:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Includes official ISIC card",
                      "Get personalized itineraries",
                      "Access webinars, tools & student travel community",
                      "Only $20 (includes everything!)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-white" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <Crown className="w-16 h-16 text-white" />
                <Button 
                  onClick={() => handleDownload('sunshine-club-guide.pdf')}
                  className="bg-white text-sunny-orange hover:bg-gray-100 font-bold px-6 py-3 rounded-full"
                >
                  🔐 Download Sunshine Club Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="sunny-card bg-white border-2 border-sunny-orange-light hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h2 className="text-4xl font-display text-sunny-orange-dark mb-4">
                🧠 Want Your Own Custom Itinerary?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Take our free travel quiz & get a personalized itinerary delivered to your inbox — based on your vibe, budget & goals.
              </p>
              
              <div className="flex justify-center mb-6">
                <SunnyMascot size="lg" travelStyle="cultural" />
              </div>
              
              <Link to="/quiz">
                <Button className="bg-sunny-orange hover:bg-sunny-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg">
                  🎯 Take the Quiz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 px-4 bg-white/90 backdrop-blur-sm border-t border-sunny-orange-light/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <SunnyMascot size="md" travelStyle="default" />
          </div>
          
          <h3 className="text-2xl font-bold text-sunny-orange-dark mb-2">
            Brought to you by Student Travel Buddy
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <a href="https://www.studenttravelbuddy.com" className="hover:text-sunny-orange transition-colors">
                www.studenttravelbuddy.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📲</span>
              <span>@studenttravelbuddyofficial</span>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500">
              Ready to start your adventure? Download these free guides and join thousands of students exploring the world! ✈️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreebiesPage;

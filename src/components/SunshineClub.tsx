
import React, { useState, useEffect } from 'react';
import { Sun, ArrowRight, Check, Users, Globe, DollarSign, MessageCircle, Star, Video, Sparkles, Timer, UserRound, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import JourneySuns from './JourneySuns';
import { useIsMobile } from '@/hooks/use-mobile';
import SunnyMascot from './SunnyMascot';

// Star animation component
const StarDust = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <Sparkles className="h-4 w-4 text-yellow-300 animate-pulse-gentle" />
    </div>
  );
};

const SunshineClub = () => {
  const isMobile = useIsMobile();
  
  // Plans data for membership comparison
  const plans = [{
    name: "FullTimer",
    price: "$19",
    originalPrice: "$29",
    description: "All-access pass for verified full-time students – perks, discounts, community events, and more.",
    features: {
      newsletter: true,
      travelRules: true,
      cityGuides: true,
      isicCard: true,
      chatSupport: true,
      phoneSupport: true,
      itineraries: true,
      webinars: true,
      community: true,
      localEvents: true
    },
    highlight: true,
    spotsLeft: "24"
  }, {
    name: "PartTimer",
    price: "$19",
    description: "Great for part-time students – flexible perks and partial access tailored to your schedule.",
    features: {
      newsletter: true,
      travelRules: true,
      cityGuides: true,
      isicCard: false,
      chatSupport: true,
      phoneSupport: false,
      itineraries: true,
      webinars: true,
      community: true,
      localEvents: true
    },
    highlight: false
  }, {
    name: "FreeTimer",
    price: "Free",
    description: "Stay in the loop with our newsletter – updates, offers, and student stories straight to your inbox.",
    features: {
      newsletter: true,
      travelRules: false,
      cityGuides: false,
      isicCard: false,
      chatSupport: false,
      phoneSupport: false,
      itineraries: false,
      webinars: false,
      community: false,
      localEvents: false
    }
  }];

  const featureLabels = {
    newsletter: "Curated Newsletter",
    travelRules: "10 Top Secret Non-Negotiable Student Travel Rules",
    cityGuides: "Student City Guides",
    isicCard: "ISIC Card & Exclusive Student Discounts (save $2-300/week)",
    chatSupport: "Chat Support",
    phoneSupport: "Phone Support",
    itineraries: "Daily Itineraries When You Travel (Skip FOMO)",
    webinars: "Webinars",
    community: "Local Student Community Groups",
    localEvents: "Local Events"
  };
  
  // University logos and names mapping - updated with all the provided logos
  const universityLogos = [{
    name: "Harvard",
    logo: "/lovable-uploads/c856622f-59f3-4cd0-baa8-09350023937b.png"
  }, {
    name: "Oxford",
    logo: "/lovable-uploads/d28c8881-1159-4531-b72a-ceb919332f52.png"
  }, {
    name: "ETH Zurich",
    logo: "/lovable-uploads/bcb9c431-76ba-47f7-906e-c88f2aaf1d88.png"
  }, {
    name: "Stanford",
    logo: "/lovable-uploads/832dd1b4-4324-40a9-9c84-0a823be50f5a.png"
  }, {
    name: "Yale",
    logo: "/lovable-uploads/d3f54b62-f843-4732-8aae-27f9e7d51dda.png"
  }, {
    name: "Princeton",
    logo: "/lovable-uploads/c8ee8c54-1ae7-490f-bbb8-75978c486431.png"
  }, {
    name: "Columbia",
    logo: "/lovable-uploads/544e57e6-94ce-4b89-b52a-9d1dabf9b0ea.png"
  }, {
    name: "Cambridge",
    logo: "/lovable-uploads/6fdda045-a019-489d-87a3-d823664a0cbf.png"
  }, {
    name: "Berkeley",
    logo: "/lovable-uploads/b66cce02-8ef6-42d3-8be3-fb538945490c.png"
  }, {
    name: "Chicago",
    logo: "/lovable-uploads/5a230154-15a8-46a9-97f3-3d89677f6a3d.png"
  }, {
    name: "UPenn",
    logo: "/lovable-uploads/698b81da-180a-47a2-b935-1dd063b0a8dc.png"
  }, {
    name: "Caltech",
    logo: "/lovable-uploads/2b49a586-03d5-49ba-855f-dd59e013ea82.png"
  }, {
    name: "Cornell",
    logo: "/lovable-uploads/5c2d377d-29d1-42e0-bd60-bd389a75fe7d.png"
  }, {
    name: "Toronto",
    logo: "/lovable-uploads/e60195a2-9edf-437e-b71d-99fed66fa308.png"
  }, {
    name: "NUS",
    logo: "/lovable-uploads/67c190fc-8292-43b8-8383-b083e9313950.png"
  }, {
    name: "NTU",
    logo: "/lovable-uploads/2fd47381-217e-4a1d-b706-a5c716bf326c.png"
  }, {
    name: "HKUST",
    logo: "/lovable-uploads/32931c6d-d22e-4947-8eb7-556c36bbdf1f.png"
  }, {
    name: "Sydney",
    logo: "/lovable-uploads/befd5591-b9fd-40f1-b35e-1a1af3ef3ef3.png"
  }, {
    name: "Tsinghua",
    logo: "/lovable-uploads/6ea74ff7-ba75-4e2b-981f-bb9f813af6ed.png"
  }];

  // Keep the full list of universities for the counter
  const universities = ["Harvard", "Oxford", "MIT", "Stanford", "Yale", "Princeton", "Columbia", "Cambridge", "Berkeley", "Chicago", "UPenn", "Caltech", "Cornell", "Toronto", "NUS", "NTU", "HKUST", "Sydney", "Tsinghua", "UCLA", "NYU", "Duke", "Imperial", "ETH Zurich", "McGill", "ANU", "Tokyo", "Seoul", "Singapore"];
  return <section id="sunshine-club" className="py-16 relative">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Modern Header with sparkly effects */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 sunshine-accent mb-3">
            <Sun className="h-4 w-4" />
            <span>Join our community</span>
          </div>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-display mb-4 relative z-10 bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FDAD32] text-transparent drop-shadow-sm animate-pulse-gentle">
              THE SUNSHINE CLUB
            </h2>
            
            {/* Star dust animations positioned around the title */}
            <StarDust className="-top-4 -left-2" />
            <StarDust className="-top-2 -right-3" />
            <StarDust className="bottom-0 left-1/4" />
            <StarDust className="top-1/2 right-1/4" />
            <StarDust className="bottom-2 right-10" />
            
            {/* Extra star decoration */}
            <span className="absolute -top-6 right-0 text-yellow-300 animate-float">✨</span>
            <span className="absolute -bottom-4 left-4 text-yellow-400 animate-bounce-subtle">⭐</span>
            <span className="absolute top-1/3 -right-8 text-yellow-300 animate-spin-slow text-sm">✨</span>
            
            {/* Sun glow effect behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 blur-lg -z-10 transform scale-110"></div>
          </div>
        </div>

        {/* Add Journey Suns Component Here */}
        <JourneySuns />

        {/* Key Benefits - Modern Cards with Orange Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="sunshine-card group">
            <div className="h-12 w-12 modern-sun mb-4">
              <div className="modern-sun-icon flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Save Money</h3>
            <p className="text-gray-600">Average savings of $200/week with our exclusive student discounts and local tips.</p>
          </div>
          
          <div className="sunshine-card group">
            <div className="h-12 w-12 modern-sun mb-4">
              <div className="modern-sun-icon flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Travel</h3>
            <p className="text-gray-600">Experience cities like a local with hidden gems and cultural connections.</p>
          </div>
          
          <div className="sunshine-card group">
            <div className="h-12 w-12 modern-sun mb-4">
              <div className="modern-sun-icon flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Travel Buddy</h3>
            <p className="text-gray-600">Get support, advice, and make friends with fellow student travelers.</p>
          </div>
        </div>
        
        {/* Membership details section - Moved from Offering.tsx */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#fdad32] to-[#fe4c02] px-6 py-2 rounded-lg mb-4 flex items-center justify-center">
              <Timer className="h-6 w-6 text-white mr-2" />
              <h2 className="text-3xl md:text-4xl font-display mb-0 text-white">MEMBERSHIP DETAILS</h2>
            </div>
            <p className="text-xl text-[#fe4c02] font-handwritten">Choose the perfect plan for your student adventures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FullTimer highlighted prominently */}
            <Card className="border-2 border-[#fdad32] shadow-xl relative overflow-hidden scale-105 z-10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white font-bold px-4 py-2 rounded-bl-md">
                BEST VALUE
              </div>
              
              <div className="absolute top-0 left-0 right-0 bg-[#e93546] text-white text-center py-2">
                <div className="flex items-center justify-center gap-1">
                  <Timer className="h-4 w-4" />
                  <span className="font-bold">ONLY {plans[0].spotsLeft} SPOTS LEFT</span>
                </div>
              </div>
              
              <div className="pt-12 px-6 pb-6 bg-gradient-to-b from-[#ffeea6]/30 to-white">
                <div className="bg-white p-4 rounded-lg border border-[#fdad32]/30 mb-6">
                  <h3 className="font-display text-3xl text-[#fdad32] mb-1">FULLTIMER</h3>
                  <p className="text-gray-800 font-medium mb-2">The Complete Student Travel Experience</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#fdad32]">{plans[0].price}</span>
                    <span className="ml-2 text-gray-500 line-through">{plans[0].originalPrice}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 font-medium">
                  Unlock <span className="text-[#fe4c02]">ALL student travel perks</span> plus exclusive access to special events & VIP support
                </p>
                
                <ul className="space-y-3 mb-6 bg-white p-4 rounded-lg border border-[#fdad32]/30">
                  {Object.entries(plans[0].features).map(([key, enabled]) => enabled ? <li key={key} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#fdad32] shrink-0 mt-0.5" />
                        <span className="font-medium">{featureLabels[key]}</span>
                      </li> : null)}
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#fe4c02] shrink-0 mt-0.5" />
                    <span className="font-medium text-[#fe4c02]">30% OFF for limited time!</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-center mb-6">
                  <SunnyMascot withText message="Best choice for most students!" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white font-bold text-lg py-6 flex items-center justify-center gap-2 rounded-full">
                  <UserRound className="h-5 w-5" />
                  GET FULLTIMER NOW
                </Button>
                
                <p className="text-center text-sm mt-2 text-gray-600 font-handwritten text-base">
                  30-day money back guarantee
                </p>
              </div>
            </Card>

            {/* PartTimer shown second */}
            <Card className="border border-gray-200 relative overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-display mb-2">{plans[1].name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#fdad32]">{plans[1].price}</span>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{plans[1].description}</p>
                
                <ul className="space-y-2 mb-8 text-sm">
                  {Object.entries(plans[1].features).filter(([_, enabled]) => enabled).slice(0, 5).map(([key]) => <li key={key} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#fdad32] shrink-0 mt-0.5" />
                      <span>{featureLabels[key]}</span>
                    </li>)}
                  <li className="text-gray-500 text-sm">+ 5 more features</li>
                </ul>
                
                <Button className="w-full bg-[#fdad32] hover:bg-[#fe4c02] text-white font-bold text-sm rounded-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
            
            {/* FreeTimer shown last & smallest */}
            <Card className="border border-gray-200 relative overflow-hidden opacity-80">
              <CardContent className="p-6">
                <h3 className="text-xl font-display mb-2">{plans[2].name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#fdad32]">{plans[2].price}</span>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{plans[2].description}</p>
                
                <ul className="space-y-2 mb-8 text-sm">
                  {Object.entries(plans[2].features).map(([key, enabled]) => enabled ? <li key={key} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#fdad32] shrink-0 mt-0.5" />
                        <span>{featureLabels[key]}</span>
                      </li> : null)}
                </ul>
                
                <Button className="w-full bg-[#ffeea6] hover:bg-[#fdad32] text-[#fe4c02] font-bold text-sm rounded-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Compare All Features Table */}
          <div className="mt-12 bg-white rounded-lg p-6 border border-[#fdad32]/20 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Compare All Features</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Benefits</TableHead>
                    <TableHead className="bg-gradient-to-r from-[#fdad32]/20 to-[#fe4c02]/20">FullTimer</TableHead>
                    <TableHead>PartTimer</TableHead>
                    <TableHead>FreeTimer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(featureLabels).map(([key, label]) => <TableRow key={key}>
                      <TableCell className="font-medium">{label}</TableCell>
                      <TableCell className="text-center bg-[#fdad32]/10">
                        {plans[0].features[key] ? <CheckCircle className="h-5 w-5 mx-auto text-[#fdad32]" /> : <span className="text-gray-300">—</span>}
                      </TableCell>
                      <TableCell className="text-center">
                        {plans[1].features[key] ? <CheckCircle className="h-5 w-5 mx-auto text-[#fdad32]" /> : <span className="text-gray-300">—</span>}
                      </TableCell>
                      <TableCell className="text-center">
                        {plans[2].features[key] ? <CheckCircle className="h-5 w-5 mx-auto text-[#fdad32]" /> : <span className="text-gray-300">—</span>}
                      </TableCell>
                    </TableRow>)}
                  <TableRow>
                    <TableCell className="font-medium">Price</TableCell>
                    <TableCell className="text-center bg-[#fdad32]/10">
                      <span className="line-through text-gray-400">$29</span>{" "}
                      <span className="font-bold">$19</span>
                    </TableCell>
                    <TableCell className="text-center">$19</TableCell>
                    <TableCell className="text-center">Free</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Membership comparison table - modernized */}
        <Table>
          <TableHeader>
            <TableRow>
              
              
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              
              
            </TableRow>
            <TableRow>
              
              
            </TableRow>
          </TableBody>
        </Table>

        {/* Bonus Section - Modernized */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">EXTRA BONUSES</h2>
            <p className="text-gray-600">Included with both membership plans</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-2 border-[#FFD600]/30 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="font-bold mb-1">Top Travel Apps</h3>
                <p className="text-sm text-gray-600">Essential apps for your trip</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FFD600]/30 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Exclusive Deals</h3>
                <p className="text-sm text-gray-600">Special student prices</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FFD600]/30 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Travel Confidence</h3>
                <p className="text-sm text-gray-600">Feel secure anywhere</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FFD600]/30 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Live Webinars</h3>
                <p className="text-sm text-gray-600">Monthly Q&A sessions</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trusted By Section - Optimized for mobile and styled like the main header */}
        <div className="mb-16">
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center ${isMobile ? 'gap-2' : 'gap-4'} mb-8 py-4 border-y-2 border-[#FFD600]/50`}>
            <div className="relative inline-block">
              <h2 className="text-2xl font-bold font-display text-center bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FDAD32] text-transparent drop-shadow-sm animate-pulse-gentle">
                IN COOPERATION WITH
              </h2>
              {/* Star dust animations for the heading */}
              <StarDust className="-top-2 -left-1" />
              <StarDust className="bottom-0 left-1/3" />
              {/* Extra star decoration */}
              <span className="absolute -top-4 right-0 text-yellow-300 animate-float">✨</span>
            </div>
            
            <img 
              alt="ISIC Logo" 
              className={`${isMobile ? 'w-4/5 my-2' : 'h-16'} object-contain`} 
              src="/lovable-uploads/c0f8247c-d5d1-4768-9367-f6ba825e44ce.png" 
            />
            
            <div className="relative inline-block">
              <h2 className="text-2xl font-bold font-display text-center bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FDAD32] text-transparent drop-shadow-sm animate-pulse-gentle">
                TRUSTED BY THE TOP GLOBAL UNIVERSITIES
              </h2>
              {/* Star dust animations for the heading */}
              <StarDust className="-top-2 -right-1" />
              <StarDust className="bottom-0 right-1/3" />
              {/* Extra star decoration */}
              <span className="absolute -bottom-4 left-2 text-yellow-400 animate-bounce-subtle">⭐</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center">
            {universityLogos.slice(0, 18).map((uni, index) => <div key={index} className="university-stamp mx-auto">
                <img src={uni.logo} alt={`${uni.name} University`} className="w-full h-full object-contain p-1" />
              </div>)}
          </div>
        </div>

        {/* This is for you if section - modernized with icons */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-sm border-2 border-[#FFD600]/20">
          <h2 className="text-2xl font-bold text-center mb-8">THIS IS FOR YOU IF...</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <p>Want to skip the headache of feeling overwhelmed when planning a trip</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <p>Want to connect with peers and make new friends across the globe</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <p>Want to be part of a movement that supports student travel and cultural exchange</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <DollarSign className="h-4 w-4 text-white" />
                </div>
                <p>Want to travel smart and get great experiences at the best prices</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <p>Need support when you're excited or stressed about your trip</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <p>Crave real stories and insider tips from people who understand student travel</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Centered button */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join the club?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your adventure with fellow students who love to travel smarter, not harder.
          </p>
          
          <div className="flex justify-center">
            <Button className="stb-button text-lg flex items-center gap-2 mx-auto">
              Join The Sunshine Club
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default SunshineClub;


import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { CheckCircle, Timer, UserRound, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SunnyMascot from './SunnyMascot';

const Offering = () => {
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

  return <section id="offering" className="py-16 bg-gradient-to-t from-[#ffeea6]/30 to-white relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
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

        {/* ISIC Verification Information - Updated with automatic verification */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg border border-[#fdad32]/20">
          <h3 className="text-2xl font-bold mb-4 text-[#fdad32]">New! Automatic Student Verification</h3>
          <p className="mb-4 text-lg">After purchase, our system will automatically verify your student status:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-[#ffeea6]/30 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white rounded-full h-6 w-6 flex items-center justify-center">1</span> 
                Instant Verification
              </h4>
              <p>Our system automatically checks your student email domain against our global database of 20,000+ educational institutions.</p>
            </div>
            
            <div className="bg-[#ffeea6]/30 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white rounded-full h-6 w-6 flex items-center justify-center">2</span> 
                Digital ISIC Card
              </h4>
              <p>Successfully verified students receive their digital ISIC card immediately through the ISIC app.</p>
            </div>
            
            <div className="bg-[#ffeea6]/30 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] text-white rounded-full h-6 w-6 flex items-center justify-center">3</span> 
                Fallback Options
              </h4>
              <p>If automatic verification fails, you can either submit manual verification documents or switch to our PartTimer plan.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-[#ffeea6]/30 p-4 rounded-lg mt-6">
            <SunnyMascot size="sm" />
            <p className="font-handwritten text-lg text-[#1e1e1e]">
              "Our new system verifies most students in seconds! If yours doesn't work, no worries - our team will help or you can enjoy PartTimer benefits instead!" - Sunny
            </p>
          </div>

          {/* University Partners Section - Moved before Bonus Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-center">Trusted by Students from Top Universities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-bold text-center">Harvard</p>
                <p className="text-xs text-gray-500 text-center">United States</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-bold text-center">Oxford</p>
                <p className="text-xs text-gray-500 text-center">United Kingdom</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-bold text-center">MIT</p>
                <p className="text-xs text-gray-500 text-center">United States</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <p className="font-bold text-center">Stanford</p>
                <p className="text-xs text-gray-500 text-center">United States</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">+ 20 more top universities worldwide</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
            <img src="/lovable-uploads/fce2b689-f403-4f89-9f79-0091c0c3be6f.png" alt="ISIC Logo" className="h-12 object-contain" />
            <img src="/lovable-uploads/43eabef1-8bb9-46f7-b153-0a0c02087110.png" alt="UNESCO Logo" className="h-12 object-contain" />
            <img src="/lovable-uploads/6d788043-5bb0-4bd1-aee1-41c5cedd3162.png" alt="University Partners" className="h-12 object-contain" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#fdad32]" />
                How does the automatic student verification work?
              </h4>
              <p className="mt-2 text-gray-700">Our system instantly verifies your student status using your .edu email or university domain. Most students are verified in seconds, with no document uploads needed!</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#fdad32]" />
                What if I'm not a full-time student?
              </h4>
              <p className="mt-2 text-gray-700">Part-time students can still get our PartTimer plan with many great benefits. Only the ISIC card requires full-time status.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-bold flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-[#fdad32]" />
                How quickly will I get my ISIC card?
              </h4>
              <p className="mt-2 text-gray-700">With automatic verification, your digital card is available within minutes. Physical cards (optional) take 1-2 weeks to arrive.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Offering;

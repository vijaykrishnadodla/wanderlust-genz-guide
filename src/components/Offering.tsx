
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { CheckCircle, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Offering = () => {
  const plans = [{
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
    timer: "30 days"
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
  
  return (
    <section id="offering" className="py-16 bg-gradient-to-t from-[#FDE1D3] to-white relative">
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform -rotate-1 mb-4 flex items-center justify-center">
            <Timer className="h-6 w-6 text-[#F97316] mr-2" />
            <h2 className="text-3xl md:text-4xl font-display mb-0">MEMBERSHIP DETAILS</h2>
          </div>
          <p className="text-xl italic text-[#F97316]">Choose the perfect plan for your student adventures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FreeTimer & PartTimer shown smaller */}
          <Card className="border border-gray-200 relative overflow-hidden transform -rotate-1 opacity-80 hover:opacity-100 transition-opacity">
            <CardContent className="p-6">
              <h3 className="text-xl font-display mb-2">{plans[0].name}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold">{plans[0].price}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">{plans[0].description}</p>
              
              <ul className="space-y-2 mb-8 text-sm">
                {Object.entries(plans[0].features).map(([key, enabled]) => 
                  enabled ? (
                    <li key={key} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                      <span>{featureLabels[key]}</span>
                    </li>
                  ) : null
                )}
              </ul>
              
              <Button className="w-full bg-[#FEF7CD] hover:bg-[#FEC6A1] text-black font-bold text-sm">
                Choose Plan
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 relative overflow-hidden transform rotate-1 opacity-80 hover:opacity-100 transition-opacity">
            <CardContent className="p-6">
              <h3 className="text-xl font-display mb-2">{plans[1].name}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold">{plans[1].price}</span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">{plans[1].description}</p>
              
              <ul className="space-y-2 mb-8 text-sm">
                {Object.entries(plans[1].features).filter(([_, enabled]) => enabled).slice(0, 5).map(([key]) => (
                  <li key={key} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
                    <span>{featureLabels[key]}</span>
                  </li>
                ))}
                <li className="text-gray-500 text-sm">+ 5 more features</li>
              </ul>
              
              <Button className="w-full bg-[#FEF7CD] hover:bg-[#FEC6A1] text-black font-bold text-sm">
                Choose Plan
              </Button>
            </CardContent>
          </Card>
          
          {/* FullTimer highlighted prominently */}
          <Card className="border-2 border-[#F97316] shadow-xl relative overflow-hidden transform -rotate-1 scale-105 z-10">
            <div className="absolute top-0 right-0 bg-[#F97316] text-white font-bold px-4 py-2 rounded-bl-md">
              BEST VALUE
            </div>
            
            <div className="absolute top-0 left-0 right-0 bg-[#ea384c] text-white text-center py-2">
              <div className="flex items-center justify-center gap-1">
                <Timer className="h-4 w-4" />
                <span className="font-bold">LIMITED OFFER: {plans[2].timer} REMAINING</span>
              </div>
            </div>
            
            <div className="pt-12 px-6 pb-6 bg-gradient-to-b from-[#FEF7CD]/30 to-white">
              <div className="bg-white p-4 rounded-lg border border-[#FEC6A1]/30 mb-6">
                <h3 className="font-display text-3xl text-[#F97316] mb-1">FULLTIMER</h3>
                <p className="text-gray-800 font-medium mb-2">The Complete Student Travel Experience</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-[#F97316]">{plans[2].price}</span>
                  <span className="ml-2 text-gray-500 line-through">{plans[2].originalPrice}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 font-medium">
                Unlock <span className="text-[#F97316]">ALL student travel perks</span> plus exclusive access to special events & VIP support
              </p>
              
              <ul className="space-y-3 mb-8 bg-white p-4 rounded-lg border border-[#FEC6A1]/30">
                {Object.entries(plans[2].features).map(([key, enabled]) => 
                  enabled ? (
                    <li key={key} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />
                      <span className="font-medium">{featureLabels[key]}</span>
                    </li>
                  ) : null
                )}
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#F97316] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#F97316]">30% OFF for limited time!</span>
                </li>
              </ul>
              
              <Button className="w-full bg-[#F97316] hover:bg-[#fe4c02] text-white font-bold text-lg py-6">
                GET FULLTIMER NOW
              </Button>
              <p className="text-center text-sm mt-2 text-gray-600 font-handwritten text-base">
                30-day money back guarantee
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 bg-[#FEF7CD]/40 rounded-lg p-6 transform -rotate-1 border border-[#FEC6A1]">
          <h3 className="text-xl font-bold mb-4">Compare All Features</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Benefits</TableHead>
                  <TableHead>FreeTimer</TableHead>
                  <TableHead>PartTimer</TableHead>
                  <TableHead className="bg-[#FEC6A1]/30">FullTimer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium">{label}</TableCell>
                    {plans.map((plan, i) => (
                      <TableCell key={i} className={`text-center ${i === 2 ? 'bg-[#FEC6A1]/10' : ''}`}>
                        {plan.features[key] ? (
                          <CheckCircle className={`h-5 w-5 mx-auto ${i === 2 ? 'text-[#F97316]' : 'text-[#F97316]/70'}`} />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  <TableCell className="text-center">Free</TableCell>
                  <TableCell className="text-center">$19</TableCell>
                  <TableCell className="text-center bg-[#FEC6A1]/10">
                    <span className="line-through text-gray-400">$29</span>{" "}
                    <span className="font-bold">$19</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offering;

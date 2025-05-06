import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { CheckCircle } from 'lucide-react';
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
  return <section id="offering" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">JOIN THE SUNSHINE CLUB</h2>
          <p className="text-xl">Warm sunny glow ✨ anywhere you go</p>
          <div className="flex justify-center">
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <Card key={index} className={`border ${plan.highlight ? 'border-stb-yellow shadow-xl' : 'border-gray-200'} relative overflow-hidden`}>
              {plan.highlight && <div className="absolute top-0 right-0 bg-stb-yellow text-black font-bold px-3 py-1 rounded-bl-md">
                  BEST VALUE
                </div>}
              {plan.timer && <div className="absolute top-0 left-0 right-0 bg-stb-pink text-white text-center py-1 text-sm">
                  Limited offer: {plan.timer} remaining
                </div>}
              <CardContent className="p-6">
                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.originalPrice && <span className="ml-2 text-gray-500 line-through">{plan.originalPrice}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {Object.entries(plan.features).map(([key, enabled]) => enabled ? <li key={key} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-stb-blue shrink-0 mt-0.5" />
                        <span>{featureLabels[key as keyof typeof featureLabels]}</span>
                      </li> : null)}
                </ul>
                
                <Button className={`w-full ${plan.highlight ? 'bg-stb-yellow hover:bg-stb-yellow-dark' : 'bg-stb-blue hover:bg-stb-blue-dark'} text-black font-bold`}>
                  Choose Plan
                </Button>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Compare All Features</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Benefits</TableHead>
                  <TableHead>FreeTimer</TableHead>
                  <TableHead>PartTimer</TableHead>
                  <TableHead>FullTimer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(featureLabels).map(([key, label]) => <TableRow key={key}>
                    <TableCell className="font-medium">{label}</TableCell>
                    {plans.map((plan, i) => <TableCell key={i} className="text-center">
                        {plan.features[key as keyof typeof plan.features] ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                      </TableCell>)}
                  </TableRow>)}
                <TableRow>
                  <TableCell className="font-medium">Price</TableCell>
                  <TableCell className="text-center">Free</TableCell>
                  <TableCell className="text-center">$19</TableCell>
                  <TableCell className="text-center">
                    <span className="line-through text-gray-400">$29</span>{" "}
                    <span className="font-bold">$19</span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>;
};
export default Offering;
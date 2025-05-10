
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Templates = () => {
  // Membership plans data
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container px-4 py-16 md:px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display mb-8 text-center">Membership Templates</h1>
        
        {/* Membership comparison table */}
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
                {Object.entries(featureLabels).map(([key, label]) => (
                  <TableRow key={key}>
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
                  </TableRow>
                ))}
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
          
          <div className="mt-8 flex justify-center">
            <Button className="bg-gradient-to-r from-[#fdad32] to-[#fe4c02] hover:brightness-105 text-white font-bold">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Templates;

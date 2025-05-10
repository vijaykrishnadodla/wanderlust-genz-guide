import React, { useState, useEffect } from 'react';
import { Sun, ArrowRight, Check, Users, Globe, DollarSign, MessageCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import JourneySuns from './JourneySuns';

const SunshineClub = () => {
  // University logos and names mapping - updated with all the provided logos
  const universityLogos = [
    { name: "Harvard", logo: "/lovable-uploads/2f0c4da4-6e39-4a7b-be74-64aa968d3eca.jpg" },
    { name: "Oxford", logo: "/lovable-uploads/d28c8881-1159-4531-b72a-ceb919332f52.png" },
    { name: "MIT", logo: "/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg" },
    { name: "Stanford", logo: "/lovable-uploads/832dd1b4-4324-40a9-9c84-0a823be50f5a.png" },
    { name: "Yale", logo: "/lovable-uploads/d3f54b62-f843-4732-8aae-27f9e7d51dda.png" },
    { name: "Princeton", logo: "/lovable-uploads/c8ee8c54-1ae7-490f-bbb8-75978c486431.png" },
    { name: "Columbia", logo: "/lovable-uploads/544e57e6-94ce-4b89-b52a-9d1dabf9b0ea.png" },
    { name: "Cambridge", logo: "/lovable-uploads/6fdda045-a019-489d-87a3-d823664a0cbf.png" },
    { name: "Berkeley", logo: "/lovable-uploads/b66cce02-8ef6-42d3-8be3-fb538945490c.png" },
    { name: "Chicago", logo: "/lovable-uploads/5a230154-15a8-46a9-97f3-3d89677f6a3d.png" },
    { name: "UPenn", logo: "/lovable-uploads/698b81da-180a-47a2-b935-1dd063b0a8dc.png" },
    { name: "Caltech", logo: "/lovable-uploads/2b49a586-03d5-49ba-855f-dd59e013ea82.png" },
    { name: "Cornell", logo: "/lovable-uploads/5c2d377d-29d1-42e0-bd60-bd389a75fe7d.png" },
    { name: "Toronto", logo: "/lovable-uploads/e60195a2-9edf-437e-b71d-99fed66fa308.png" },
    { name: "NUS", logo: "/lovable-uploads/67c190fc-8292-43b8-8383-b083e9313950.png" },
    { name: "NTU", logo: "/lovable-uploads/2fd47381-217e-4a1d-b706-a5c716bf326c.png" },
    { name: "HKUST", logo: "/lovable-uploads/32931c6d-d22e-4947-8eb7-556c36bbdf1f.png" },
    { name: "Sydney", logo: "/lovable-uploads/befd5591-b9fd-40f1-b35e-1a1af3ef3ef3.png" },
    { name: "Tsinghua", logo: "/lovable-uploads/6ea74ff7-ba75-4e2b-981f-bb9f813af6ed.png" },
  ];

  // Keep the full list of universities for the counter
  const universities = ["Harvard", "Oxford", "MIT", "Stanford", "Yale", "Princeton", "Columbia", "Cambridge", "Berkeley", "Chicago", "UPenn", "Caltech", "Cornell", "Toronto", "NUS", "NTU", "HKUST", "Sydney", "Tsinghua", "UCLA", "NYU", "Duke", "Imperial", "ETH Zurich", "McGill", "ANU", "Tokyo", "Seoul", "Singapore"];

  return <section id="sunshine-club" className="py-16 relative">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 sunshine-accent mb-3">
            <Sun className="h-4 w-4" />
            <span>Join our community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-4">THE SUNSHINE CLUB</h2>
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

        {/* Membership comparison table - modernized */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Membership</TableHead>
              <TableHead>Benefits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Basic</TableCell>
              <TableCell>Access to community forum</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Premium</TableCell>
              <TableCell>
                Everything in Basic, plus exclusive discounts and city guides
              </TableCell>
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

        {/* Trusted By Section - Now with University Logo Images - Updated with all logos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">TRUSTED BY</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center">
            {universityLogos.slice(0, 18).map((uni, index) => (
              <div key={index} className="university-stamp mx-auto">
                <img 
                  src={uni.logo} 
                  alt={`${uni.name} University`} 
                  className="w-full h-full object-contain p-1"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">+ {universities.length - 18} more top universities worldwide</p>
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

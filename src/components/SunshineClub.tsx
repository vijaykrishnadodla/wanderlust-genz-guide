import React, { useState, useEffect } from 'react';
import { Sun, ArrowRight, Check, Users, Globe, DollarSign, MessageCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import JourneySuns from './JourneySuns';
const SunshineClub = () => {
  // University logos for trusted by section
  const universities = ["Harvard", "Oxford", "MIT", "Stanford", "Yale", "Princeton", "Columbia", "Cambridge", "Berkeley", "UCLA", "NYU", "UPenn", "Caltech", "Duke", "Cornell", "UChicago", "Imperial", "ETH Zurich", "Toronto", "McGill", "ANU", "Tokyo", "Seoul", "Singapore"];
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
        <div className="bg-white rounded-xl shadow-md border-2 border-[#FFD600]/30 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#FFE0B2]/50 to-white">
            <h3 className="text-2xl font-bold text-[#FF7A00]">Membership Options</h3>
            <p className="text-[#1e1e1e]/70">Choose the plan that works for you</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#FEF7CD]/30">
                  <TableHead className="w-1/3">Features</TableHead>
                  <TableHead className="w-1/3 bg-[#FFD600]/20">
                    <div className="font-bold text-xl mb-1 text-[#FF7A00]">Fulltimer</div>
                    <div className="text-sm text-gray-600">For active students</div>
                  </TableHead>
                  <TableHead className="w-1/3">
                    <div className="font-bold text-xl mb-1">Part-timer</div>
                    <div className="text-sm text-gray-600">For occasional travelers</div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">10 student travel rules</TableCell>
                  <TableCell className="bg-[#FFD600]/10"><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">City guides</TableCell>
                  <TableCell className="bg-[#FFD600]/10"><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Live Q&A sessions</TableCell>
                  <TableCell className="bg-[#FFD600]/10"><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ISIC discounts</TableCell>
                  <TableCell className="bg-[#FFD600]/10"><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Community access</TableCell>
                  <TableCell className="bg-[#FFD600]/10"><Check className="h-5 w-5 text-[#FF7A00]" /></TableCell>
                  
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

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

        {/* Trusted By Section - With University Stamps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">TRUSTED BY</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-center items-center">
            {universities.slice(0, 12).map((uni, index) => <div key={index} className="university-stamp mx-auto">
                <span className="font-bold text-xs text-center">{uni}</span>
              </div>)}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">+ {universities.length - 12} more top universities worldwide</p>
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
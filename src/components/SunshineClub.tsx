
import React, { useState, useEffect } from 'react';
import { Sun, ArrowRight, Check, Users, Globe, DollarSign, MessageCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import JourneySuns from './JourneySuns';

const SunshineClub = () => {
  // State for the countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Effect for countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        let newDays = prevTime.days;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }
        
        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sunshine-club" className="py-16 bg-gradient-to-b from-[#FEF7CD]/40 to-white relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 sunshine-accent mb-3">
            <Sun className="h-4 w-4" />
            <span>Join our community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display mb-4">THE SUNSHINE CLUB</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Community of student travelers who save money and experience more authentic travel
          </p>
        </div>

        {/* Add Journey Suns Component Here */}
        <JourneySuns />

        {/* Key Benefits - Modern Cards */}
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold">Membership Options</h3>
            <p className="text-gray-600">Choose the plan that works for you</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3">Features</TableHead>
                  <TableHead className="w-1/3">
                    <div className="font-bold text-xl mb-1">Fulltimer</div>
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
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">City guides</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Live Q&A sessions</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ISIC discounts</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="text-gray-400">-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Community access</TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                  <TableCell><Check className="h-5 w-5 text-green-500" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pricing Section - Modern cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Fulltimer Pricing */}
          <div className="pricing-card pricing-card-highlight">
            <div className="pricing-card-accent"></div>
            
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Fulltimer</h3>
              <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">SPECIAL OFFER</Badge>
            </div>
            
            <div className="flex items-baseline mb-2">
              <span className="text-gray-400 line-through mr-2">$29</span>
              <span className="text-4xl font-bold text-[#F97316]">$19</span>
              <span className="text-gray-600 ml-1">/year</span>
            </div>
            
            {/* Simplified countdown timer */}
            <div className="flex items-center gap-1 mb-6 text-sm">
              <Sun className="h-4 w-4 text-[#F97316]" />
              <span>Limited time:</span>
              <span className="countdown-digit">{timeLeft.days.toString().padStart(2, '0')}</span>:
              <span className="countdown-digit">{timeLeft.hours.toString().padStart(2, '0')}</span>:
              <span className="countdown-digit">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
              <span className="countdown-digit">{timeLeft.seconds.toString().padStart(2, '0')}</span>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              Requires verification of full-time student status
            </p>
            
            <Button className="w-full">Choose Fulltimer</Button>
          </div>
          
          {/* Part Timer Pricing */}
          <div className="pricing-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Part Timer</h3>
              <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">STANDARD</Badge>
            </div>
            
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-gray-600 ml-1">/year</span>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              No verification required
            </p>
            
            <Button variant="outline" className="w-full">Choose Part Timer</Button>
          </div>
        </div>

        {/* Bonus Section - Modernized */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">EXTRA BONUSES</h2>
            <p className="text-gray-600">Included with both membership plans</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-0 shadow-sm hover:shadow transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="font-bold mb-1">Top Travel Apps</h3>
                <p className="text-sm text-gray-600">Essential apps for your trip</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Exclusive Deals</h3>
                <p className="text-sm text-gray-600">Special student prices</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Travel Confidence</h3>
                <p className="text-sm text-gray-600">Feel secure anywhere</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow transition-all">
              <CardContent className="p-5 text-center">
                <div className="h-10 w-10 bg-[#F97316]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video className="h-5 w-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold mb-1">Live Webinars</h3>
                <p className="text-sm text-gray-600">Monthly Q&A sessions</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trusted By Section - Modern */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">TRUSTED BY</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="brand-logo w-28">ISIC</div>
            <div className="brand-logo w-28">HARVARD</div>
            <div className="brand-logo w-28">OXFORD</div>
            <div className="brand-logo w-28">MIT</div>
            <div className="brand-logo w-28">STANFORD</div>
          </div>
        </div>

        {/* This is for you if section - modernized */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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

        {/* CTA Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join the club?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your adventure with fellow students who love to travel smarter, not harder.
          </p>
          
          <Button className="stb-button text-lg flex items-center gap-2 relative">
            Join The Sunshine Club
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SunshineClub;

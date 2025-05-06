import React, { useState, useEffect } from 'react';
import { Sun, UserRound, ArrowRight, Check, Users, Globe, DollarSign, MessageCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

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

  return <section id="sunshine-club" className="py-16 relative overflow-hidden">
      {/* Enhanced sun-themed background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FDE1D3]/80 to-white">
        <div className="absolute inset-0 opacity-5 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        {/* Reduced number of stylized sun patterns in background */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-gradient-to-br from-[#fdad32] to-[#F97316] opacity-30 animate-slow-pulse" 
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }} 
            />
          ))}
        </div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FEC6A1] px-6 py-2 rounded-lg transform -rotate-1 mb-4 flex flex-col items-center justify-center shadow-lg">
            <span className="font-handwritten text-2xl font-bold text-[#F97316] -mb-1 transform -rotate-2">JOIN</span>
            <div className="flex items-center justify-center">
              <Sun className="h-6 w-6 text-[#F97316] mr-2 sun-glow" />
              <h2 className="text-3xl md:text-4xl font-display mb-0">THE SUNSHINE CLUB</h2>
            </div>
          </div>
          <p className="text-xl italic text-[#F97316] max-w-2xl mx-auto">Community of student travelers ☀️Warm sunny glow ✨ Anywhere you go</p>
        </div>

        <div className="mb-10 relative"></div>

        {/* Enhanced Inspirational Yellow Sun Elements with rays and gradient */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <div className="sunshine-gradient rounded-full h-32 w-32 md:h-40 md:w-40 flex items-center justify-center p-4 shadow-lg transform rotate-2 sun-with-rays sun-glow">
            <p className="text-white text-center font-handwritten text-lg md:text-xl">you already have what it takes</p>
          </div>
          
          <ArrowRight className="text-[#F97316] h-8 w-8 hidden md:block sunshine-arrow" />
          
          <div className="sunshine-gradient rounded-full h-32 w-32 md:h-40 md:w-40 flex items-center justify-center p-4 shadow-lg transform -rotate-2 sun-with-rays sun-glow">
            <p className="text-white text-center font-handwritten text-lg md:text-xl">soul full of sunshine</p>
          </div>
          
          <ArrowRight className="text-[#F97316] h-8 w-8 hidden md:block sunshine-arrow" />
          
          <div className="sunshine-gradient rounded-full h-36 w-36 md:h-48 md:w-48 flex items-center justify-center p-4 shadow-lg transform rotate-3 sun-with-rays sun-glow">
            <p className="text-white text-center font-handwritten text-xl md:text-3xl font-bold">SHINE ON!</p>
          </div>
        </div>

        {/* Membership comparison table - styled with sunshine theme */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden relative">
          <div className="absolute -top-2 -right-2 sunshine-gradient rounded-full w-16 h-16 flex items-center justify-center sun-with-rays z-10">
            <Sun className="text-white h-8 w-8 animate-spin" style={{ animationDuration: '15s' }} />
          </div>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#FEC6A1]">
                <TableHead className="py-4 px-6 text-left"></TableHead>
                <TableHead className="py-4 px-6 text-left">
                  <span className="font-handwritten text-2xl text-[#C75D4D]">Fulltimer</span>
                </TableHead>
                <TableHead className="py-4 px-6 text-left">
                  <span className="font-handwritten text-2xl text-[#C75D4D]">Part timer</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-[#FEC6A1]/30">
                <TableCell className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">10 top secret spot-specific student travel rules</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
                <TableCell className="py-3 px-6"></TableCell>
              </TableRow>
              <TableRow className="border-b border-[#FEC6A1]/30">
                <TableCell className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">City guides</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
              </TableRow>
              <TableRow className="border-b border-[#FEC6A1]/30">
                <TableCell className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">Live webinar Q&A sessions</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
                <TableCell className="py-3 px-6"></TableCell>
              </TableRow>
              <TableRow className="border-b border-[#FEC6A1]/30">
                <TableCell className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">ISIC discount partnerships</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
                <TableCell className="py-3 px-6"></TableCell>
              </TableRow>
              <TableRow className="border-b border-[#FEC6A1]/30">
                <TableCell className="py-3 px-6 font-handwritten text-lg text-[#C75D4D]">Access to community chat groups</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
                <TableCell className="py-3 px-6">✓</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Pricing Section with Enhanced Sun animations */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          {/* Add a decorative large sun in the background */}
          <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none">
            <div className="sunshine-gradient rounded-full w-40 h-40 sun-with-rays"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fulltimer Pricing - Enhanced sun animation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#F97316] relative">
              {/* More dynamic sun rays and light waves */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Enhanced sun rays with gradients */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute rounded-full bg-gradient-to-r from-[#fdad32] to-[#F97316]"
                    style={{
                      width: `${Math.random() * 20 + 50}px`,
                      height: `${Math.random() * 20 + 50}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: '0.15',
                      animationDuration: `${Math.random() * 3 + 8}s`,
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  ></div>
                ))}
                
                {/* Enhanced light pulses with warmer colors */}
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i + 100} 
                    className="absolute rounded-full bg-gradient-to-br from-[#fdad32] to-[#F97316]"
                    style={{
                      width: `${Math.random() * 15 + 10}px`,
                      height: `${Math.random() * 15 + 10}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `pulse ${Math.random() * 4 + 6}s infinite ease-in-out`,
                      boxShadow: '0 0 8px rgba(253, 173, 50, 0.6)',
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  >
                    {/* Subtle sun glow */}
                    <div className="absolute inset-0 animate-pulse" style={{ 
                      background: 'radial-gradient(circle, rgba(253, 173, 50, 0.6) 0%, rgba(253, 173, 50, 0) 70%)',
                      transform: 'scale(1.8)',
                      animationDuration: '8s'
                    }}></div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 relative z-10">
                <div className="sunshine-gradient transform -rotate-2 p-2 rounded-md inline-block mb-4 shadow-md">
                  <h3 className="font-handwritten text-2xl text-white m-0">Fulltimer</h3>
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center">
                    <span className="text-lg text-gray-500 line-through">$29</span>
                    <span className="text-4xl font-bold ml-2 gradient-text">$19</span>
                    <span className="text-lg text-gray-600 ml-1">/year</span>
                  </div>
                </div>
                
                {/* Special offer badge and timer with sun icon */}
                <div className="mb-6">
                  <Badge variant="outline" className="mb-2 bg-red-100 text-red-600 border-red-600 font-bold">SPECIAL OFFER</Badge>
                  <div className="flex items-center gap-1 text-sm text-red-600">
                    {/* Enhanced sun animation */}
                    <div className="relative h-5 w-5 flex items-center justify-center">
                      <Sun className="h-4 w-4 text-[#F97316]" style={{ 
                        animation: 'ray-rotate 4s linear infinite',
                        filter: 'drop-shadow(0 0 3px rgba(253, 173, 50, 0.8))'
                      }} />
                      <div className="absolute inset-0 rounded-full" style={{ 
                        background: 'radial-gradient(circle, rgba(253, 96, 50, 0.3) 0%, rgba(253, 96, 50, 0) 70%)',
                        animation: 'pulse 4s infinite'
                      }}></div>
                    </div>
                    <span>LIMITED TIME: </span>
                    <div className="flex bg-red-50 p-1 rounded-md">
                      <div className="bg-gradient-to-r from-red-600 to-[#F97316] text-white px-1 rounded">
                        {timeLeft.days.toString().padStart(2, '0')}
                      </div>
                      <span className="px-1">:</span>
                      <div className="bg-gradient-to-r from-red-600 to-[#F97316] text-white px-1 rounded">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="px-1">:</span>
                      <div className="bg-gradient-to-r from-red-600 to-[#F97316] text-white px-1 rounded">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="px-1">:</span>
                      <div className="bg-gradient-to-r from-red-600 to-[#F97316] text-white px-1 rounded">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm italic mb-6">
                  *** Verification of full time student status necessary via email/SMS after purchase. 
                  If can't be verified automatically, gets partimer deal.
                </p>
                <Button className="stb-button w-full shadow-md">Choose Fulltimer</Button>
              </div>
            </div>
            
            {/* Part Timer Pricing */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="bg-gray-200 transform -rotate-2 p-2 rounded-md inline-block mb-4">
                  <h3 className="font-handwritten text-2xl text-gray-700 m-0">Part Timer</h3>
                </div>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-lg text-gray-600">/year</span>
                </div>
                <Badge variant="outline" className="mb-6 bg-gray-100">STANDARD</Badge>
                <p className="text-sm italic mb-6 invisible">
                  Placeholder for spacing
                </p>
                <Button className="w-full" variant="outline">Choose Part Timer</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Bonuses Section - with enhanced sun-styled cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-display text-center mb-8 text-[#F97316]">EXTRA BONUSES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Enhanced bonus cards with sun-themed styling */}
            <Card className="border-2 border-[#FEC6A1] bg-white/80 hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#fdad32]/10 to-[#F97316]/10 rounded-bl-full"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 sunshine-gradient rounded-full mx-auto mb-4 shadow-md sun-glow group-hover:scale-110 transition-transform">
                  <span className="text-xl text-white">📱</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Top Travel Apps</h3>
                <p className="text-center">Essential apps to have when planning your trip</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FEC6A1] bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 bg-[#FEC6A1]/20 rounded-full mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Amazing Deals</h3>
                <p className="text-center">Top travel websites with exclusive price deals</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FEC6A1] bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 bg-[#FEC6A1]/20 rounded-full mx-auto mb-4">
                  <Star className="h-6 w-6 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Confidence & Joy</h3>
                <p className="text-center">Super hyped feeling of confidence and joy in your travels</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#FEC6A1] bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 bg-[#FEC6A1]/20 rounded-full mx-auto mb-4">
                  <Video className="h-6 w-6 text-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Live Webinars</h3>
                <p className="text-center">Monthly webinar for you and your parents to ask any travel questions</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Logos */}
        <div className="mb-16">
          <h2 className="text-3xl font-display text-center mb-8 text-[#F97316]">TRUSTED BY</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="font-bold text-xl">ISIC</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="font-bold text-xl">HARVARD</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="font-bold text-xl">OXFORD</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="font-bold text-xl">MIT</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-12 w-32 flex items-center justify-center">
                <span className="font-bold text-xl">STANFORD</span>
              </div>
            </div>
          </div>
        </div>

        {/* This is for you if section - with enhanced styling */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-display text-center mb-8 text-[#F97316]">THIS IS FOR YOU IF...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Want to skip the headache of feeling overwhelmed from planning a trip and feel that someone's got your back</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Want to connect to peers and make new friends across the globe</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Want to be part of a great movement that supports student traveling, multicultural exchange and global peace</p>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Want to be money smart and get great experience for the best price</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Need a hype buddy to talk to when you're excited (or stressed) about your trip</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group hover:scale-105 transition-transform">
                <div className="sunshine-gradient p-2 rounded-full sun-glow">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg">Crave real stories, insider tips, and good vibes from people who get what student travel is really about</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit cards with enhanced sun styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform relative overflow-hidden">
            {/* Add subtle sun corner decoration */}
            <div className="absolute -top-4 -right-4 sunshine-gradient rounded-full w-16 h-16 opacity-10"></div>
            
            <h3 className="font-display text-xl mb-3 text-[#F97316]">SAVE MONEY</h3>
            <p className="text-lg mb-2">
              Members save an average of <span className="font-bold">$200/week</span> on travel costs with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Exclusive ISIC student discounts</li>
              <li>Insider pricing on accommodations</li>
              <li>Secret deal alerts from locals</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center sunshine-gradient bg-blend-overlay">
              <span className="text-5xl">💰</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">AUTHENTIC EXPERIENCES</h3>
            <p className="text-lg mb-2">
              Skip the tourist traps with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Hidden gem maps by local students</li>
              <li>Real cultural connections</li>
              <li>Instagram-worthy secret spots</li>
            </ul>
            <div className="polaroid transform -rotate-2 w-full h-40 flex items-center justify-center sunshine-gradient bg-blend-overlay">
              <span className="text-5xl">🌎</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform -rotate-1 border border-[#FEC6A1]/30 hover:-translate-y-2 transition-transform">
            <h3 className="font-display text-xl mb-3 text-[#F97316]">EMOTIONAL SUPPORT</h3>
            <p className="text-lg mb-2">
              We've got your back with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Live chat support during your trip</li>
              <li>Weekly community Zoom meetups</li>
              <li>City-specific WhatsApp groups</li>
            </ul>
            <div className="polaroid transform rotate-2 w-full h-40 flex items-center justify-center sunshine-gradient bg-blend-overlay">
              <span className="text-5xl">🌞</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="stb-button text-lg flex items-center gap-2 sun-glow">
            <UserRound className="h-5 w-5" />
            Join The Sunshine Club
          </Button>
          <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
            <span className="font-handwritten text-base">With Sunny by your side:</span> you'll never just go somewhere — you'll own it, love it, and come back changed
          </p>
        </div>
      </div>
    </section>;
};

export default SunshineClub;

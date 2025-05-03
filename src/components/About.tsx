
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookUser } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden shadow-xl border-none">
              <CardContent className="p-0">
                <div className="bg-stb-pink p-8 text-white">
                  <BookUser className="mb-4 h-12 w-12" />
                  <h3 className="text-xl font-display mb-4">OUR MISSION</h3>
                  <blockquote className="text-lg md:text-xl border-l-4 border-white pl-4 font-medium">
                    "Our mission is to help students travel smarter, explore confidently, and feel connected while discovering the world—fostering multicultural exchange to promote understanding, empathy, and global peace."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <span className="bg-stb-yellow/20 text-sm px-4 py-1 rounded-full">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-display mt-2 mb-6">
              WE'RE YOUR TRAVEL BESTIE
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Student Travel Buddy isn't just another travel blog or discount app. It's a smarter, more soulful way to travel — with a real plan, real perks, and a real buddy by your side.
              </p>
              <p>
                Inspired by countless adventures across 30+ countries, we created a digital avatar named Sunny, your travel bestie in the form of a fluffy mascot with a glowing aura and nonstop good vibes.
              </p>
              <p>
                With our personalized quiz, you'll get a travel plan tailored to you. With your official ISIC card, you'll unlock global student perks. With our guides and planners, you'll land in any city ready to move like a local — not a lost tourist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

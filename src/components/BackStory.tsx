import React from 'react';
import { BookOpen } from 'lucide-react';
const BackStory = () => {
  return <section id="backstory" className="py-16 bg-gradient-to-b from-white to-[#FEF7CD]/40 relative">
      {/* Film grain texture overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="polaroid transform rotate-3">
                <img alt="Dominika traveling" className="w-full h-auto object-cover retro-filter" src="/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg" />
                <p className="text-center font-handwritten mt-2">Exploring new horizons!</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-display text-[#F97316]">MEET DOMINIKA</h3>
              <p className="text-lg">
                I was just like you – a student with big travel dreams but a tiny budget. During my 
                exchange semester in Barcelona, I made <span className="text-[#F97316] font-medium">all the classic travel mistakes</span>...
              </p>
              <p className="font-handwritten text-xl text-[#F97316]">
                "I spent too much on tourist traps and missed the authentic experiences that 
                were right around the corner."
              </p>
              <p className="text-lg">
                After countless travel fails and wins, I created a <span className="font-bold">system that helps students 
                travel smarter, spend less, and enjoy more</span>. Now I'm sharing it with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BackStory;
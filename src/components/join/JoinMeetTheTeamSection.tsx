import React from 'react';
import SunnyMascot from '@/components/SunnyMascot';

const JoinMeetTheTeamSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="inner max-w-3xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
          Who's behind it
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Dominika */}
          <div className="sunny-card p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden mb-3 shadow-sm border-2 border-background rotate-2">
              <img
                src="/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg"
                alt="Dominika, Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-base text-foreground mb-1">Dominika, Founder</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              30+ countries. 3 study-abroad programs. Built this because she wished it existed.
            </p>
          </div>

          {/* Sunny */}
          <div className="sunny-card p-6 flex flex-col items-center text-center">
            <div className="mb-3">
              <SunnyMascot size="md" />
            </div>
            <h3 className="font-display text-base text-foreground mb-1">Sunny, Your AI Travel Buddy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available 24/7 to answer questions, help you plan, and keep you confident on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMeetTheTeamSection;

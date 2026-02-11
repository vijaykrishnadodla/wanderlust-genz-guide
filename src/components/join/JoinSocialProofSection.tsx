import React from 'react';
import { Globe, GraduationCap, Compass, MapPin, Quote } from 'lucide-react';
const proofPoints = [{
  icon: Globe,
  text: "Official ISIC-issued cards (used in 130+ countries)"
}, {
  icon: GraduationCap,
  text: "Designed specifically for U.S. full-time students"
}, {
  icon: Compass,
  text: "Built by travelers who studied & lived abroad"
}, {
  icon: MapPin,
  text: "Used for Europe, UK, Asia & beyond"
}];
const testimonials = [{
  quote: "I finally booked my trip because everything felt clear.",
  name: "Matthew S., UIUC"
}, {
  quote: "I saved more than $200 in my first week.",
  name: "Emily R., U-M"
}, {
  quote: "This made traveling feel doable, not scary.",
  name: "Michael B., Penn"
}];
const JoinSocialProofSection = () => {
  return <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Trusted by students traveling all over the world
        </h2>

        {/* Proof icons row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {proofPoints.map((p, i) => {
          const Icon = p.icon;
          return <div key={i} className="flex items-center gap-3 sunny-card p-4 text-center sm:text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-base text-foreground">{p.text}</p>
              </div>;
        })}
        </div>

        {/* ISIC / UNESCO logos */}
        

        {/* University logos */}
        <p className="text-center text-sm text-muted-foreground mb-4 font-medium">Students from top universities trust us</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          {[{
          name: "Harvard",
          logo: "/lovable-uploads/c856622f-59f3-4cd0-baa8-09350023937b.png"
        }, {
          name: "Stanford",
          logo: "/lovable-uploads/832dd1b4-4324-40a9-9c84-0a823be50f5a.png"
        }, {
          name: "Yale",
          logo: "/lovable-uploads/d3f54b62-f843-4732-8aae-27f9e7d51dda.png"
        }, {
          name: "Princeton",
          logo: "/lovable-uploads/c8ee8c54-1ae7-490f-bbb8-75978c486431.png"
        }, {
          name: "Columbia",
          logo: "/lovable-uploads/544e57e6-94ce-4b89-b52a-9d1dabf9b0ea.png"
        }, {
          name: "Berkeley",
          logo: "/lovable-uploads/b66cce02-8ef6-42d3-8be3-fb538945490c.png"
        }, {
          name: "UPenn",
          logo: "/lovable-uploads/698b81da-180a-47a2-b935-1dd063b0a8dc.png"
        }, {
          name: "Cornell",
          logo: "/lovable-uploads/5c2d377d-29d1-42e0-bd60-bd389a75fe7d.png"
        }].map((uni, i) => <img key={i} src={uni.logo} alt={`${uni.name} University`} className="h-8 w-8 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />)}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => <div key={i} className="sunny-card p-6 text-center">
              <Quote className="h-6 w-6 text-primary/40 mx-auto mb-3" />
              <p className="text-lg text-foreground font-medium mb-3 italic">"{t.quote}"</p>
              <p className="text-sm text-muted-foreground">— {t.name}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default JoinSocialProofSection;
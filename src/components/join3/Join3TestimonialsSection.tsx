import React from 'react';
import { Quote } from 'lucide-react';
const testimonials = [{
  quote: "The ISIC card paid for itself almost immediately. Transport, attractions, and tours all over Europe.",
  attribution: "TripAdvisor User"
}, {
  quote: "Student discounts aren't advertised in most countries. ISIC is the only proof they accept.",
  attribution: "Reddit User"
}, {
  quote: "This app and student card helped us save on tickets, hotels, and transport across Europe.",
  attribution: "App Store Review"
}];
const universities = [{
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
}];
const Join3TestimonialsSection = () => {
  return <section className="py-16 md:py-24">
      <div className="inner">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center text-foreground mb-12">
          Built by a student traveler for student travelers.
        </h2>

        {/* Founder story block */}
        <div className="sunny-card max-w-4xl mx-auto p-5 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Polaroid photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                <img src="/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg" alt="Dominika, Founder" className="w-36 h-44 md:w-48 md:h-56 object-cover rounded" />
                <p className="text-center text-xs text-muted-foreground mt-2 font-medium">Founder & student traveler</p>
              </div>
            </div>

            {/* Bio text */}
            <div className="flex-1 space-y-3 md:space-y-4">
              <h3 className="font-display text-2xl text-foreground">HEY THERE, I AM DOMINIKA!</h3>

              <p className="text-muted-foreground leading-relaxed">
                Ever felt lost while planning trips? Confused by endless options? Unsure if you're getting ripped off? Or just lonely figuring it all out?
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I didn't just grow up traveling — I grew up learning how to live anywhere. From exploring Australia at 15 to studying in the U.S. and Norway, travel became part of who I am.
              </p>

              <p className="text-foreground italic leading-relaxed border-l-4 border-primary/30 pl-4">
                "I've now visited more than 30 countries — from Iceland to India, South Africa to Sri Lanka."
              </p>

              <p className="text-muted-foreground leading-relaxed">
                But I never traveled just for the photos. I traveled to learn how to live smarter, discover new perspectives, and find the authentic moments most tourists miss. And now, I pass that knowledge on to you.
              </p>

              <p className="font-handwritten text-2xl text-primary">
                Most students don't need more travel blogs. They need a friend who gets it.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="font-display text-xl sm:text-2xl text-center text-foreground mb-8">
          Real students. Real savings.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t, i) => <div key={i} className="sunny-card p-6 text-center">
              <Quote className="h-6 w-6 text-primary/40 mx-auto mb-3" />
              <p className="text-base text-foreground italic leading-relaxed mb-3">"{t.quote}"</p>
              <p className="text-sm text-muted-foreground font-medium">— {t.attribution}</p>
            </div>)}
        </div>

        {/* Trust reinforcement */}
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
          In cooperation with ISIC and trusted by students from top global universities.
        </p>

        {/* ISIC / UNESCO logos */}
        

        {/* University logos */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {universities.map((uni, i) => <img key={i} src={uni.logo} alt={`${uni.name} University`} className="h-8 w-8 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100" />)}
        </div>
      </div>
    </section>;
};
export default Join3TestimonialsSection;
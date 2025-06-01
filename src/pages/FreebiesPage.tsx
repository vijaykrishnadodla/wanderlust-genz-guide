
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Backpack, HelpCircle, MapPin, Crown, Globe, Users, Star, Heart, Clock, FileText } from 'lucide-react';
import SunnyMascot from '@/components/SunnyMascot';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FreebiesPage = () => {
  const handleDownload = (fileName: string) => {
    console.log(`Downloading: ${fileName}`);
  };

  const resources = [
    {
      id: 1,
      title: "The Ultimate Student Travel Guide",
      description: "Your complete starter pack for smart student travel. From packing secrets to safety hacks, we've got you covered.",
      features: ["Smart travel habits that save money", "ISIC card hacks for max savings", "Safety tips that actually work", "Budget strategies from pros"],
      icon: BookOpen,
      readTime: "15 min read",
      pages: "12 pages",
      downloads: "15k+",
      fileName: "general-travel-guide.pdf",
      category: "Getting Started",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Pack Light Like a Pro",
      description: "Stop lugging around heavy suitcases! This checklist will turn you into a packing ninja with genius tips from seasoned travelers.",
      features: ["Trip-length packing formulas", "Toiletry & tech checklists", "Carry-on optimization hacks", "Pro rolling techniques"],
      icon: Backpack,
      readTime: "10 min read",
      pages: "8 pages",
      downloads: "12k+",
      fileName: "packing-guide.pdf",
      category: "Packing",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "Student Travel FAQs — Solved!",
      description: "Got travel anxiety? This worry-killer guide answers every 'what if' scenario with real, actionable advice.",
      features: ["ISIC card usage tips", "What to do if you get sick abroad", "How to avoid tourist scams", "Travel insurance essentials"],
      icon: HelpCircle,
      readTime: "8 min read",
      pages: "10 pages",
      downloads: "8k+",
      fileName: "travel-faqs.pdf",
      category: "FAQ",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      title: "Cancun in 3 Days — Dream Itinerary",
      description: "Your blueprint for the perfect balance of culture, adventure, and beach bliss in paradise, all with student-friendly prices.",
      features: ["Day-by-day culture + chill plans", "Verified ISIC discounts", "Local food & ferry secrets", "Hidden gems + photo spots"],
      icon: MapPin,
      readTime: "12 min read",
      pages: "14 pages",
      downloads: "6k+",
      fileName: "cancun-itinerary.pdf",
      category: "Destination Guide",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200"
    },
    {
      id: 5,
      title: "Sunshine Club — Your Golden Key",
      description: "Your VIP pass to the ultimate student travel experience. Join 15,000+ savvy students who unlock exclusive perks worldwide.",
      features: ["Official ISIC card included", "Custom itineraries made for YOU", "150,000+ worldwide discounts", "Only $20 (incredible value!)"],
      icon: Crown,
      readTime: "5 min read",
      pages: "6 pages",
      downloads: "20k+",
      fileName: "sunshine-club-guide.pdf",
      category: "Membership",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sunny-yellow-light/30 to-sunny-orange-light/20 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <SunnyMascot size="lg" travelStyle="adventure" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display text-sunny-orange-dark mb-4">
              Free Student Travel Resources
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Download our collection of essential travel guides and start your adventure with confidence. 
              Everything you need to travel smarter, not harder.
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sunny-orange" />
                <span>50k+ downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Always free</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <div
                    key={resource.id}
                    className={`bg-white rounded-xl border-2 ${resource.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Card Header */}
                    <div className={`${resource.bgColor} p-6 border-b ${resource.borderColor}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                          <IconComponent className={`w-6 h-6 ${resource.iconColor}`} />
                        </div>
                        <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        {resource.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{resource.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          <span>{resource.pages}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-red-400" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <Button
                        onClick={() => handleDownload(resource.fileName)}
                        className="w-full bg-sunny-orange hover:bg-sunny-orange-dark text-white font-medium rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sunny-gradient py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <SunnyMascot size="md" travelStyle="cultural" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Ready for Your Personal Travel Plan?
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Take our 2-minute quiz and get a custom itinerary that matches your style, budget, and dreams.
            </p>
            
            <Button className="bg-white text-sunny-orange hover:bg-gray-100 font-bold px-8 py-3 rounded-full text-lg">
              Take the Quiz
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default FreebiesPage;

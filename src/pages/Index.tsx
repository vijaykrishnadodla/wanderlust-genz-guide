
import React, { useState } from 'react'; // Added useState for quiz result visibility
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// SunshineClub component is not directly used, its content is in the membership section
// import SunshineClub from '@/components/SunshineClub'; 
import WaveDivider from '@/components/WaveDivider'; // Using WaveDivider
import MiniSignUpForm from '@/components/MiniSignUpForm'; // Already in Hero, but if needed separately
import SunnyCard from '@/components/SunnyCard'; // Already in Hero
import QuizWizard from '@/components/QuizWizard'; // New Quiz
import GuideResultCard from '@/components/GuideResultCard'; // New Quiz Result
import LogoGrid from '@/components/LogoGrid'; // New
import CoreTraitsGrid from '@/components/CoreTraitsGrid'; // New
import AmbassadorForm from '@/components/AmbassadorForm'; // New
import Footer from '@/components/Footer';

// Removed unused imports like Testimonials, Features, BackStory, HowStarted, PricingSection, BenefitsSection
// as their content is now directly in Index.tsx or replaced by new components/structure.

const Index = () => {
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizFormData, setQuizFormData] = useState<Record<string, string> | null>(null);

  const handleQuizSubmit = (formData: Record<string, string>) => {
    setQuizFormData(formData); // You can use this data if needed for GuideResultCard
    setShowQuizResult(true);
    // Scroll to results if desired
    const resultsElement = document.getElementById('quiz-results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetQuiz = () => {
    setShowQuizResult(false);
    setQuizFormData(null);
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quizQuestions = [
    {id:'name',label:'What’s your name?'},
    {id:'destination',label:'Destination city? (or “Surprise me”)'},
    {id:'email',label:'Email for your guide + ISIC'},
    {id:'style',label:'Travel style',options:['Beach & Relaxation','Cultural Exploration','Educational','Adventure & Sports'],textareaPlaceholder:'Or describe your ideal trip'}
  ];

  return (
    // The main tag with id="page" and background is in App.tsx
    <>
      <Navbar />

      {/* ========== HERO ========== */}
      <section id="hero">
        <div className="inner">
          <Hero />
        </div>
        <WaveDivider />
      </section>

      {/* ========== QUIZ ========== */}
      <section id="quiz">
        {/* WaveDivider is not placed above quiz as per prompt structure */}
        <div className="inner py-20 text-center">
          <h2 className="text-3xl font-bold">STUDENT TRAVEL STYLE QUIZ</h2>
          <p className="mt-2">Discover your travel vibe + unlock exclusive perks!</p>
          {!showQuizResult ? (
            <QuizWizard
              questions={quizQuestions}
              onSubmit={handleQuizSubmit}
            />
          ) : (
            <div id="quiz-results">
              <GuideResultCard isVisible={showQuizResult} onReset={handleResetQuiz} />
            </div>
          )}
        </div>
        <WaveDivider flip />
      </section>

      {/* ========== BENEFITS ========== */}
      <section id="benefits">
        <WaveDivider /> {/* Added Wave as per prompt section structure */}
        <div className="inner py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">WHY STUDENTS LOVE US</h2>
          <ul className="grid sm:grid-cols-3 gap-6 text-left text-sm">
            <li><strong>Exclusive Access</strong><br/>Insider tips & discounts only for members</li>
            <li><strong>Save Money</strong><br/>Members save <span className="whitespace-nowrap">$200 / week</span> on average</li>
            <li><strong>Global Community</strong><br/>Connect with peers at top universities</li>
          </ul>
        </div>
        <WaveDivider flip />
      </section>

      {/* ========== MEMBERSHIP / SUNSHINE CLUB ========== */}
      <section id="membership">
        <WaveDivider /> {/* Added Wave as per prompt section structure */}
        <div className="inner py-24 space-y-16">
          <h2 className="text-3xl font-bold mb-4 text-center">THE SUNSHINE CLUB</h2>
          <section>
            <h3 className="font-bold text-xl mb-4">YOUR TRAVEL JOURNEY</h3>
            <ol className="grid sm:grid-cols-4 gap-6 text-sm">
              <li><strong>JOIN</strong><br/>Get verified + ISIC card</li>
              <li><strong>PLAN</strong><br/>Unlock discounts & itineraries</li>
              <li><strong>TRAVEL</strong><br/>Explore confidently</li>
              <li><strong>SHARE</strong><br/>Connect worldwide</li>
            </ol>
          </section>
          <section className="text-left">
            <p className="text-hyper font-bold mb-2">BEST VALUE · 30 % OFF (for limited time)</p>
            <h3 className="text-2xl font-extrabold">FULLTIMER — $20 / yr <span className="line-through ml-2 text-midnight/40">$29</span></h3>
            <ul className="list-disc ml-5 mt-4 space-y-1 text-sm">
              <li>ISIC card & global student discounts (save $200-300 / week)</li>
              <li>Student city guides + daily itineraries</li>
              <li>Top-secret travel-tips newsletter</li>
              <li>Chat & phone support + monthly Q&A webinars</li>
              <li>Local community & events</li>
            </ul>
            {/* TODO: Create /checkout page or link to payment provider */}
            <a href="/checkout" onClick={(e) => { e.preventDefault(); alert('Checkout page placeholder'); }} className="mt-6 inline-block bg-hyper text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition-opacity">GET FULLTIMER NOW</a>
            <p className="mt-2 text-xs opacity-60">Only 24 spots left at this price</p>
          </section>
          <section className="text-center">
            <p className="font-handwritten text-2xl mb-4">Trusted by students from top global universities</p>
            <LogoGrid logos="Harvard,Oxford,ETH,Stanford,Yale,Princeton,Columbia,Cambridge,Berkeley"/>
          </section>
        </div>
        <WaveDivider flip />
      </section>

      {/* ========== OUR STORY ========== */}
      <section id="story">
        <WaveDivider /> {/* Added Wave as per prompt section structure */}
        <div className="inner py-20 space-y-12">
          <h2 className="text-3xl font-bold">HEY THERE, I’M DOMINIKA!</h2>
          <p className="text-lg">I’ve visited 30 + countries since age 15. I created Student Travel Buddy so students could travel richer and spend smarter.</p>
          <h3 className="font-bold text-xl">THE PROBLEM</h3><p className="text-lg">Students overpay and miss hidden gems.</p>
          <h3 className="font-bold text-xl">THE SOLUTION</h3><p className="text-lg">A global community sharing insider discounts.</p>
          <h3 className="font-bold text-xl">THE RESULT</h3><p className="text-lg">Members save $200 / week and enjoy bigger adventures.</p>
          <CoreTraitsGrid/>
        </div>
        <WaveDivider flip />
      </section>

      {/* ========== AMBASSADORS ========== */}
      <section id="ambassadors">
        <WaveDivider /> {/* Added Wave as per prompt section structure */}
        <div className="inner py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Join our Ambassador Program</h2>
          <a href="#ambassador-form" className="mb-10 inline-block bg-hyper text-white px-10 py-4 rounded-full shadow hover:opacity-90 transition-opacity">
            Become our ambassador today!
          </a>
          <AmbassadorForm id="ambassador-form"
            fields={[
              'Full name','Best email','Mobile','Birthday (DD-MM-YYYY)',
              'Home base (city, state)','University + state','Lived abroad city,country',
              'Guide students there?','If not, preferred destination',
              'Upload résumé (PDF)','30-sec pitch (≤250 words)','Payout method',
              'Agree to T&C','Instagram @handle + followers','TikTok @handle + followers',
              'YouTube link + subs','Hours per week','Languages','Portfolio / video URL',
              'How did you hear?','Past ambassador gigs','Preferred chat channel'
            ]}
            submitTo="https://hooks.zapier.com/..." // Placeholder, will log to console
            successMessage="Thanks for applying — we’ll reply within 48 hrs!"
          />
        </div>
        {/* No WaveDivider below ambassadors as per prompt (Footer is next, and it handles its own top WaveDivider) */}
      </section>

      {/* ========== FOOTER ========== */}
      {/* WaveDivider for footer is part of the footer section structure */}
      <footer id="footer" className="bg-cream/90 backdrop-blur text-midnight">
        <WaveDivider flip /> {/* Added Wave as per prompt footer structure */}
        <div className="inner"> {/* Footer component now expects to be wrapped in inner */}
          <Footer />
        </div>
      </footer>
    </>
  );
};
export default Index;

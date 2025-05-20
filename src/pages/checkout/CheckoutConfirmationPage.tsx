import React, { useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import SunnyMascot from '@/components/SunnyMascot'; // Corrected import
import { Heart, Plane, Globe, UserRound, Check, ShieldCheck, Mail, FileText, PartyPopper } from 'lucide-react'; // Removed Confetti, Added PartyPopper
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Simple Confetti Particle Component
const ConfettiParticle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full w-2 h-2 animate-fall"
    style={{ ...style, animationDuration: `${Math.random() * 2 + 3}s`, animationDelay: `${Math.random() * 2}s` }}
  >
    <PartyPopper className="w-full h-full" /> {/* Changed from Confetti to PartyPopper */}
  </div>
);

const CheckoutConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { finalStatus } = (location.state as { finalStatus?: string }) || { finalStatus: 'unknown' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    switch (finalStatus) {
      case 'verified_auto':
        return (
          <>
            <ShieldCheck className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-display text-sunny-orange-dark mb-3">
              Instant Sunshine! You're Verified!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome aboard Student Travel Buddy! Sunny is already packing your digital ISIC card.
              Keep an eye on your email (and that sneaky spam folder!) for your login instructions and a warm welcome letter.
            </p>
            <div className="flex flex-wrap justify-center gap-2 my-6">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <Plane className="w-8 h-8 text-blue-500 animate-bounce-slow" />
                <Globe className="w-8 h-8 text-green-500 animate-spin-slow" />
                <UserRound className="w-8 h-8 text-yellow-500" />
                <Check className="w-8 h-8 text-green-600" />
            </div>
          </>
        );
      case 'manual_docs_submitted':
        return (
          <>
            <FileText className="h-20 w-20 text-blue-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-display text-sunny-orange-dark mb-3">
              Documents Received!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Thanks for sending your documents! Our team will review them within 24-48 hours.
              We'll email you as soon as your Student Travel Buddy membership is active. Get ready for adventure!
            </p>
          </>
        );
      case 'manual_email_later':
        return (
          <>
            <Mail className="h-20 w-20 text-sky-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-display text-sunny-orange-dark mb-3">
              Action Required: Email Your Docs!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Your order is confirmed! Please remember to email your verification document(s) to{' '}
              <strong className="text-sunny-orange">verifications@studenttravelbuddy.com</strong> within 48 hours.
              Include your name or order details if possible. We're excited to welcome you!
            </p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-3xl md:text-4xl font-display text-sunny-orange-dark mb-3">
              Order Processed!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for your order! Please check your email for further details and next steps.
            </p>
          </>
        );
    }
  };

  // Generate some confetti particles for verified_auto status
  const confettiParticles = finalStatus === 'verified_auto' 
    ? Array.from({ length: 30 }).map((_, i) => {
        const colors = ['#FFD700', '#FF6347', '#FFC0CB', '#87CEFA', '#DA70D6']; // Gold, Tomato, Pink, LightSkyBlue, Orchid
        return (
          <ConfettiParticle
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -50}%`, // Start above the screen
              color: colors[Math.floor(Math.random() * colors.length)], // Using color for PartyPopper
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        );
      })
    : null;

  return (
    <CheckoutLayout currentStep={4} totalSteps={4}>
      <div className="relative text-center max-w-xl mx-auto py-8 md:py-12 px-4 overflow-hidden">
        {confettiParticles}
        <div className="relative z-10"> {/* Content above confetti */}
          <div className="mb-8">
            <SunnyMascot size="lg" travelStyle={finalStatus === 'verified_auto' ? 'fashion' : 'default'} className="mx-auto" />
          </div>
          {renderContent()}
          <Button 
            onClick={() => navigate('/')} 
            className="w-full max-w-xs mx-auto mt-8 stb-button bg-sunny-orange hover:bg-sunny-orange-dark"
            size="lg"
          >
            Go to Homepage
          </Button>
           <p className="text-sm text-gray-500 mt-6">
            Questions? <Link to="/contact" className="text-sunny-orange hover:underline">Contact Support</Link>.
          </p>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutConfirmationPage;

// Add basic fall animation for confetti - this would typically go in a global CSS file or index.css
// For now, I'm including it here conceptually. You'd add these keyframes to your CSS.
/*
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
.animate-fall {
  animation-name: fall;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.animate-bounce-slow {
  animation: bounce 2s infinite;
}
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
*/
// NOTE: The CSS keyframes should be added to your `index.css` or a relevant global CSS file.
// I will add them to `index.css` as part of this update.

import React, { useEffect } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Heart, Globe, Plane, PartyPopper } from 'lucide-react';

const CheckoutConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // The image path provided by user upload - success state - UPDATED
  const sunnyMascotImageSuccess = "/lovable-uploads/e01b4658-0123-4f89-8570-6ac27d5408fa.png"; 
  // The new image path for manual review state
  const sunnyMascotImageManualReview = "/lovable-uploads/c00b5409-2e1c-406c-bddb-742712f51270.png"; 

  // Default to manual_required if no state is passed, or redirect
  const verificationStatus = location.state?.verificationStatus || 'manual_required'; 

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!location.state?.verificationStatus) {
      // If no status, maybe redirect to start or show a generic message
      // For now, let's assume it defaults as above or the flow ensures state is passed
      console.warn("CheckoutConfirmationPage loaded without verificationStatus in route state.");
    }
  }, [location.state]);

  const confettiPieces = Array.from({ length: 20 }).map((_, i) => {
    const colors = ["#FCE1F1", "#FFDD4D", "#6EE7B7", "#FCA5A5", "#93C5FD"];
    return {
      left: `${Math.random() * 90 + 5}%`, // Random horizontal position (5% to 95%)
      delay: `${Math.random() * 4}s`,    // Random delay
      duration: `${Math.random() * 2 + 3}s`, // Random duration (3s to 5s)
      color: colors[i % colors.length],
    };
  });

  if (verificationStatus === 'success') {
    return (
      <CheckoutLayout currentStep={4} totalSteps={4}>
        <style>{`
          @keyframes fall { 
            to { transform: translateY(100vh) rotate(360deg); opacity: 0; } 
          }
          .confetti-piece { 
            position: absolute; 
            width: 8px; height: 8px;
            background: var(--c, #fff); 
            opacity: .8;
            top: -20px; 
            left: var(--x); 
            animation: fall var(--d, 4s) linear var(--dl, 0s) infinite; 
          }
        `}</style>
        <section className="bg-[#0EAD69] text-white py-12 md:py-24 relative overflow-hidden rounded-lg">
          {confettiPieces.map((p, i) => (
            <div key={i} className="confetti-piece" style={{'--x': p.left, '--c': p.color, '--d': p.duration, '--dl': p.delay} as React.CSSProperties}></div>
          ))}
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 relative z-10 text-center md:text-left">
            <img 
              src={sunnyMascotImageSuccess} // This line is updated by changing the variable above
              width="300" // Adjusted from mockup slightly for responsiveness
              alt="Sunny celebrating" 
              className="max-w-[250px] md:max-w-[350px]"
            />
            <div className="max-w-md">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight flex items-center justify-center md:justify-start">
                Verified! <PartyPopper className="ml-2 h-8 w-8 text-yellow-300" /> Welcome aboard Student Travel Buddy!
              </h1>
              <p className="mt-4 text-md md:text-lg">
                Sunny is generating your digital ISIC right now.
                Keep an eye on your email — and peek at spam just in case — for login instructions and your welcome letter.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-yellow-300">
                <Heart size={20} />
                <Plane size={20} />
                <Globe size={20} />
              </div>
              <Link 
                to="/" 
                className="mt-8 md:mt-10 inline-block bg-white text-[#0EAD69] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors"
              >
                All set! Go to Homepage
              </Link>
            </div>
          </div>
        </section>
      </CheckoutLayout>
    );
  }

  // Manual Review or any other status
  return (
    <CheckoutLayout currentStep={4} totalSteps={4}>
      <section className="bg-gradient-to-br from-[#FFF9E5] to-[#FCE1F1] py-12 md:py-24 relative rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-6 text-center md:text-left">
          <img 
            src={sunnyMascotImageManualReview} 
            width="200" // Scaled smaller as per mockup logic
            alt="Sunny waiting" 
            className="max-w-[180px] md:max-w-[250px]"
          />
          <div className="max-w-md text-midnight">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-sunny-orange-dark">
              Hang tight – Sunny’s on it! ☀️
            </h1>
            <p className="mt-4 text-md md:text-lg">
              We’re double-checking your student proof. Expect an update within <b>48 hours</b>. 
              We’ll ping the inbox & phone you used at checkout the second you’re cleared.
            </p>
            <ul className="list-disc list-inside md:list-outside ml-0 md:ml-6 space-y-2 mt-6 text-left">
              <li>No action needed right now.</li>
              <li>Need it faster? Reply to the confirmation e-mail with “URGENT – FLIGHT”.</li>
              <li>Messed up your file? Use the link in that e-mail to replace it.</li>
            </ul>
            <p className="mt-6 text-sm italic">
              ISIC sales are final. If a doc fails, we’ll guide you to resubmit until approved.
            </p>
             <Link 
                to="/" 
                className="mt-8 md:mt-10 inline-block bg-sunny-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-sunny-orange-dark transition-colors"
              >
                Okay, Go to Homepage
              </Link>
          </div>
        </div>
      </section>
    </CheckoutLayout>
  );
};

export default CheckoutConfirmationPage;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

export type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

export const useVerification = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleVerification = async (selectedSchool: string, consentGiven: boolean) => {
    if (!selectedSchool) {
      setErrorMessage("Please select your school.");
      setVerificationStatus("error");
      return;
    }
    if (!consentGiven) {
      setErrorMessage("You must agree to the Student Status Verification Consent.");
      setVerificationStatus("error");
      return;
    }

    setVerificationStatus("loading");
    setErrorMessage("");

    // Simulate NSC API call
    await new Promise(resolve => setTimeout(resolve, 2500));

    const isSuccessfullyVerified = Math.random() > 0.3; // 70% chance of success

    if (isSuccessfullyVerified) {
      setVerificationStatus("success");
      toast({
        title: "Verified! 🎉",
        description: "Welcome aboard Student Travel Buddy! Your digital ISIC is being generated. Check your email (and spam folder) for login instructions.",
        variant: "default",
        duration: 7000,
      });
      sessionStorage.removeItem('stbCheckoutDetails');
    } else {
      setVerificationStatus("manual_required");
      setErrorMessage("We couldn’t verify you automatically. Please proceed to upload your documents.");
      toast({
        title: "Automatic Verification Failed",
        description: "Please proceed to upload your documents for manual verification.",
        variant: "destructive",
      });
    }
  };

  const handleCompleteAndGoHome = () => {
    navigate('/');
  };
  
  const handleProceedToManualUpload = () => {
    navigate('/checkout/upload-docs');
  };

  return {
    verificationStatus,
    errorMessage,
    handleVerification,
    handleCompleteAndGoHome,
    handleProceedToManualUpload,
    setErrorMessage, // Exposing this if direct error setting is needed outside handleVerification
    setVerificationStatus // Exposing this for flexibility
  };
};

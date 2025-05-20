
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast'; // Keep for potential other toasts

export type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

export const useVerification = () => {
  const navigate = useNavigate();
  const { toast } = useToast(); // Toast can still be used for errors during verification
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleVerification = async (selectedSchool: string, consentGiven: boolean) => {
    if (!selectedSchool) {
      setErrorMessage("Please select your school.");
      setVerificationStatus("error");
      toast({ // Keep error toast
        title: "Error",
        description: "Please select your school.",
        variant: "destructive",
      });
      return;
    }
    if (!consentGiven) {
      setErrorMessage("You must agree to the Student Status Verification Consent.");
      setVerificationStatus("error");
      toast({ // Keep error toast
        title: "Error",
        description: "You must agree to the Student Status Verification Consent.",
        variant: "destructive",
      });
      return;
    }

    setVerificationStatus("loading");
    setErrorMessage("");

    // Simulate NSC API call
    await new Promise(resolve => setTimeout(resolve, 2500));

    const isSuccessfullyVerified = Math.random() > 0.3; // 70% chance of success

    if (isSuccessfullyVerified) {
      setVerificationStatus("success");
      // Toast removed - will be handled by confirmation page
      sessionStorage.removeItem('stbCheckoutDetails');
    } else {
      setVerificationStatus("manual_required");
      setErrorMessage("We couldn’t verify you automatically. Please proceed to upload your documents.");
      // Toast removed - will be handled by confirmation page (via VerificationStatusDisplay on current page, and then dedicated page)
    }
  };

  // These navigation functions are called by buttons on CheckoutVerifyPage
  // The actual final navigation to confirmation page will happen from CheckoutVerifyPage or CheckoutUploadDocsPage
  const handleCompleteAndGoHome = () => {
    // This will be re-purposed or called from the confirmation page eventually
    // For now, CheckoutVerifyPage will handle its own nav to confirmation on success
    navigate('/');
  };
  
  const handleProceedToManualUpload = () => {
    navigate('/checkout/upload-docs');
  };

  return {
    verificationStatus,
    errorMessage,
    handleVerification,
    handleCompleteAndGoHome, // Exposed for potential use on confirmation page
    handleProceedToManualUpload,
    setErrorMessage,
    setVerificationStatus
  };
};


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast'; // Corrected import path

export type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

export const useVerification = () => {
  const navigate = useNavigate();
  const { toast } = useToast(); // Kept for potential other errors
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleVerification = async (selectedSchool: string, consentGiven: boolean) => {
    if (!selectedSchool) {
      setErrorMessage("Please select your school.");
      setVerificationStatus("error");
      toast({ title: "Validation Error", description: "Please select your school.", variant: "destructive" });
      return;
    }
    if (!consentGiven) {
      setErrorMessage("You must agree to the Student Status Verification Consent.");
      setVerificationStatus("error");
      toast({ title: "Validation Error", description: "You must agree to the Student Status Verification Consent.", variant: "destructive" });
      return;
    }

    setVerificationStatus("loading");
    setErrorMessage("");

    await new Promise(resolve => setTimeout(resolve, 2500));

    const isSuccessfullyVerified = Math.random() > 0.3; 

    if (isSuccessfullyVerified) {
      setVerificationStatus("success");
      sessionStorage.removeItem('stbCheckoutDetails');
      // Toasts removed, navigation handled by onClick in CheckoutVerifyPage
    } else {
      setVerificationStatus("manual_required");
      setErrorMessage("We couldn’t verify you automatically. Please proceed to upload your documents.");
      // Toasts removed, navigation handled by onClick in CheckoutVerifyPage or CheckoutUploadDocsPage
    }
  };

  const handleCompleteAndGoHome = () => {
    // Navigate to confirmation page with success status
    navigate('/checkout/confirmation', { state: { verificationStatus: 'success' } });
  };
  
  const handleProceedToManualUpload = () => {
    // Navigate to confirmation page with manual_required status, or to upload docs page if that's preferred first.
    // The user's flow implies after verify failure, they might go to confirmation page stating manual review.
    // If they explicitly chose to upload, that page handles its own navigation to confirmation.
    // For now, this specific function (called from verify page) means automatic verification failed, and they should see a manual review confirmation.
    navigate('/checkout/confirmation', { state: { verificationStatus: 'manual_required' } });
  };

  return {
    verificationStatus,
    errorMessage,
    handleVerification,
    handleCompleteAndGoHome,
    handleProceedToManualUpload,
    setErrorMessage, 
    setVerificationStatus
  };
};

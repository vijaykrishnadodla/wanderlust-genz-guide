
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

export const useVerification = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleVerification = async (schoolIdentifier: string, consentGiven: boolean, isManualEntry: boolean) => {
    console.log("useVerification - handleVerification called with:", { schoolIdentifier, consentGiven, isManualEntry });
    if (!schoolIdentifier) {
      setErrorMessage("Please select or enter your school.");
      setVerificationStatus("error");
      toast({ title: "Validation Error", description: "Please select or enter your school.", variant: "destructive" });
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

    await new Promise(resolve => setTimeout(resolve, 1500)); // Reduced delay for testing

    if (isManualEntry) {
      console.log("useVerification - Manual entry detected, setting to manual_required.");
      setVerificationStatus("manual_required");
      setErrorMessage("Your school was entered manually. Please proceed to upload your documents for verification.");
      // Navigation to upload docs is handled by the link in ComboSchoolField if user clicks it,
      // or by CheckoutVerifyPage if this status is reached after submitting form.
      // The 'Proceed to Confirmation (Manual Review)' button on CheckoutVerifyPage uses handleProceedToManualUpload.
      return; // Stop further processing for manual entries here.
    }

    // If not manual, proceed with existing (random) verification logic
    const isSuccessfullyVerified = Math.random() > 0.3; 

    if (isSuccessfullyVerified) {
      console.log("useVerification - Automatic verification successful.");
      setVerificationStatus("success");
      sessionStorage.removeItem('stbCheckoutDetails');
      // Toasts removed, navigation handled by onClick in CheckoutVerifyPage
    } else {
      console.log("useVerification - Automatic verification failed, setting to manual_required.");
      setVerificationStatus("manual_required");
      setErrorMessage("We couldn’t verify you automatically. Please proceed to upload your documents.");
      // Toasts removed, navigation handled by onClick in CheckoutVerifyPage or CheckoutUploadDocsPage
    }
  };

  const handleCompleteAndGoHome = () => {
    navigate('/checkout/confirmation', { state: { verificationStatus: 'success' } });
  };
  
  const handleProceedToManualUpload = () => {
    // This function is typically called when automatic verification fails,
    // or if the user is already on the verify page and it's determined they need manual upload.
    // It navigates to the confirmation page showing manual review is pending.
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

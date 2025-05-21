import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import type { BasicDetails, VerificationData } from '@/types/checkout'; // Import new types

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

    // Helper function to create/update stbVerificationData and clear stbCheckoutDetails
    const finalizeVerificationSession = (currentSchoolIdentifier: string) => {
      const storedDetailsString = sessionStorage.getItem('stbCheckoutDetails');
      if (storedDetailsString) {
        try {
          const storedDetails: BasicDetails = JSON.parse(storedDetailsString);
          const verificationDataToStore: VerificationData = {
            firstName: storedDetails.firstName,
            lastName: storedDetails.lastName,
            dateOfBirth: storedDetails.dateOfBirth,
            schoolIdentifier: currentSchoolIdentifier
          };
          sessionStorage.setItem('stbVerificationData', JSON.stringify(verificationDataToStore));
          console.log("useVerification - stbVerificationData set:", verificationDataToStore);
        } catch (e) {
          console.error("Error processing stored details for verification data in useVerification:", e);
        }
      }
      sessionStorage.removeItem('stbCheckoutDetails');
      console.log("useVerification - stbCheckoutDetails removed after finalizing session.");
    };

    await new Promise(resolve => setTimeout(resolve, 1500)); 

    if (isManualEntry) {
      console.log("useVerification - Manual entry detected, setting to manual_required.");
      finalizeVerificationSession(schoolIdentifier);
      setVerificationStatus("manual_required");
      setErrorMessage("Your school was entered manually. Please proceed to upload your documents for verification.");
      return; 
    }

    const isSuccessfullyVerified = Math.random() > 0.3; 

    finalizeVerificationSession(schoolIdentifier); // Called for both success and failure of auto-verification

    if (isSuccessfullyVerified) {
      console.log("useVerification - Automatic verification successful.");
      setVerificationStatus("success");
      // sessionStorage.removeItem('stbCheckoutDetails'); // Moved to finalizeVerificationSession
    } else {
      console.log("useVerification - Automatic verification failed, setting to manual_required.");
      setVerificationStatus("manual_required");
      setErrorMessage("We couldn’t verify you automatically. Please proceed to upload your documents.");
       // sessionStorage.removeItem('stbCheckoutDetails'); // Moved to finalizeVerificationSession
    }
  };

  const handleCompleteAndGoHome = () => {
    navigate('/checkout/confirmation/success');
  };
  
  const handleProceedToManualUpload = () => {
    navigate('/checkout/confirmation/manual');
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

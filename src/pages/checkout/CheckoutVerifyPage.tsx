
import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SchoolSelectField from '@/components/checkout/verification/SchoolSelectField';
import VerificationConsentCheckbox from '@/components/checkout/verification/VerificationConsentCheckbox';
import { useToast } from '@/components/ui/use-toast';

const mockSchools = [
  { value: "university_of_sunshine", label: "University of Sunshine" },
  { value: "college_of_travel_arts", label: "College of Travel Arts" },
  { value: "institute_of_adventure_studies", label: "Institute of Adventure Studies" },
  { value: "other", label: "Other (Specify)" }, // Example for future enhancement
];

type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

const CheckoutVerifyPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [consentGiven, setConsentGiven] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if user is 17+ (from PaymentSuccessPage logic or session)
    // For now, we assume they are, as they landed here.
    // In a real app, re-verify age or ensure session data is robust.
  }, []);

  const handleVerification = async () => {
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

    // Simulate different outcomes
    const isSuccessfullyVerified = Math.random() > 0.3; // 70% chance of success

    if (isSuccessfullyVerified) {
      setVerificationStatus("success");
      toast({
        title: "Verified! 🎉",
        description: "Welcome aboard Student Travel Buddy! Your digital ISIC is being generated. Check your email (and spam folder) for login instructions.",
        variant: "default",
        duration: 7000,
      });
      sessionStorage.removeItem('stbCheckoutDetails'); // Clear session after successful verification
      // Potentially navigate to a final "All Set" page or dashboard
      // For now, let's show success message and a button to go home
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


  const renderStatusMessage = () => {
    if (verificationStatus === "error" && errorMessage) {
      return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-6" role="alert">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <p className="font-bold">Verification Error</p>
              <p>{errorMessage}</p>
            </div>
          </div>
        </div>
      );
    }
    if (verificationStatus === "success") {
      return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-6" role="alert">
          <div className="flex">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
            <div>
              <p className="font-bold">Verified! 🎉</p>
              <p>Welcome aboard Student Travel Buddy! Sunny is generating your digital ISIC right now. Keep an eye on your email—and peek at your spam folder just in case—for the login instructions and welcome letter.</p>
            </div>
          </div>
        </div>
      );
    }
    if (verificationStatus === "manual_required") {
       return (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-6" role="alert">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3" />
            <div>
              <p className="font-bold">Manual Verification Required</p>
              <p>{errorMessage}</p>
            </div>
          </div>
        </div>
      );
    }
    if (verificationStatus === "idle" || verificationStatus === "loading") {
         return (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-6" role="alert">
              <p className="font-bold">Student Verification</p>
              <p>Please select your school and provide consent to proceed with verification.</p>
            </div>
         );
    }
    return null;
  };

  return (
    <CheckoutLayout currentStep={3} totalSteps={3}>
      <div className="text-center max-w-lg mx-auto">
        <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-2">
          Step 3: Verify Your Student Status
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Flash Your Student Creds ☀️. Select your institution and consent to verification.
        </p>

        {verificationStatus !== "success" && (
          <form onSubmit={(e) => { e.preventDefault(); handleVerification(); }} className="space-y-6">
            <SchoolSelectField
              selectedSchool={selectedSchool}
              onSchoolChange={setSelectedSchool}
              schools={mockSchools}
              disabled={verificationStatus === "loading"}
            />
            <VerificationConsentCheckbox
              isChecked={consentGiven}
              onCheckedChange={setConsentGiven}
              disabled={verificationStatus === "loading"}
            />
            {renderStatusMessage()}
            {verificationStatus !== "manual_required" && (
              <Button
                type="submit"
                className="w-full stb-button bg-sunny-orange hover:bg-sunny-orange-dark text-white"
                size="lg"
                disabled={verificationStatus === "loading"}
              >
                {verificationStatus === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Confirming your student status...
                  </>
                ) : (
                  'Verify Now'
                )}
              </Button>
            )}
          </form>
        )}
        
        {verificationStatus === "success" && (
          <>
            {renderStatusMessage()}
            <Button 
              onClick={handleCompleteAndGoHome} 
              className="w-full stb-button bg-green-500 hover:bg-green-600 text-white mt-6"
              size="lg"
            >
              All Set! Go to Homepage
            </Button>
          </>
        )}

        {verificationStatus === "manual_required" && (
           <>
            {renderStatusMessage()}
            <Button 
              onClick={handleProceedToManualUpload} 
              className="w-full stb-button bg-sunny-yellow hover:bg-sunny-yellow-dark text-midnight mt-6"
              size="lg"
            >
              Proceed to Upload Documents
            </Button>
           </>
        )}

        <p className="text-sm text-gray-500 mt-6">
          If you encounter any issues, please contact support.
        </p>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutVerifyPage;

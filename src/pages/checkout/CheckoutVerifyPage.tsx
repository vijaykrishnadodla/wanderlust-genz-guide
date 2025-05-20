import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SchoolSelectField from '@/components/checkout/verification/SchoolSelectField';
import VerificationConsentCheckbox from '@/components/checkout/verification/VerificationConsentCheckbox';
import { useToast } from '@/components/ui/use-toast';

interface ApiSchool {
  "FICE": string;
  "OPE ID": string;
  "Institution Name": string;
  "Street": string;
  "City": string;
  "State": string;
  "Zip": string;
  "Zip4": string | null;
  "Main": string;
  "Branch": string | null;
  "CIP": string;
}

interface School {
  value: string;
  label: string;
}

type VerificationStatus = "idle" | "loading" | "success" | "error" | "manual_required";

const mockSchools = [
  { value: "university_of_sunshine", label: "University of Sunshine" },
  { value: "college_of_travel_arts", label: "College of Travel Arts" },
  { value: "institute_of_adventure_studies", label: "Institute of Adventure Studies" },
  { value: "other", label: "Other (Specify)" }, // Example for future enhancement
];

const CheckoutVerifyPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [consentGiven, setConsentGiven] = useState<boolean>(false);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [schoolsList, setSchoolsList] = useState<School[]>([]);
  const [isLoadingSchools, setIsLoadingSchools] = useState<boolean>(true);
  const [schoolsError, setSchoolsError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchSchools = async () => {
      setIsLoadingSchools(true);
      setSchoolsError(null);
      try {
        const response = await fetch('https://docs.studentclearinghouse.org/vs/insights-json/participating-schools');
        if (!response.ok) {
          throw new Error(`Failed to fetch schools: ${response.statusText}`);
        }
        const data: ApiSchool[] = await response.json();
        const formattedSchools: School[] = data
          .filter(school => school["Institution Name"] && school["OPE ID"]) // Ensure essential fields are present
          .map(school => ({
            value: school["OPE ID"], // Using OPE ID as a unique value
            label: school["Institution Name"],
          }))
          .sort((a, b) => a.label.localeCompare(b.label)); // Sort schools alphabetically
        
        setSchoolsList(formattedSchools);
      } catch (error) {
        console.error("Error fetching schools:", error);
        setSchoolsError("Could not load the list of schools. Please try again later or contact support.");
        // You might want to set a default or mock list here as a fallback
        // setSchoolsList(mockSchools); // Or an empty array if no fallback
      } finally {
        setIsLoadingSchools(false);
      }
    };

    fetchSchools();
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
              {isLoadingSchools && <p className="mt-2">Loading school list...</p>}
              {schoolsError && <p className="mt-2 text-red-600">{schoolsError}</p>}
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
              schools={schoolsList}
              disabled={verificationStatus === "loading" || isLoadingSchools}
              placeholder={isLoadingSchools ? "Loading schools..." : (schoolsError ? "Error loading schools" : "Choose your institution...")}
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
                disabled={verificationStatus === "loading" || isLoadingSchools || !selectedSchool || !consentGiven || !!schoolsError}
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

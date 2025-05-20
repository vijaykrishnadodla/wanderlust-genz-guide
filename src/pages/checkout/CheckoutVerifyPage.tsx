
import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2 } from 'lucide-react';
import SchoolSelectField from '@/components/checkout/verification/SchoolSelectField';
import VerificationConsentCheckbox from '@/components/checkout/verification/VerificationConsentCheckbox';
import VerificationStatusDisplay from '@/components/checkout/verification/VerificationStatusDisplay';
import { useSchoolsList } from '@/hooks/useSchoolsList';
import { useVerification } from '@/hooks/useVerification';

const CheckoutVerifyPage = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>("");
  const [consentGiven, setConsentGiven] = useState<boolean>(false);

  const { schoolsList, isLoadingSchools, schoolsError } = useSchoolsList();
  const {
    verificationStatus,
    errorMessage,
    handleVerification,
    handleCompleteAndGoHome, // This will navigate to confirmation page
    handleProceedToManualUpload, // This will navigate to confirmation page
  } = useVerification();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleVerification(selectedSchool, consentGiven);
  };

  return (
    <CheckoutLayout currentStep={3} totalSteps={4}> {/* Updated totalSteps */}
      <div className="text-center max-w-lg mx-auto">
        <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-2">
          Step 3: Verify Your Student Status
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Flash Your Student Creds ☀️. Select your institution and consent to verification.
        </p>

        <VerificationStatusDisplay
          status={verificationStatus}
          errorMessage={errorMessage}
          isLoadingSchools={isLoadingSchools}
          schoolsError={schoolsError}
        />
        
        {verificationStatus !== "success" && verificationStatus !== "manual_required" && (
          <form onSubmit={handleSubmit} className="space-y-6">
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
          </form>
        )}
        
        {verificationStatus === "success" && (
          <>
            <Button 
              onClick={handleCompleteAndGoHome} // Navigates to confirmation
              className="w-full stb-button bg-green-500 hover:bg-green-600 text-white mt-6"
              size="lg"
            >
              Proceed to Confirmation
            </Button>
          </>
        )}

        {verificationStatus === "manual_required" && (
           <>
            <Button 
              onClick={handleProceedToManualUpload} // Navigates to confirmation
              className="w-full stb-button bg-sunny-yellow hover:bg-sunny-yellow-dark text-midnight mt-6"
              size="lg"
            >
              Proceed to Confirmation
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

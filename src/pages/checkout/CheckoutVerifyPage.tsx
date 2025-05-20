
import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Loader2 } from 'lucide-react';
// Remove SchoolSelectField import
import VerificationConsentCheckbox from '@/components/checkout/verification/VerificationConsentCheckbox';
import VerificationStatusDisplay from '@/components/checkout/verification/VerificationStatusDisplay';
import { useSchoolsList } from '@/hooks/useSchoolsList';
import { useVerification } from '@/hooks/useVerification';
import { ComboSchoolField } from '@/components/checkout/verification/ComboSchoolField'; // Import the new component
import { Label } from '@/components/ui/label'; // Import Label for the ComboSchoolField

const CheckoutVerifyPage = () => {
  const [schoolIdentifier, setSchoolIdentifier] = useState<string>(""); // Will store OPEID or manual text
  const [isSchoolManual, setIsSchoolManual] = useState<boolean>(false);
  const [consentGiven, setConsentGiven] = useState<boolean>(false);

  const { schoolsList, isLoadingSchools, schoolsError } = useSchoolsList();
  const {
    verificationStatus,
    errorMessage,
    handleVerification,
    handleCompleteAndGoHome,
    handleProceedToManualUpload, // This can still be used if direct verification fails leading to manual
  } = useVerification();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting verification with:", { schoolIdentifier, consentGiven, isSchoolManual });
    handleVerification(schoolIdentifier, consentGiven, isSchoolManual);
  };

  const isSubmitDisabled = 
    verificationStatus === "loading" || 
    isLoadingSchools || 
    !schoolIdentifier || 
    !consentGiven ||
    !!schoolsError;

  return (
    <CheckoutLayout currentStep={3} totalSteps={4}>
      <div className="text-center max-w-lg mx-auto">
        <ShieldCheck className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-2">
          Step 3: Verify Your Student Status
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Flash Your Student Creds ☀️. Select or enter your institution and consent to verification.
        </p>

        <VerificationStatusDisplay
          status={verificationStatus}
          errorMessage={errorMessage}
          isLoadingSchools={isLoadingSchools} // Pass these down if VerificationStatusDisplay needs them
          schoolsError={schoolsError}
        />
        
        {verificationStatus !== "success" && verificationStatus !== "manual_required" && (
          <form onSubmit={handleSubmit} className="space-y-6 text-left"> {/* Changed to text-left for label alignment */}
            <div>
              <Label htmlFor="school-combobox">Select or type your School/College <span className="text-red-500">*</span></Label>
              <ComboSchoolField
                identifier={schoolIdentifier}
                isManual={isSchoolManual}
                onIdentifierChange={setSchoolIdentifier}
                onIsManualChange={setIsSchoolManual}
                schools={schoolsList}
                isLoadingSchools={isLoadingSchools}
                schoolsError={schoolsError}
                disabled={verificationStatus === "loading"}
                placeholder="Select or type your school..."
              />
            </div>
            <VerificationConsentCheckbox
              isChecked={consentGiven}
              onCheckedChange={setConsentGiven}
              disabled={verificationStatus === "loading"}
            />
            <Button
              type="submit"
              className="w-full stb-button bg-sunny-orange hover:bg-sunny-orange-dark text-white"
              size="lg"
              disabled={isSubmitDisabled}
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
              onClick={handleCompleteAndGoHome}
              className="w-full stb-button bg-green-500 hover:bg-green-600 text-white mt-6"
              size="lg"
            >
              Proceed to Confirmation
            </Button>
          </>
        )}

        {verificationStatus === "manual_required" && (
           <>
            {/* This button might now primarily be triggered if auto-verification (with OPEID) fails,
                or if user was already in manual_required state from a previous step.
                The "Can't find school" link in ComboSchoolField directly navigates to upload docs. */}
            <Button 
              onClick={handleProceedToManualUpload} 
              className="w-full stb-button bg-sunny-yellow hover:bg-sunny-yellow-dark text-midnight mt-6"
              size="lg"
            >
              Proceed to Confirmation (Manual Review)
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

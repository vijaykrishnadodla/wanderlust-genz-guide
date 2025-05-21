import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { BasicDetails, VerificationData } from '@/types/checkout';

type UploadOption = "upload" | "emailLater";

const CheckoutUploadDocsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadOption, setUploadOption] = useState<UploadOption>("upload");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmitVerification = async () => {
    setIsProcessing(true);

    if (uploadOption === 'upload') {
      if (!selectedFile) {
        toast({
          title: "No File Selected",
          description: "Please select a document to upload.",
          variant: "destructive",
        });
        setIsProcessing(false);
        return;
      }
      console.log("Uploading file:", selectedFile.name);
      await new Promise(resolve => setTimeout(resolve, 2000)); 
    } else { 
      await new Promise(resolve => setTimeout(resolve, 500)); 
    }

    // Prepare stbVerificationData
    const storedDetailsString = sessionStorage.getItem('stbCheckoutDetails');
    let finalVerificationData: Partial<VerificationData> = {};

    const existingVDataString = sessionStorage.getItem('stbVerificationData');
    if (existingVDataString) {
        try {
            finalVerificationData = JSON.parse(existingVDataString);
        } catch (e) {
            console.error("Error parsing existing stbVerificationData in CheckoutUploadDocsPage:", e);
        }
    }

    if (storedDetailsString) {
        try {
            const storedDetails: BasicDetails = JSON.parse(storedDetailsString);
            finalVerificationData.firstName = storedDetails.firstName;
            finalVerificationData.lastName = storedDetails.lastName;
            finalVerificationData.dateOfBirth = storedDetails.dateOfBirth;
            // schoolIdentifier would be in finalVerificationData if set by useVerification
        } catch (e) {
            console.error("Error processing storedDetailsString in CheckoutUploadDocsPage:", e);
        }
    }
    
    if (Object.keys(finalVerificationData).length > 0) {
        sessionStorage.setItem('stbVerificationData', JSON.stringify(finalVerificationData));
        console.log("CheckoutUploadDocsPage - stbVerificationData set/updated:", finalVerificationData);
    }

    if (storedDetailsString) {
        sessionStorage.removeItem('stbCheckoutDetails');
        console.log("CheckoutUploadDocsPage - stbCheckoutDetails removed.");
    }
    
    setIsProcessing(false);
    navigate('/checkout/confirmation/manual');
  };

  return (
    <CheckoutLayout currentStep={3} totalSteps={4}> {/* Updated totalSteps */}
      <div className="text-center">
        {uploadOption === 'upload' ? (
            <UploadCloud className="h-16 w-16 text-sunny-orange mx-auto mb-6" />
        ) : (
            <Mail className="h-16 w-16 text-sky-500 mx-auto mb-6" />
        )}
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-4">
          Step 3: Provide Verification Documents
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Since you are under 17 or automatic verification was not possible, please provide a document for manual verification (e.g., student ID, enrollment letter). You can upload it now or choose to email it to us later.
        </p>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
          <RadioGroup defaultValue="upload" onValueChange={(value: UploadOption) => {
            setUploadOption(value);
            setSelectedFile(null); 
          }} className="mb-6 space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="upload" id="option-upload" />
              <Label htmlFor="option-upload" className="font-medium">Upload document now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="emailLater" id="option-email" />
              <Label htmlFor="option-email" className="font-medium">I'll email it later</Label>
            </div>
          </RadioGroup>

          {uploadOption === 'upload' && (
            <>
              <div className="mb-4">
                <label htmlFor="document-upload" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose document to upload (PDF, JPG, PNG)
                </label>
                <Input
                  id="document-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="stb-input"
                  accept=".pdf,.jpg,.jpeg,.png"
                  disabled={isProcessing}
                />
              </div>

              {selectedFile && (
                <div className="mb-4 p-3 bg-gray-100 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-700">{selectedFile.name}</span>
                  </div>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-xs text-red-500 hover:text-red-700"
                    disabled={isProcessing}
                  >
                    Remove
                  </button>
                </div>
              )}
            </>
          )}
          
          {uploadOption === 'emailLater' && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700">
              <p>You've chosen to email your documents. Please send them to <strong className="font-semibold">verifications@studenttravelbuddy.com</strong> within 48 hours. Don't forget to include your name and order details if possible!</p>
            </div>
          )}

          <Button
            onClick={handleSubmitVerification}
            disabled={isProcessing || (uploadOption === 'upload' && !selectedFile)}
            className="w-full stb-button bg-sunny-orange hover:bg-sunny-orange-dark text-white"
            size="lg"
          >
            {isProcessing ? (uploadOption === 'upload' ? "Uploading..." : "Processing...") : (uploadOption === 'upload' ? "Upload and Proceed" : "Complete Order & Proceed")}
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          {uploadOption === 'upload' ? "Your documents will be reviewed within 24-48 hours after submission." : "Please send your documents as soon as possible to avoid delays in your verification."}
          <br />
          If you have any questions, please contact support.
        </p>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutUploadDocsPage;

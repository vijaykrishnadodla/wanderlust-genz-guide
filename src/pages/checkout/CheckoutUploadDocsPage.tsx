
import React, { useEffect, useState } from 'react';
import CheckoutLayout from '@/components/checkout/CheckoutLayout';
import { Button } from '@/components/ui/button';
import { UploadCloud, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutUploadDocsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No File Selected",
        description: "Please select a document to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    // Placeholder for actual upload logic
    // In a real app, you would upload to Supabase Storage or another service
    console.log("Uploading file:", selectedFile.name);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate upload delay

    setIsUploading(false);
    toast({
      title: "Document Uploaded",
      description: `${selectedFile.name} has been submitted for review.`,
    });
    
    // Clear session storage or mark checkout as complete
    sessionStorage.removeItem('stbCheckoutDetails');
    // Navigate to a final thank you page or dashboard
    navigate('/');
  };

  return (
    <CheckoutLayout currentStep={3} totalSteps={3}>
      <div className="text-center">
        <UploadCloud className="h-16 w-16 text-sunny-orange mx-auto mb-6" />
        <h1 className="text-3xl font-display text-sunny-orange-dark mb-4">
          Step 3: Upload Verification Documents
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Since you are under 17, please upload a document for manual verification (e.g., student ID, enrollment letter).
        </p>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
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
              >
                Remove
              </button>
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full stb-button bg-sunny-orange hover:bg-sunny-orange-dark text-white"
            size="lg"
          >
            {isUploading ? "Uploading..." : "Upload and Complete Order"}
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Your documents will be reviewed within 24-48 hours.
          If you have any questions, please contact support.
        </p>
      </div>
    </CheckoutLayout>
  );
};

export default CheckoutUploadDocsPage;

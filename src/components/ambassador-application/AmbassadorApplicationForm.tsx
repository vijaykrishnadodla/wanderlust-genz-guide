
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
// Removed lucide-react imports for User, Clipboard, ChevronRight, etc. as they are not allowed or used here anymore.
// Individual field components will import their own icons if allowed and needed.
import { toast } from '@/hooks/use-toast';
import { ambassadorApplicationSchema, AmbassadorFormValues } from './ambassadorApplicationSchema';

// Import new field components
import FullNameField from './fields/FullNameField';
import AmbassadorEmailField from './fields/AmbassadorEmailField';
import AmbassadorMobileField from './fields/AmbassadorMobileField';
import BirthdayField from './fields/BirthdayField';
import HomeBaseUSField from './fields/HomeBaseUSField';
import CollegeUniversityField from './fields/CollegeUniversityField';
import AbroadLocationField from './fields/AbroadLocationField';
import GuideLocationCheckbox from './fields/GuideLocationCheckbox';
import PreferredDestinationsField from './fields/PreferredDestinationsField';
import ResumeUploadField from './fields/ResumeUploadField';
import PitchField from './fields/PitchField';
import PayoutMethodField from './fields/PayoutMethodField';
import LeadSourceHiddenField from './fields/LeadSourceHiddenField';
import InstagramHandleField from './fields/InstagramHandleField';
import TiktokHandleField from './fields/TiktokHandleField';
import YoutubeLinkField from './fields/YoutubeLinkField';
import HoursCommitmentField from './fields/HoursCommitmentField';
import LanguagesSpokenField from './fields/LanguagesSpokenField';
import PortfolioLinkField from './fields/PortfolioLinkField';
import HowHeardField from './fields/HowHeardField';
import PastGigsField from './fields/PastGigsField';
import PreferredChatField from './fields/PreferredChatField';
import AgreeToTermsCheckbox from './fields/AgreeToTermsCheckbox';

// PlaceholderField component is no longer needed and has been removed.

const AmbassadorApplicationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<AmbassadorFormValues>({
    resolver: zodResolver(ambassadorApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      birthday: "",
      homeBaseUS: "",
      collegeUniversity: "",
      abroadLocation: "",
      guideLocation: false,
      preferredDestinations: "",
      pitch: "",
      payoutMethod: "",
      agreeToTerms: false,
      leadSource: "website-ambassador-form", // This can be set based on URL params or other logic if needed
      instagramHandle: "",
      tiktokHandle: "",
      youtubeLink: "",
      hoursCommitment: "",
      languagesSpoken: "",
      portfolioLink: "",
      howHeard: "",
      pastGigs: "",
      preferredChat: "",
    },
  });

  const watchGuideLocation = form.watch("guideLocation");

  async function onSubmit(values: AmbassadorFormValues) {
    console.log("Form submitted:", values);
    // Actual submission logic (e.g., API call, file upload) would go here.
    // For example, to upload the resume:
    // if (values.resume && values.resume.length > 0) {
    //   const file = values.resume[0];
    //   // upload logic with file (e.g. to Supabase Storage)
    //   console.log("Uploading resume:", file.name);
    // }
    toast({
      title: "Application Submitted!",
      description: "We've received your application and will be in touch.",
    });
    setIsSubmitted(true);
    form.reset(); // Reset form after successful submission
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-xl text-white">
        {/* ChevronRight icon removed as per allowed icon list */}
        <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
        <p className="text-lg mb-6">Thank you for applying to become part of The Sunshine Leaders!</p>
        <p className="text-md">We will respond within 48hrs.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-xl shadow-2xl border-2 border-amber-400">
      <div className="text-center mb-8">
        {/* User icon removed as per allowed icon list */}
        <h1 className="text-3xl font-bold text-[#F97316] font-display">Ambassador Application</h1>
        <p className="text-gray-600">Join The Sunshine Leaders and inspire student travel!</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FullNameField control={form.control} />
          <AmbassadorEmailField control={form.control} />
          <AmbassadorMobileField control={form.control} />
          <BirthdayField control={form.control} />
          <HomeBaseUSField control={form.control} />
          <CollegeUniversityField control={form.control} />
          <AbroadLocationField control={form.control} />
          
          <GuideLocationCheckbox control={form.control} />

          {!watchGuideLocation && ( <PreferredDestinationsField control={form.control} /> )}

          <ResumeUploadField control={form.control} />
          <PitchField control={form.control} />
          <PayoutMethodField control={form.control} />
          
          <LeadSourceHiddenField control={form.control} />

          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center">
            {/* Sparkles icon was already removed. Section title stands alone. */}
             Shine Online! (Optional)
          </h2>
          <InstagramHandleField control={form.control} />
          <TiktokHandleField control={form.control} />
          <YoutubeLinkField control={form.control} />
          
          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center">
            {/* Clipboard icon removed as per allowed icon list. Section title stands alone. */}
             More About You
          </h2>
          <HoursCommitmentField control={form.control} />
          <LanguagesSpokenField control={form.control} />
          <PortfolioLinkField control={form.control} />
          <HowHeardField control={form.control} />
          <PastGigsField control={form.control} />
          <PreferredChatField control={form.control} />

          <AgreeToTermsCheckbox control={form.control} />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#fe4c02] text-white font-bold text-lg py-3 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mt-8"
            disabled={form.formState.isSubmitting}
          >
            {/* ChevronRight icon removed as per allowed icon list */}
            {form.formState.isSubmitting ? "Submitting..." : "Send in Your Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AmbassadorApplicationForm;

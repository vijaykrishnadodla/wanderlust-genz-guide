
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { User, Mail, Phone, Calendar, Info, FileText, Edit, Link as LinkIcon, HelpCircle, Clipboard, Settings, ChevronRight } from 'lucide-react'; // Adjusted icon imports based on allowed list
import { toast } from '@/hooks/use-toast';
import { ambassadorApplicationSchema, AmbassadorFormValues } from './ambassadorApplicationSchema';

// Import new field components
import FullNameField from './fields/FullNameField';
import AmbassadorEmailField from './fields/AmbassadorEmailField'; // Assuming created
import AmbassadorMobileField from './fields/AmbassadorMobileField'; // Assuming created
import BirthdayField from './fields/BirthdayField'; // Assuming created
import HomeBaseUSField from './fields/HomeBaseUSField'; // Assuming created
import CollegeUniversityField from './fields/CollegeUniversityField'; // Assuming created
import AbroadLocationField from './fields/AbroadLocationField'; // Assuming created
import GuideLocationCheckbox from './fields/GuideLocationCheckbox';
import PreferredDestinationsField from './fields/PreferredDestinationsField'; // Assuming created
import ResumeUploadField from './fields/ResumeUploadField';
import PitchField from './fields/PitchField';
import PayoutMethodField from './fields/PayoutMethodField'; // Assuming created
import LeadSourceHiddenField from './fields/LeadSourceHiddenField';
import InstagramHandleField from './fields/InstagramHandleField'; // Assuming created
import TiktokHandleField from './fields/TiktokHandleField'; // Assuming created
import YoutubeLinkField from './fields/YoutubeLinkField'; // Assuming created
import HoursCommitmentField from './fields/HoursCommitmentField'; // Assuming created
import LanguagesSpokenField from './fields/LanguagesSpokenField'; // Assuming created
import PortfolioLinkField from './fields/PortfolioLinkField'; // Assuming created
import HowHeardField from './fields/HowHeardField'; // Assuming created
import PastGigsField from './fields/PastGigsField'; // Assuming created
import PreferredChatField from './fields/PreferredChatField'; // Assuming created
import AgreeToTermsCheckbox from './fields/AgreeToTermsCheckbox';

// Helper components for fields not created above (to make this runnable for demonstration)
// In a full implementation, these would be proper components in the /fields directory.
const PlaceholderField: React.FC<{control: any, name: string, label: string, icon?: React.ElementType}> = ({control, name, label, icon: Icon}) => (
  <div className="mb-4 p-4 bg-white/50 rounded-lg shadow-sm border border-amber-300/50">
    <label className="flex items-center text-gray-700 font-semibold">
      {Icon && <Icon className="h-5 w-5 mr-2 text-[#F97316]" />}
      {label} ({name})
    </label>
    <input type="text" placeholder={`Placeholder for ${name}`} className="w-full p-2 border border-gray-300 rounded mt-1" />
    <small className="text-red-500">This is a placeholder. Implement {name}Field.tsx</small>
  </div>
);

// Assigning placeholders for fields not explicitly created for this example.
// You would replace these with actual imports of the created components.
const AmbassadorEmailFieldFallback = (props: any) => <PlaceholderField {...props} name="email" label="Best Email" icon={Mail} />;
const AmbassadorMobileFieldFallback = (props: any) => <PlaceholderField {...props} name="mobile" label="Mobile (SMS / WhatsApp OK)" icon={Phone} />;
const BirthdayFieldFallback = (props: any) => <PlaceholderField {...props} name="birthday" label="Birthday (DD-MM-YYYY)" icon={Calendar} />;
const HomeBaseUSFieldFallback = (props: any) => <PlaceholderField {...props} name="homeBaseUS" label="Home Base in the U.S." icon={Info} />;
const CollegeUniversityFieldFallback = (props: any) => <PlaceholderField {...props} name="collegeUniversity" label="College / University + State" icon={Info} />;
const AbroadLocationFieldFallback = (props: any) => <PlaceholderField {...props} name="abroadLocation" label="Abroad Location" icon={Info} />;
const PreferredDestinationsFieldFallback = (props: any) => <PlaceholderField {...props} name="preferredDestinations" label="Preferred Destinations" icon={Info} />;
const PayoutMethodFieldFallback = (props: any) => <PlaceholderField {...props} name="payoutMethod" label="Preferred Payout Method" icon={Settings} />;
const InstagramHandleFieldFallback = (props: any) => <PlaceholderField {...props} name="instagramHandle" label="Instagram @handle" icon={User} />;
const TiktokHandleFieldFallback = (props: any) => <PlaceholderField {...props} name="tiktokHandle" label="TikTok @handle" icon={User} />;
const YoutubeLinkFieldFallback = (props: any) => <PlaceholderField {...props} name="youtubeLink" label="YouTube Link" icon={LinkIcon} />;
const HoursCommitmentFieldFallback = (props: any) => <PlaceholderField {...props} name="hoursCommitment" label="Hours Per Week Commitment" icon={Calendar} />;
const LanguagesSpokenFieldFallback = (props: any) => <PlaceholderField {...props} name="languagesSpoken" label="Languages Spoken" icon={Info} />;
const PortfolioLinkFieldFallback = (props: any) => <PlaceholderField {...props} name="portfolioLink" label="Portfolio / Intro-Video URL" icon={LinkIcon} />;
const HowHeardFieldFallback = (props: any) => <PlaceholderField {...props} name="howHeard" label="How Did You Hear About Us?" icon={HelpCircle} />;
const PastGigsFieldFallback = (props: any) => <PlaceholderField {...props} name="pastGigs" label="Past Ambassador / Volunteer Gigs" icon={Edit} />;
const PreferredChatFieldFallback = (props: any) => <PlaceholderField {...props} name="preferredChat" label="Preferred Chat Channel" icon={Mail} />;


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
      leadSource: "website-ambassador-form",
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
    toast({
      title: "Application Submitted!",
      description: "We've received your application and will be in touch.",
    });
    setIsSubmitted(true);
    form.reset();
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-xl text-white">
        <ChevronRight className="h-16 w-16 mx-auto mb-4 text-white animate-bounce" /> {/* Was Send */}
        <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
        <p className="text-lg mb-6">Thank you for applying to become part of The Sunshine Leaders!</p>
        <p className="text-md">We will respond within 48hrs.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-xl shadow-2xl border-2 border-amber-400">
      <div className="text-center mb-8">
        <User className="h-12 w-12 mx-auto mb-3 text-[#F97316]" /> {/* Was Users */}
        <h1 className="text-3xl font-bold text-[#F97316] font-display">Ambassador Application</h1>
        <p className="text-gray-600">Join The Sunshine Leaders and inspire student travel!</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FullNameField control={form.control} />
          {/* Replace Fallbacks with actual component imports when created */}
          {AmbassadorEmailField ? <AmbassadorEmailField control={form.control} /> : <AmbassadorEmailFieldFallback control={form.control} />}
          {AmbassadorMobileField ? <AmbassadorMobileField control={form.control} /> : <AmbassadorMobileFieldFallback control={form.control} />}
          {BirthdayField ? <BirthdayField control={form.control} /> : <BirthdayFieldFallback control={form.control} />}
          {HomeBaseUSField ? <HomeBaseUSField control={form.control} /> : <HomeBaseUSFieldFallback control={form.control} />}
          {CollegeUniversityField ? <CollegeUniversityField control={form.control} /> : <CollegeUniversityFieldFallback control={form.control} />}
          {AbroadLocationField ? <AbroadLocationField control={form.control} /> : <AbroadLocationFieldFallback control={form.control} />}
          
          <GuideLocationCheckbox control={form.control} />

          {!watchGuideLocation && (PreferredDestinationsField ? <PreferredDestinationsField control={form.control} /> : <PreferredDestinationsFieldFallback control={form.control} />)}

          <ResumeUploadField control={form.control} />
          <PitchField control={form.control} />
          {PayoutMethodField ? <PayoutMethodField control={form.control} /> : <PayoutMethodFieldFallback control={form.control} />}
          
          <LeadSourceHiddenField control={form.control} />

          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center">
            {/* Sparkles icon removed as not allowed */}
             Shine Online! (Optional)
          </h2>
          {InstagramHandleField ? <InstagramHandleField control={form.control} /> : <InstagramHandleFieldFallback control={form.control} />}
          {TiktokHandleField ? <TiktokHandleField control={form.control} /> : <TiktokHandleFieldFallback control={form.control} />}
          {YoutubeLinkField ? <YoutubeLinkField control={form.control} /> : <YoutubeLinkFieldFallback control={form.control} />}
          
          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center">
            <Clipboard className="h-5 w-5 mr-2"/> {/* Was ListChecks */}
             More About You
          </h2>
          {HoursCommitmentField ? <HoursCommitmentField control={form.control} /> : <HoursCommitmentFieldFallback control={form.control} />}
          {LanguagesSpokenField ? <LanguagesSpokenField control={form.control} /> : <LanguagesSpokenFieldFallback control={form.control} />}
          {PortfolioLinkField ? <PortfolioLinkField control={form.control} /> : <PortfolioLinkFieldFallback control={form.control} />}
          {HowHeardField ? <HowHeardField control={form.control} /> : <HowHeardFieldFallback control={form.control} />}
          {PastGigsField ? <PastGigsField control={form.control} /> : <PastGigsFieldFallback control={form.control} />}
          {PreferredChatField ? <PreferredChatField control={form.control} /> : <PreferredChatFieldFallback control={form.control} />}

          <AgreeToTermsCheckbox control={form.control} />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#fe4c02] text-white font-bold text-lg py-3 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mt-8"
            disabled={form.formState.isSubmitting}
          >
            <ChevronRight className="h-5 w-5" /> {/* Was Send */}
            {form.formState.isSubmitting ? "Submitting..." : "Send in Your Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AmbassadorApplicationForm;

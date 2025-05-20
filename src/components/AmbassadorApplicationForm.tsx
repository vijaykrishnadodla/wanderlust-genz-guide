
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { User, Mail, Phone, CalendarDays, MapPin, Building, Globe, FileText, Briefcase, Send, Users, Link as LinkIcon, Languages, Video, HelpCircle, ListChecks, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  mobile: z.string().min(10, { message: "Mobile number seems too short." }),
  birthday: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, { message: "Birthday must be DD-MM-YYYY." })
    .refine(val => {
      const [day, month, year] = val.split('-').map(Number);
      const date = new Date(year, month - 1, day);
      const ageDiffMs = Date.now() - date.getTime();
      const ageDate = new Date(ageDiffMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;
    }, { message: "You must be at least 18 years old." }),
  homeBaseUS: z.string().min(2, { message: "Please enter your home base." }),
  collegeUniversity: z.string().min(2, { message: "Please enter your college/university." }),
  abroadLocation: z.string().min(2, { message: "Please enter your abroad location." }),
  guideLocation: z.boolean().default(false),
  preferredDestinations: z.string().optional(),
  resume: z.any()
    .refine(files => files?.length > 0, "Resume is required.")
    .refine(files => files?.[0]?.size <= MAX_FILE_SIZE_BYTES, `Max file size is ${MAX_FILE_SIZE_MB}MB.`)
    .refine(files => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), "Only .pdf files are accepted."),
  pitch: z.string().min(10, { message: "Pitch is too short." }).max(1500, { message: `Pitch must be 250 words or less (approx 1500 chars).` }), // Approx 250 words * 6 chars/word
  payoutMethod: z.string().min(2, { message: "Please specify payout method and details." }),
  agreeToTerms: z.boolean().refine(val => val === true, { message: "You must agree to the terms and privacy policy." }),
  leadSource: z.string().optional(), // Hidden
  instagramHandle: z.string().optional(),
  tiktokHandle: z.string().optional(),
  youtubeLink: z.string().optional().refine(val => !val || z.string().url().safeParse(val).success, { message: "Invalid YouTube URL." }),
  hoursCommitment: z.string().min(1, { message: "Please specify commitment hours." }),
  languagesSpoken: z.string().min(2, { message: "Please list languages." }),
  portfolioLink: z.string().optional().refine(val => !val || z.string().url().safeParse(val).success, { message: "Invalid portfolio URL." }),
  howHeard: z.string().min(2, { message: "Please let us know how you heard about us." }),
  pastGigs: z.string().optional(),
  preferredChat: z.string().min(2, { message: "Please specify preferred chat channel." }),
}).refine(data => data.guideLocation || (data.preferredDestinations && data.preferredDestinations.length > 0), {
  message: "If not guiding current abroad location, please specify preferred destinations.",
  path: ["preferredDestinations"],
});

type AmbassadorFormValues = z.infer<typeof formSchema>;

const AmbassadorApplicationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<AmbassadorFormValues>({
    resolver: zodResolver(formSchema),
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
      leadSource: "website-ambassador-form", // Default hidden value
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
    // Placeholder for actual submission logic (e.g., API call)
    console.log("Form submitted:", values);
    // For now, we'll simulate a successful submission
    // In a real app, you'd handle the resume file upload here.
    // For example, using Supabase storage or another service.
    
    // Example: If using Supabase
    // const { data: fileData, error: fileError } = await supabase.storage
    //  .from('resumes') // replace with your bucket name
    //  .upload(`public/${values.resume[0].name}`, values.resume[0]);
    // if (fileError) {
    //   toast({ title: "Error uploading resume", description: fileError.message, variant: "destructive" });
    //   return;
    // }
    // const resumeUrl = supabase.storage.from('resumes').getPublicUrl(fileData.path).data.publicUrl;
    // const submissionData = { ...values, resume: resumeUrl };
    // console.log("Submission data with resume URL:", submissionData);
    
    // For this example, we just show the success message.
    toast({
      title: "Application Submitted!",
      description: "We've received your application and will be in touch.",
    });
    setIsSubmitted(true);
    form.reset(); // Reset form after submission
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-xl text-white">
        <Send className="h-16 w-16 mx-auto mb-4 text-white animate-bounce" />
        <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
        <p className="text-lg mb-6">Thank you for applying to become part of The Sunshine Leaders!</p>
        <p className="text-md">We will respond within 48hrs.</p>
      </div>
    );
  }

  const renderFormField = (name: keyof AmbassadorFormValues, label: string, placeholder: string, IconComponent: React.ElementType, type: string = "text", description?: string, isTextarea: boolean = false, isCheckbox: boolean = false) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4 p-4 bg-white/50 rounded-lg shadow-sm border border-amber-300/50">
          <FormLabel className="flex items-center text-gray-700 font-semibold">
            <IconComponent className="h-5 w-5 mr-2 text-[#F97316]" />
            {label}
          </FormLabel>
          <FormControl>
            {isCheckbox ? (
               <Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} className="ml-1" />
            ) : isTextarea ? (
              <Textarea placeholder={placeholder} {...field} className="border-gray-300 focus:border-[#F97316] focus:ring-[#F97316]" />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} className="border-gray-300 focus:border-[#F97316] focus:ring-[#F97316]" />
            )}
          </FormControl>
          {description && <FormDescription className="text-xs text-gray-500">{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
  const fileRef = form.register("resume");

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-xl shadow-2xl border-2 border-amber-400">
      <div className="text-center mb-8">
        <Users className="h-12 w-12 mx-auto mb-3 text-[#F97316]" />
        <h1 className="text-3xl font-bold text-[#F97316] font-display">Ambassador Application</h1>
        <p className="text-gray-600">Join The Sunshine Leaders and inspire student travel!</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderFormField("fullName", "Full Name (First + Last)", "e.g., Jane Doe", User)}
          {renderFormField("email", "Best Email", "e.g., jane.doe@example.com", Mail, "email")}
          {renderFormField("mobile", "Mobile (SMS / WhatsApp OK)", "e.g., +1 555-123-4567", Phone, "tel")}
          {renderFormField("birthday", "Birthday (DD-MM-YYYY)", "e.g., 25-12-2000", CalendarDays, "text", "Must be 18+.")}
          {renderFormField("homeBaseUS", "Home Base in the U.S. (City, State)", "e.g., Austin, TX", MapPin)}
          {renderFormField("collegeUniversity", "College / University + State", "e.g., University of Sunshine, CA", Building)}
          {renderFormField("abroadLocation", "Abroad Location (Lived / Living - City, Country)", "e.g., Barcelona, Spain", Globe)}

          <FormField
            control={form.control}
            name="guideLocation"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-white/50 border-amber-300/50">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} id="guideLocationCheckbox" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="guideLocationCheckbox" className="text-gray-700 font-semibold">
                    Do you want to guide students to this abroad location?
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {!watchGuideLocation && renderFormField("preferredDestinations", "If 'No,' which destination(s) would you rather rep?", "e.g., Paris, Rome, Tokyo", Globe, "text", "Required if not guiding current abroad location.")}

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => ( // field is not directly used for input type=file, but register is used
              <FormItem className="mb-4 p-4 bg-white/50 rounded-lg shadow-sm border border-amber-300/50">
                <FormLabel className="flex items-center text-gray-700 font-semibold">
                  <FileText className="h-5 w-5 mr-2 text-[#F97316]" />
                  Upload Résumé (PDF)
                </FormLabel>
                <FormControl>
                  <Input 
                    type="file" 
                    accept=".pdf" 
                    {...fileRef} // Use the registered ref
                    className="border-gray-300 focus:border-[#F97316] focus:ring-[#F97316] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F97316]/20 file:text-[#F97316] hover:file:bg-[#F97316]/30"
                  />
                </FormControl>
                <FormDescription className="text-xs text-gray-500">Max 5MB. PDF format only.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {renderFormField("pitch", "Your 30-second Pitch – Why You?", "Tell us why you'd be a great ambassador (approx. 250 words)", Briefcase, "text", "Max 1500 characters.", true)}
          {renderFormField("payoutMethod", "Preferred Payout Method + Account/Email", "e.g., PayPal: jane.doe@example.com or Wise: Account Details", Send)}
          
          <FormField
            control={form.control}
            name="leadSource"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input type="hidden" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center"><Sparkles className="h-5 w-5 mr-2"/> Shine Online! (Optional)</h2>
          {renderFormField("instagramHandle", "Instagram @handle + Follower Count", "e.g., @sunnytravels 1.2k", Users)}
          {renderFormField("tiktokHandle", "TikTok @handle + Follower Count", "e.g., @sunshineexplorer 5k", Users)}
          {renderFormField("youtubeLink", "YouTube Link + Subscribers", "e.g., youtube.com/yourchannel 500 subs", LinkIcon, "url")}
          
          <h2 className="text-xl font-semibold text-[#F97316] pt-4 border-t border-amber-300/70 mt-6 flex items-center"><ListChecks className="h-5 w-5 mr-2"/> More About You</h2>
          {renderFormField("hoursCommitment", "Hours Per Week You Can Commit", "e.g., 5-10 hours", CalendarDays)}
          {renderFormField("languagesSpoken", "Languages You Speak Fluently", "e.g., English, Spanish, French", Languages)}
          {renderFormField("portfolioLink", "Portfolio / Intro-Video URL (Optional)", "e.g., yoursite.com/portfolio or Loom/YouTube link", LinkIcon, "url")}
          {renderFormField("howHeard", "How Did You Hear About The Sunshine Leaders?", "e.g., Friend, Social Media, University", HelpCircle)}
          {renderFormField("pastGigs", "Past Ambassador / Volunteer Gigs (1-2 lines, Optional)", "Briefly describe relevant experience.", Briefcase, "text", "", true)}
          {renderFormField("preferredChat", "Preferred Chat Channel", "e.g., WhatsApp, Slack, Discord", MessageSquare)}

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-white/50 border-amber-300/50 mt-6 pt-6 border-t border-amber-300/70">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} id="termsCheckbox" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="termsCheckbox" className="text-gray-700 font-semibold">
                    I agree to the Ambassador Terms & Privacy Policy.
                  </FormLabel>
                  <FormDescription className="text-xs text-gray-500">
                    You can review these <a href="/terms" target="_blank" className="underline text-[#F97316] hover:text-[#fe4c02]">here</a> (link placeholder).
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#fe4c02] text-white font-bold text-lg py-3 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mt-8"
            disabled={form.formState.isSubmitting}
          >
            <Send className="h-5 w-5" />
            {form.formState.isSubmitting ? "Submitting..." : "Send in Your Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AmbassadorApplicationForm;


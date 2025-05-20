
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required").refine(val => {
    const date = new Date(val);
    const today = new Date();
    today.setHours(0,0,0,0); // Compare dates only
    return date < today;
  }, "Date of birth must be in the past."),
  email: z.string().email("Invalid email address"),
  mobile: z.string().optional(),
  isStudent: z.boolean().refine(val => val === true, "You must confirm you are a full-time student."),
  agreedToTerms: z.boolean().refine(val => val === true, "You must agree to the Terms & Conditions and Privacy Policy."),
});

type BasicDetailsFormValues = z.infer<typeof formSchema>;

const BasicDetailsForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<BasicDetailsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      mobile: '',
      isStudent: false,
      agreedToTerms: false,
    },
  });

  const onSubmit: SubmitHandler<BasicDetailsFormValues> = (data) => {
    console.log('Form data:', data);
    // Save to sessionStorage
    try {
        sessionStorage.setItem('stbCheckoutDetails', JSON.stringify(data));
        
        // Calculate age to determine next step (simplified for now)
        const birthDate = new Date(data.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        // For now, always navigate to payment page. Age check will be used later.
        // const nextPath = age >= 17 ? '/checkout/payment?adult=true' : '/checkout/payment?adult=false';
        // For this iteration, we'll just go to a placeholder /checkout/payment page.
        // The actual payment page will be created in the next step.
        // navigate(nextPath); 
        
        toast({
          title: "Details Saved",
          description: "Proceeding to payment.",
        });
        navigate('/checkout'); // Placeholder: In next step, this will be /checkout/payment
                               // For now, navigate back to the main checkout page to show progress.
                               // This needs to be replaced with navigation to the actual Step 2 page.
                               // The prompt implies step 2 is Stripe, so the existing CheckoutPage can be adapted for it.
                               // For now, I'll leave it like this and in the next iteration we'll build the payment page.
                               // The user's instructions say "Server calculates age from DOB and redirects to /pay?adult=true or /pay?adult=false."
                               // And "Routing After Payment: If Age 17: go to /verify – instant NSC check. If Age < 17: go to /upload■docs – manual proof upload."
                               // This implies the /checkout/payment page will be the next one.
                               // Let's assume we'll create /checkout/payment in the next message.
                               // So for now, we simulate saving and inform the user. A full navigation to next step will be done when /checkout/payment exists.
    } catch (error) {
        console.error("Failed to save to session storage:", error);
        toast({
            title: "Error",
            description: "Could not save your details. Please try again.",
            variant: "destructive",
        });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Taylor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input placeholder="Alison (Optional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input placeholder="Swift" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth *</FormLabel>
              <FormControl>
                <Input type="date" {...field} max={new Date().toISOString().split("T")[0]} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tay@uni.edu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1 555 123 4567 (Optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="isStudent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I confirm I am currently a full-time student and understand this fee is non-refundable. *
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreedToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the <Link to="/terms" target="_blank" className="text-sunny-orange hover:underline">Terms & Conditions</Link> and <Link to="/privacy" target="_blank" className="text-sunny-orange hover:underline">Privacy Policy</Link>. *
                </FormLabel>
                <FormDescription>
                  You must tick the declaration to continue.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full stb-button text-lg py-3">
          Continue to Payment
        </Button>
      </form>
    </Form>
  );
};

export default BasicDetailsForm;

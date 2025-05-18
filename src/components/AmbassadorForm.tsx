
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/components/ui/use-toast';

interface AmbassadorFormProps {
  id: string;
  fields: string[];
  submitTo: string; // Zapier/Zoho endpoint
  successMessage: string;
}

const AmbassadorForm: React.FC<AmbassadorFormProps> = ({ id, fields, submitTo, successMessage }) => {
  const [formData, setFormData] = useState<Record<string, string | boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Submitting Ambassador Form Data:', formData);
    console.log('To Endpoint:', submitTo);

    // Placeholder for actual submission
    // In a real scenario, you'd use fetch or axios to POST to `submitTo`
    // For example:
    // try {
    //   const response = await fetch(submitTo, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     toast({ title: "Success!", description: successMessage });
    //     setFormData({}); // Clear form
    //   } else {
    //     toast({ title: "Error", description: "Could not submit form. Please try again.", variant: "destructive" });
    //   }
    // } catch (error) {
    //   toast({ title: "Error", description: "An unexpected error occurred.", variant: "destructive" });
    // }

    // Mock success for now
    setTimeout(() => {
      toast({ title: "Application Submitted!", description: successMessage });
      setFormData(fields.reduce((acc, fieldName) => {
        const key = fieldName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        acc[key] = fieldName.includes('Agree to T&C') ? false : '';
        return acc;
      }, {} as Record<string, string | boolean>)); // Clear form
      setIsSubmitting(false);
    }, 1500);
  };

  const renderField = (fieldName: string) => {
    const key = fieldName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const label = fieldName;

    if (fieldName.toLowerCase().includes('résumé') || fieldName.toLowerCase().includes('upload')) {
      return (
        <div key={key} className="space-y-1">
          <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
          <Input id={key} name={key} type="file" onChange={handleInputChange} className="sunny-input" />
        </div>
      );
    }
    if (fieldName.toLowerCase().includes('pitch')) {
       return (
        <div key={key} className="space-y-1">
          <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
          <Textarea id={key} name={key} value={(formData[key] as string) || ''} onChange={handleInputChange} placeholder="Your pitch (max 250 words)" rows={4} className="sunny-input" />
        </div>
      );
    }
    if (fieldName.toLowerCase().includes('agree to t&c')) {
      return (
        <div key={key} className="flex items-center space-x-2 mt-4">
          <Checkbox id={key} name={key} checked={!!formData[key]} onCheckedChange={(checked) => setFormData({...formData, [key]: !!checked})} />
          <Label htmlFor={key} className="text-sm font-medium text-gray-700 cursor-pointer">{label}</Label>
        </div>
      );
    }
    if (fieldName.toLowerCase().includes('birthday')) {
      return (
        <div key={key} className="space-y-1">
          <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
          <Input id={key} name={key} type="date" value={(formData[key] as string) || ''} onChange={handleInputChange} className="sunny-input" />
        </div>
      );
    }
    return (
      <div key={key} className="space-y-1">
        <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
        <Input id={key} name={key} type={fieldName.toLowerCase().includes('email') ? 'email' : fieldName.toLowerCase().includes('mobile') ? 'tel' : 'text'} value={(formData[key] as string) || ''} onChange={handleInputChange} placeholder={`Your ${label.toLowerCase()}`} className="sunny-input" />
      </div>
    );
  };

  return (
    <form id={id} onSubmit={handleSubmit} className="mt-10 max-w-2xl mx-auto space-y-6 text-left bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl border border-sunny-yellow-light">
      {fields.map(renderField)}
      <Button type="submit" disabled={isSubmitting} className="w-full bg-hyper text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
        {isSubmitting ? 'Submitting...' : 'Apply Now'}
      </Button>
    </form>
  );
};

export default AmbassadorForm;

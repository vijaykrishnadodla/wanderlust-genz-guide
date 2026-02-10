
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SalesPage from "./pages/SalesPage";
import FunnelLandingPage from "./pages/FunnelLandingPage";
import EpicPerksPage from "./pages/EpicPerksPage";
import Templates from "./pages/Templates";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentCancelPage from "./pages/PaymentCancelPage";
import AmbassadorApplicationPage from "./pages/AmbassadorApplicationPage";
import AmbassadorTermsPage from "./pages/AmbassadorTermsPage";
import NotFound from "./pages/NotFound";
import CheckoutDetailsPage from "./pages/checkout/CheckoutDetailsPage";
import CheckoutPaymentPage from "./pages/checkout/CheckoutPaymentPage";
import CheckoutVerifyPage from "./pages/checkout/CheckoutVerifyPage";
import CheckoutUploadDocsPage from "./pages/checkout/CheckoutUploadDocsPage";
import CheckoutConfirmationPage from "./pages/checkout/CheckoutConfirmationPage";
import StudentVerificationConsentPage from "./pages/StudentVerificationConsentPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import FlyerPage from "./pages/FlyerPage";
import Flyer2Page from "./pages/Flyer2Page";
import Flyer3Page from "./pages/Flyer3Page";
import FreebiesPage from "./pages/FreebiesPage";
import PlanMyTripPage from "./pages/PlanMyTripPage";
import JoinPage from "./pages/JoinPage";
import Join2Page from "./pages/Join2Page";
import Join3Page from "./pages/Join3Page";

const queryClient = new QueryClient();

const App = () => (
  <div id="page" className="min-h-screen w-full overflow-x-hidden
                  bg-fixed bg-radialSunny from-[#FFD447] via-[#FFEFE2] to-white bg-grain
                  text-midnight">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/join2" element={<Join2Page />} />
            <Route path="/join3" element={<Join3Page />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/funnel" element={<FunnelLandingPage />} />
            <Route path="/epic-perks" element={<EpicPerksPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/flyer" element={<FlyerPage />} />
            <Route path="/flyer2" element={<Flyer2Page />} />
            <Route path="/flyer3" element={<Flyer3Page />} />
            <Route path="/freebies" element={<FreebiesPage />} />
            <Route path="/plan-my-trip" element={<PlanMyTripPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/details" element={<CheckoutDetailsPage />} />
            <Route path="/checkout/payment" element={<CheckoutPaymentPage />} />
            <Route path="/checkout/verify" element={<CheckoutVerifyPage />} />
            <Route path="/checkout/upload-docs" element={<CheckoutUploadDocsPage />} />
            <Route path="/checkout/confirmation/success" element={<CheckoutConfirmationPage />} />
            <Route path="/checkout/confirmation/manual" element={<CheckoutConfirmationPage />} />
            <Route path="/student-verification-consent" element={<StudentVerificationConsentPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/payment-cancel" element={<PaymentCancelPage />} />
            <Route path="/ambassador-application" element={<AmbassadorApplicationPage />} />
            <Route path="/ambassador-terms" element={<AmbassadorTermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;

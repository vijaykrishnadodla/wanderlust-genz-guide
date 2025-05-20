
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
import NotFound from "./pages/NotFound";
import CheckoutDetailsPage from "./pages/checkout/CheckoutDetailsPage"; // New import

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
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/funnel" element={<FunnelLandingPage />} />
            <Route path="/epic-perks" element={<EpicPerksPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/details" element={<CheckoutDetailsPage />} /> {/* New Route */}
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/payment-cancel" element={<PaymentCancelPage />} />
            <Route path="/ambassador-application" element={<AmbassadorApplicationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </div>
);

export default App;

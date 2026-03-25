import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WeddingLayout from "./modules/wedding/components/WeddingLayout";
import WeddingHomePage from "./modules/wedding/pages/WeddingHomePage";
import DestinationsPage from "./modules/wedding/pages/DestinationsPage";
import DestinationDetailPage from "./modules/wedding/pages/DestinationDetailPage";
import PlannersPage from "./modules/wedding/pages/PlannersPage";
import PlannerDetailPage from "./modules/wedding/pages/PlannerDetailPage";
import WeddingEnquiryPage from "./modules/wedding/pages/WeddingEnquiryPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/wedding" replace />} />
          <Route path="/wedding" element={<WeddingLayout />}>
            <Route index element={<WeddingHomePage />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="destinations/:id" element={<DestinationDetailPage />} />
            <Route path="planners" element={<PlannersPage />} />
            <Route path="planners/:id" element={<PlannerDetailPage />} />
            <Route path="enquiry" element={<WeddingEnquiryPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

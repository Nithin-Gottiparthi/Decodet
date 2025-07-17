
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import DigitalTransformation from "./pages/DigitalTransformation";
import Consultancy from "./pages/Consultancy";
import Upskilling from "./pages/Upskilling";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import Life from "./pages/Life";
import NotFound from "./pages/NotFound";
import DataAnalytics from "./pages/courses/DataAnalytics";
import DataScience from "./pages/courses/DataScience";
import MernStack from "./pages/courses/MernStack";
import DigitalMarketing from "./pages/courses/DigitalMarketing";
import BusinessAnalytics from "./pages/courses/BusinessAnalytics";
import AiForManagers from "./pages/courses/AiForManagers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="digital-transformation" element={<DigitalTransformation />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="upskilling" element={<Upskilling />} />
            <Route path="upskilling/data-analytics" element={<DataAnalytics />} />
            <Route path="upskilling/data-science" element={<DataScience />} />
            <Route path="upskilling/mern-stack" element={<MernStack />} />
            <Route path="upskilling/digital-marketing" element={<DigitalMarketing />} />
            <Route path="upskilling/business-analytics" element={<BusinessAnalytics />} />
            <Route path="upskilling/ai-for-managers" element={<AiForManagers />} />
            <Route path="about" element={<About />} />
            <Route path="about/leadership" element={<Leadership />} />
            <Route path="about/careers" element={<Careers />} />
            <Route path="about/life" element={<Life />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

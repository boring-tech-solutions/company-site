import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AILab from "./pages/AILab";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import YDGC from "./pages/YDGC";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-lab" element={<AILab />} />
          <Route path="/our-past-work" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />
          <Route path="/ydgc" element={<YDGC />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

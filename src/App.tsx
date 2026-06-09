import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteSeo from "./components/RouteSeo";
import Index from "./pages/Index";
import AILab from "./pages/AILab";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import Govora from "./pages/Govora";
import GovoraSales from "./pages/GovoraSales";
import AIWorkflowAutomation from "./pages/AIWorkflowAutomation";
import ResponsibleAIConsulting from "./pages/ResponsibleAIConsulting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <RouteSeo />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/ai-lab" element={<AILab />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/our-past-work" element={<CaseStudies />} />
                    <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/contact/success"
                        element={<ContactSuccess />}
                    />
                    <Route path="/data-compliance" element={<Govora />} />
                    <Route path="/govora-sales" element={<GovoraSales />} />
                    <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                    <Route path="/services/responsible-ai-consulting" element={<ResponsibleAIConsulting />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;

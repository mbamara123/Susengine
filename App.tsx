
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import MaterialSelector from "./pages/MaterialSelector";
import AISmartMaterialSelectorPage from "./pages/AISmartMaterialSelectorPage";
import MultiphaseSimulation from "./pages/MultiphaseSimulation";
import AdvancedAnalytics from "./pages/AdvancedAnalytics";
import CircularMetallurgy from "./pages/CircularMetallurgy";
import IndustrySpecific from "./pages/IndustrySpecific";
import MicroLearningHub from "./pages/MicroLearningHub";
import ProjectDashboard from "./pages/ProjectDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import TeamCollaborationPage from "./pages/TeamCollaborationPage";
import AIInsightsPage from "./pages/AIInsightsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/material-selector" element={<MaterialSelector />} />
              <Route path="/ai-material-selector" element={<AISmartMaterialSelectorPage />} />
              <Route path="/simulation" element={<MultiphaseSimulation />} />
              <Route path="/multiphase-simulation" element={<MultiphaseSimulation />} />
              <Route path="/analytics" element={<AdvancedAnalytics />} />
              <Route path="/advanced-analytics" element={<AdvancedAnalytics />} />
              <Route path="/circular-metallurgy" element={<CircularMetallurgy />} />
              <Route path="/industry-specific" element={<IndustrySpecific />} />
              <Route path="/micro-learning" element={<MicroLearningHub />} />
              <Route path="/projects" element={<ProjectDashboard />} />
              <Route path="/project-dashboard" element={<ProjectDashboard />} />
              <Route path="/collaboration" element={<TeamCollaborationPage />} />
              <Route path="/team-collaboration" element={<TeamCollaborationPage />} />
              <Route path="/ai-insights" element={<AIInsightsPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
}

export default App;

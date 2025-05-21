import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from 'next-themes';

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import AdminDashboard from "@/pages/admin/index";
import AdminContacts from "@/pages/admin/contacts";
import AdminTestimonials from "@/pages/admin/testimonials";
import AdminLogin from "@/pages/admin/login";
import NotFound from "@/pages/not-found";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/contacts" component={AdminContacts} />
      <Route path="/admin/testimonials" component={AdminTestimonials} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";

const ContactSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Message <span className="text-gradient">Sent</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>

            <Button asChild variant="outline" className="group">
              <Link to="/">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactSuccess;

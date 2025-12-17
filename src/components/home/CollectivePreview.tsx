import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const CollectivePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.role) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Application submitted!",
      description: "We'll be in touch soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "", role: "" });
    setIsOpen(false);
    setIsSubmitting(false);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
            <Users className="text-primary" size={28} />
          </div>

          {/* Content */}
          <span className="text-primary text-sm font-medium uppercase tracking-widest">The Boring Tech Collective</span>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            Not an Agency. A <span className="text-gradient">Tactical Unit</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A Collective is a group of senior, low-ego professionals who assemble project by project to deliver high-impact solutions. Like a pride of lions moving with intention — strategic, efficient, and collaborative.
          </p>

          {/* Member Avatars Placeholder */}
          <div className="flex justify-center items-center gap-2 mb-10">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-muted border-2 border-card flex items-center justify-center text-muted-foreground text-xs font-medium -ml-3 first:ml-0"
              >
                {["CP", "SM", "W", "J", "T", "A"][index]}
              </div>
            ))}
            <div className="ml-2 text-muted-foreground text-sm">+ more</div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              onClick={() => setIsOpen(true)}
            >
              Apply to Join the Collective
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="outline" onClick={() => {
              setFormData(prev => ({ ...prev, role: "Student" }));
              setIsOpen(true);
            }}>
              I'm a Student
            </Button>
          </div>
        </div>
      </div>

      {/* Application Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Join the Collective</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-background"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-background"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  <SelectItem value="Collective Member">Collective Member</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about yourself..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="bg-background min-h-[100px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CollectivePreview;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle, Mail, User } from "lucide-react";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setStep('success');
    }, 500);
  };

  const handleClose = () => {
    setStep('form');
    setFormData({ name: '', email: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Join the Suasana Waitlist
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Be among the first to experience the authentic sounds of Malaysia. We'll notify you when Suasana launches.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="pl-10 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="pl-10 border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-2.5 transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. No spam, just updates about Suasana.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="animate-scale-in">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                Welcome to Suasana! 🎉
              </DialogTitle>
              <DialogDescription className="text-gray-600 mb-6">
                Thank you for joining our waitlist! We'll email you as soon as Suasana is ready to transport you to the heart of Malaysia.
              </DialogDescription>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-orange-800">
                  <strong>What's next?</strong> Follow us on social media for behind-the-scenes content and sneak peeks of our recording sessions across Malaysia.
                </p>
              </div>

              <Button 
                onClick={handleClose}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 transition-all duration-300"
              >
                Continue Exploring
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;

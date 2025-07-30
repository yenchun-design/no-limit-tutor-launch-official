import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";
import InternalLinks from "@/components/InternalLinks";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thanks for joining! We'll be in touch soon.");
    setEmail("");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://join.nolimittutor.com/#organization",
        "name": "No Limit Tutor",
        "url": "https://join.nolimittutor.com",
        "description": "Premium tutoring services connecting students with expert tutors"
      },
      {
        "@type": "WebPage",
        "@id": "https://join.nolimittutor.com/#webpage",
        "url": "https://join.nolimittutor.com",
        "name": "No Limit Tutor - Join Our Tutoring Community",
        "isPartOf": {
          "@id": "https://join.nolimittutor.com/#website"
        },
        "about": {
          "@id": "https://join.nolimittutor.com/#organization"
        },
        "description": "Join No Limit Tutor's community of dedicated tutors and students. Connect with expert tutors and achieve your academic goals."
      },
      {
        "@type": "WebSite",
        "@id": "https://join.nolimittutor.com/#website",
        "url": "https://join.nolimittutor.com",
        "name": "No Limit Tutor",
        "publisher": {
          "@id": "https://join.nolimittutor.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title="No Limit Tutor - Join Our Tutoring Community"
        description="Join No Limit Tutor's community of dedicated tutors and students. Connect with expert tutors and achieve your academic goals."
        canonical="https://join.nolimittutor.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              No Limit Tutor
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of dedicated tutors and students. Connect, learn, and achieve your academic goals together.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-lg py-3"
                required
              />
            </div>
            <Button type="submit" className="w-full text-lg py-3">
              Join the Community
            </Button>
          </form>
          
          <p className="text-sm text-gray-500">
            By joining, you agree to our terms of service and privacy policy.
          </p>
        </div>
      </div>

      <InternalLinks />
    </>
  );
};

export default Index;

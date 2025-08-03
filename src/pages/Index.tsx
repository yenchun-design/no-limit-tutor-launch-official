import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Trophy, Target, ArrowRight, CheckCircle, Clock, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import OpenGraphMeta from "@/components/OpenGraphMeta";

const Index = () => {
  const [joinCount, setJoinCount] = useState(1247);
  const { toast } = useToast();

  // Simulate real-time join count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setJoinCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const ogData = {
    title: "Join NLT Community - Transform Your Future",
    description: "Join our exclusive community and unlock your potential. Connect with like-minded individuals and grow together.",
    image: `${window.location.origin}/lovable-uploads/a4afac6a-13e5-4713-8b1d-66db48ddd8e9.png`, // Using the NLT logo
    url: window.location.href,
    siteName: "NLT Community",
    joinCount
  };

  const handleJoinClick = () => {
    toast({
      title: "Welcome to NLT Community!",
      description: "You're now part of our growing community of achievers.",
    });
    setJoinCount(prev => prev + 1);
  };

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Exclusive Community",
      description: "Connect with like-minded individuals who share your ambitions"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Content",
      description: "Access to exclusive resources and insider knowledge"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Achievement Tracking",
      description: "Monitor your progress and celebrate your wins"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Setting",
      description: "Set and achieve your personal and professional goals"
    }
  ];

  const benefits = [
    "Weekly live sessions with industry experts",
    "Access to exclusive networking events",
    "Personalized mentorship opportunities",
    "Resource library with 500+ premium materials",
    "24/7 community support and guidance",
    "Monthly challenges and competitions"
  ];

  return (
    <>
      <OpenGraphMeta {...ogData} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/a4afac6a-13e5-4713-8b1d-66db48ddd8e9.png" 
                alt="NLT Community Logo" 
                className="h-20 w-auto"
              />
            </div>
            <Badge variant="secondary" className="mb-4 animate-pulse">
              <Globe className="h-4 w-4 mr-2" />
              {joinCount.toLocaleString()} Members Strong
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your
              <span className="text-blue-600 block">Future Today</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join NLT Community and unlock your potential. Connect with ambitious individuals, 
              access premium resources, and accelerate your personal and professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleJoinClick}
              >
                Join Community Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                Limited time offer
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to accelerate your growth and achieve your goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join {joinCount.toLocaleString()}+ members who are already on their journey to success
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleJoinClick}
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

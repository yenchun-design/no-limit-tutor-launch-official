import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, BookOpen, Clock, Award, Target, TrendingUp, MessageSquare, Shield, Zap, Heart, Globe, DollarSign, Calendar, UserCheck, PhoneCall, Video, Mail, MapPin, Lightbulb, GraduationCap, Trophy, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

// --- lock table name: do NOT let anyone rename this ---
type EmailTable = 'email_signups';
const EMAIL_TABLE: EmailTable = 'email_signups';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
	const [emailCount, setEmailCount] = useState<number>(0);

	useEffect(() => {
		fetchEmailCount();
	}, []);

	const fetchEmailCount = async () => {
		try {
			const { count, error } = await supabase
				.from(EMAIL_TABLE)
				.select('*', { count: 'exact' });

			if (error) {
				console.error("Error fetching email count:", error);
				return;
			}

			setEmailCount(count || 0);
		} catch (error) {
			console.error("Unexpected error fetching email count:", error);
		}
	};

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error!",
        description: "Email is required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase
        .from(EMAIL_TABLE)
        .insert([{ email }])
        .single();

      if (error) {
        console.error("Supabase error:", error);
        toast({
          title: "Error!",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          description: "You're on the list! Expect great things soon.",
        });
        setEmail('');
				fetchEmailCount();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Error!",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="px-4 py-8 md:py-16 max-w-6xl mx-auto">
        {/* Title and Logo */}
        <div className="text-center">
          <div className="mb-4 md:mb-6">
            <img 
              src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" 
              alt="No Limit Tutor Logo" 
              className="mx-auto h-16 md:h-24 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-2 md:mb-4 drop-shadow-sm">
            No Limit Tutor
          </h1>
          <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
            無限家教
          </div>
        </div>

        {/* CTA Card - 招募老師 */}
        <div className="mb-8 md:mb-12">
          <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-r from-green-400 to-green-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1">
            <CardContent className="p-4 md:p-8 text-center">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 drop-shadow-lg">
                招募 2026 年線上家教老師中！
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-4 md:mb-6 font-medium">
                加入台灣最創新的家教平台，開啟您的教學新篇章
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <a 
                  href="https://forms.gle/Ztut3UCMqghCEoDD8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  立即報名 <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Value Proposition */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8 leading-tight drop-shadow-sm">
            台灣第一個民主、群眾導向的一對一家教平台
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            透過創新的民主機制，讓學生和家長共同決定平台的發展方向，打造真正以使用者需求為核心的家教服務
          </p>
        </div>

        {/* Email Signup */}
        <div className="max-w-md mx-auto mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {emailCount > 100 ? "Join the Waitlist!" : "Get Early Access!"}
          </h3>
          <p className="text-gray-700 mb-4">
            {emailCount > 100
              ? "We're at capacity! Join the waitlist to be notified when spots open."
              : "Sign up to get notified when we launch."}
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Submitting..." : (emailCount > 100 ? "Join Waitlist" : "Sign Up")}
            </Button>
          </form>
					<p className="text-gray-500 mt-2 text-sm">
						{emailCount}+ already signed up!
					</p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                <h4 className="text-lg font-semibold text-gray-800">Verified Tutors</h4>
              </div>
              <p className="text-gray-600">
                All tutors are carefully screened and verified for their expertise and teaching skills.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 mr-2 text-yellow-500" />
                <h4 className="text-lg font-semibold text-gray-800">Personalized Learning</h4>
              </div>
              <p className="text-gray-600">
                Get a customized learning plan tailored to your specific needs and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-2 text-blue-500" />
                <h4 className="text-lg font-semibold text-gray-800">Collaborative Platform</h4>
              </div>
              <p className="text-gray-600">
                Engage with a community of learners and educators, sharing knowledge and experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 mr-2 text-purple-500" />
                <h4 className="text-lg font-semibold text-gray-800">Wide Range of Subjects</h4>
              </div>
              <p className="text-gray-600">
                Access expert tutors in a variety of subjects, from math and science to languages and arts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-2 text-teal-500" />
                <h4 className="text-lg font-semibold text-gray-800">Flexible Scheduling</h4>
              </div>
              <p className="text-gray-600">
                Book lessons at your convenience, with options for both short-term and long-term learning.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-2 text-orange-500" />
                <h4 className="text-lg font-semibold text-gray-800">Progress Tracking</h4>
              </div>
              <p className="text-gray-600">
                Monitor your progress and achievements with detailed reports and feedback from your tutor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 md:mb-12">
            Why Choose No Limit Tutor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <Target className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Learning Paths</h3>
              <p className="text-gray-600">
                We tailor learning experiences to fit individual student needs and goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our students achieve higher grades and develop a deeper understanding of their subjects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <MessageSquare className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Communication</h3>
              <p className="text-gray-600">
                We foster clear and effective communication between students and tutors.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                We ensure a safe and secure learning environment for all users.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Access</h3>
              <p className="text-gray-600">
                Connect with tutors instantly and start learning right away.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center">
              <Heart className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passionate Tutors</h3>
              <p className="text-gray-600">
                Our tutors are passionate about teaching and dedicated to student success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8 md:mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "No Limit Tutor has transformed my learning experience. The personalized approach and expert tutors have helped me excel in my studies."
                </p>
                <div className="flex items-center">
                  <UserCheck className="w-6 h-6 mr-2 text-green-500" />
                  <span className="font-semibold text-gray-800">Alice Johnson</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <p className="text-gray-700 italic mb-4">
                  "I was struggling with math until I found No Limit Tutor. The tutor's clear explanations and patient guidance made all the difference."
                </p>
                <div className="flex items-center">
                  <UserCheck className="w-6 h-6 mr-2 text-green-500" />
                  <span className="font-semibold text-gray-800">Bob Williams</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-100 py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 md:mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-8 md:mb-12">
            Join No Limit Tutor today and unlock your full potential.
          </p>
          <Button size="lg">Find a Tutor</Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">
              <Globe className="inline-block w-4 h-4 mr-1" />
              NoLimitTutor.com
            </p>
            <p className="text-gray-400">
              <Mail className="inline-block w-4 h-4 mr-1" />
              support@nolimittutor.com
            </p>
            <p className="text-gray-400">
              <PhoneCall className="inline-block w-4 h-4 mr-1" />
              (123) 456-7890
            </p>
            <p className="text-gray-400">
              <MapPin className="inline-block w-4 h-4 mr-1" />
              123 Main Street, Cityville
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Find a Tutor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Become a Tutor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M22.46 6c-.777.138-1.29.23-1.96.346a3.027 3.027 0 0 0 1.335-1.664 6.042 6.042 0 0 1-1.926.723A3.01 3.01 0 0 0 14.784 4.21a6.046 6.046 0 0 1-4.964 2.57A8.551 8.551 0 0 1 3 4.575a3.016 3.016 0 0 0 .936 3.991 8.528 8.528 0 0 1-2.039-.513A3.01 3.01 0 0 0 3.97 11.016a8.55 8.55 0 0 1-7.326 1.794 8.588 8.588 0 0 0 5.32 6.658 17.949 17.949 0 0 1-12.058 5.029c0 .34.042.672.103 1a3.013 3.013 0 0 0 1.035.413A8.478 8.478 0 0 0 19.779 8.049a16.644 16.644 0 0 0 4.755-1.315 3.082 3.082 0 0 1-.667 1.577 6.042 6.042 0 0 1 1.78-1.013 3.016 3.016 0 0 0 1.054-.26 6.046 6.046 0 0 1-1.927 1.973"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.476 1.484-3.861 3.704-3.861 1.081 0 2.196.195 2.196.195v2.42h-1.215c-1.204 0-1.481.741-1.481 1.499v1.971h2.743l-.354 2.891h-2.389v6.987C18.343 21.128 22 16.991 22 12z"
                  />
                </svg>
              </a>
              {/* Add more social media icons here */}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} No Limit Tutor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

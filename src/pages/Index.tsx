
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, BookOpen, Award, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);
      
      if (error) throw error;
      
      toast({
        title: "訂閱成功！",
        description: "感謝您的訂閱，我們會定期寄送最新資訊給您。",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "訂閱失敗",
        description: "請稍後再試，或聯繫客服人員。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTeacherApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email: 'teacher-application@nolimittutors.com' }]);
      
      if (error) throw error;
      
      toast({
        title: "申請已送出！",
        description: "我們會盡快與您聯繫，謝謝您的申請。",
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "申請失敗",
        description: "請稍後再試，或直接聯繫我們。",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header/Logo Section */}
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div className="text-left">
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              NO LIMIT TUTOR
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium">無限家教</p>
          </div>
        </div>
      </div>

      {/* CTA Recruitment Card */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="bg-gradient-to-r from-orange-400 to-orange-500 border-none shadow-xl">
          <CardContent className="py-8 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              招募 2026 年線上家教老師中！！
            </h2>
            <p className="text-orange-100 text-lg mb-4">
              台灣首個民主、群眾導向的線上視訊一對一家教平台！！
            </p>
            <Button 
              onClick={handleTeacherApplication}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 text-lg shadow-lg"
            >
              立即申請成為老師
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-12">
          {/* Platform Introduction Card */}
          <Card className="shadow-xl border-orange-200">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-orange-600" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-semibold">
                  台灣第一個
                </Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
                民主、群眾導向的線上視訊一對一家教平台
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-4">
                革命性的教育平台，讓學習更自由、更有效果
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">民主參與</h3>
                    <p className="text-gray-600">學生和家長共同參與平台決策，創造更好的學習環境</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">個人化學習</h3>
                    <p className="text-gray-600">一對一視訊教學，根據學生需求量身打造學習計畫</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">優質師資</h3>
                    <p className="text-gray-600">嚴選專業教師，提供最高品質的教學服務</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-8 h-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">透明評價</h3>
                    <p className="text-gray-600">真實學生評價，幫助您選擇最適合的老師</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <Card className="shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">
                為什麼選擇無限家教？
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">彈性時間</h3>
                  <p className="text-gray-600">隨時隨地學習，配合您的作息安排</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">社群導向</h3>
                  <p className="text-gray-600">學習者社群互助，共同成長進步</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">品質保證</h3>
                  <p className="text-gray-600">嚴格篩選師資，確保教學品質</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Subscription */}
          <Card className="shadow-xl border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                訂閱最新消息
              </CardTitle>
              <CardDescription className="text-lg">
                第一時間獲得平台上線通知和優惠資訊
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="輸入您的電子信箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  {isSubmitting ? "訂閱中..." : "訂閱"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-xl bg-gray-50 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                聯絡我們
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold mb-1">電子信箱</h3>
                  <p className="text-gray-600">contact@nolimittutors.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold mb-1">聯絡電話</h3>
                  <p className="text-gray-600">+886-2-1234-5678</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-orange-600 mb-2" />
                  <h3 className="font-semibold mb-1">服務地區</h3>
                  <p className="text-gray-600">台灣全島</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            <span className="text-xl font-bold">NO LIMIT TUTOR 無限家教</span>
          </div>
          <p className="text-gray-400">© 2024 無限家教. 版權所有.</p>
        </div>
      </footer>
    </div>
  );
}


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Users, BookOpen, Target, Star } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Fetch email count from Supabase
  const { data: emailCount, isLoading, refetch } = useQuery({
    queryKey: ['email-count'],
    queryFn: async () => {
      console.log('Fetching email count from Supabase...');
      const { count, error } = await supabase
        .from('email_list')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Error fetching email count:', error);
        throw error;
      }
      
      console.log('Email count fetched:', count);
      return count || 0;
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      console.log('Submitting email:', email);
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);

      if (error) {
        console.error('Error inserting email:', error);
        throw error;
      }

      toast({
        title: "申請成功！",
        description: "我們會盡快與您聯繫。",
      });

      setEmail("");
      // Refetch the count after successful submission
      refetch();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "申請失敗",
        description: "請稍後再試或聯繫我們。",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">EduMax</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">特色</a>
            <a href="#benefits" className="text-gray-600 hover:text-purple-600 transition-colors">優勢</a>
            <a href="#apply" className="text-gray-600 hover:text-purple-600 transition-colors">申請</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            成為頂尖的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> AI 教育家</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            加入我們的專業培訓計劃，掌握最新的 AI 教學技術，提升您的教學效果，
            讓學生在未來的數位世界中脫穎而出。
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {isLoading ? "..." : emailCount}
              </div>
              <div className="text-gray-600">已有老師申請</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-gray-600">滿意度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">合作學校</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">立即申請加入</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="請輸入您的電子郵件"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "提交中..." : "免費申請試用"}
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              * 完全免費，無需信用卡
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">為什麼選擇我們？</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">個人化 AI 助教</h3>
              <p className="text-gray-600">為每位學生量身打造的學習體驗，提高學習效率和成果。</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">專業社群支持</h3>
              <p className="text-gray-600">加入活躍的教育者社群，分享經驗和最佳實踐。</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">持續更新課程</h3>
              <p className="text-gray-600">跟上最新的 AI 技術發展，確保您的教學方法始終領先。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">學員成功故事</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png" alt="成功故事" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">張老師</h3>
                  <p className="text-gray-600">台北市立中學數學老師</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "使用 AI 教學助手後，我的學生的數學成績平均提升了 30%。
                個人化的學習路徑讓每個學生都能按照自己的節奏學習，效果非常顯著。"
              </blockquote>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600">5.0 分滿分評價</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">準備好改變您的教學方式了嗎？</h2>
          <p className="text-xl mb-8 opacity-90">
            立即申請，開始您的 AI 教育之旅
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            立即開始
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-bold">EduMax</span>
              </div>
              <p className="text-gray-400">
                引領未來教育，讓每個學生都能發揮潜能。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">產品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI 教學助手</a></li>
                <li><a href="#" className="hover:text-white transition-colors">課程管理系統</a></li>
                <li><a href="#" className="hover:text-white transition-colors">學習分析工具</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">幫助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">社群論壇</a></li>
                <li><a href="#" className="hover:text-white transition-colors">聯繫我們</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">公司</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">關於我們</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">隱私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduMax. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

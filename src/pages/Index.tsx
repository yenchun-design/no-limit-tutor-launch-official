import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Users,
  GraduationCap,
  Clock,
  Star,
  BookOpen,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailCount, setEmailCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchEmailCount();
  }, []);

  const fetchEmailCount = async () => {
    try {
      // 使用新的安全函數來獲取 email 數量 
      const { data, error } = await supabase.rpc('get_email_count');
      
      if (error) {
        console.error('Error fetching email count:', error);
        return;
      }
      
      setEmailCount(data || 0);
    } catch (error) {
      console.error('Error fetching email count:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "請輸入電子郵件",
        description: "電子郵件地址不能為空",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "電子郵件格式不正確",
        description: "請輸入有效的電子郵件地址",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "此電子郵件已經註冊過了",
            description: "請使用其他電子郵件地址",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "註冊成功！",
          description: "我們會在平台準備好時通知您",
        });
        setEmail("");
        // 重新獲取 email 數量
        fetchEmailCount();
      }
    } catch (error) {
      console.error('Error inserting email:', error);
      toast({
        title: "註冊失敗",
        description: "請稍後再試，或聯繫客服",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                全台首創無抽成家教平台
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              No Limit Tutor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              連結優秀教師與學生的橋樑，打造最有效的學習體驗
            </p>
            
            {/* Email Registration Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="輸入您的電子郵件"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8"
                >
                  {isLoading ? "註冊中..." : "搶先體驗"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              <p className="text-purple-200 text-sm mt-3">
                已有 {emailCount} 位老師申請
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">優質師資</h3>
                <p className="text-sm text-purple-200">嚴選專業教師</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">零抽成</h3>
                <p className="text-sm text-purple-200">教師收入100%</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">即時媒合</h3>
                <p className="text-sm text-purple-200">快速找到合適對象</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              平台特色
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              為什麼選擇我們？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們致力於打造一個公平、透明、高效的教學媒合平台
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>零抽成政策</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  教師收入100%歸己，我們不抽取任何費用，讓教師專注於教學品質提升
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>專業師資審核</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  嚴格審核教師資格與教學經驗，確保每位學生都能獲得最優質的教學服務
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>彈性上課時間</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  支援線上線下教學，時間地點完全彈性，配合師生雙方的時間安排
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>評價系統</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  透明的雙向評價機制，幫助師生建立信任，持續提升教學品質
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>多元科目</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  涵蓋各年級各科目，從國小到大學，語言學習到專業技能一應俱全
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>學習追蹤</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  完整的學習歷程記錄，幫助學生和家長了解學習進度與成效
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              使用流程
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              三步驟開始學習之旅
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              簡單快速的媒合流程，讓您輕鬆找到理想的教師或學生
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">註冊帳號</h3>
              <p className="text-gray-600">
                填寫基本資料，選擇您的身份（教師/學生），完成實名認證
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">媒合配對</h3>
              <p className="text-gray-600">
                系統智能推薦合適的教師/學生，也可以主動搜尋篩選
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">開始上課</h3>
              <p className="text-gray-600">
                確認上課時間地點，開始您的專屬學習或教學體驗
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            準備好開始了嗎？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            加入我們的等候清單，成為第一批體驗No Limit Tutor平台的使用者
          </p>
          
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="輸入您的電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8"
              >
                {isLoading ? "註冊中..." : "立即註冊"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>

          <p className="text-purple-200">
            已有 {emailCount} 位老師申請 • 完全免費 • 隨時可以取消
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">No Limit Tutor</h3>
              <p className="text-gray-400 mb-4">
                連結優秀教師與學生的橋樑，打造最有效的學習體驗
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">服務項目</h4>
              <ul className="space-y-2 text-gray-400">
                <li>一對一家教</li>
                <li>小班制教學</li>
                <li>線上課程</li>
                <li>專業技能培訓</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">熱門科目</h4>
              <ul className="space-y-2 text-gray-400">
                <li>數學</li>
                <li>英文</li>
                <li>物理化學</li>
                <li>程式設計</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">聯絡我們</h4>
              <ul className="space-y-2 text-gray-400">
                <li>客服信箱</li>
                <li>常見問題</li>
                <li>使用條款</li>
                <li>隱私政策</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 No Limit Tutor. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X, Users, BookOpen, TrendingUp, Shield, Star, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Query to get the count of email signups
  const { data: signupCount = 0 } = useQuery({
    queryKey: ['signup-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('email_list')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Error fetching signup count:', error);
        return 0;
      }
      
      return count || 0;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "請輸入電子郵件",
        description: "請提供有效的電子郵件地址",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);
      
      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "電子郵件已存在",
            description: "此電子郵件已經註冊過了",
            variant: "destructive",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "註冊成功！",
        description: "感謝您加入NLT老師行列",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Error inserting email:', error);
      toast({
        title: "註冊失敗",
        description: "請稍後再試",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <img src="/lovable-uploads/f538ac65-1182-49f5-a544-254b47b03784.png" alt="平台比較表" className="mx-auto mb-8 max-w-full h-auto rounded-lg shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            No Limit Tutor
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            革命性線上教學平台 - 零抽成、無限制、高效率
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Users className="h-6 w-6 text-yellow-300" />
              <span>已有 <span className="font-bold text-yellow-300">{signupCount}</span> 位老師加入</span>
            </div>
          </div>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="輸入您的電子郵件"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/90 text-gray-900 placeholder:text-gray-600"
            />
            <Button type="submit" size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              立即加入
            </Button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            加入即可獲得最新平台資訊和獨家優惠
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">功能特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">零抽成政策</h3>
              <p className="text-gray-600">老師收入100%歸自己，平台永不抽成</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">無限制教學</h3>
              <p className="text-gray-600">不限科目、不限時間、自由安排課程</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">智能匹配</h3>
              <p className="text-gray-600">AI技術精準媒合師生，提高成功率</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">平台比較</h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white rounded-lg shadow-lg">
              <TableHeader>
                <TableRow className="bg-gray-800 hover:bg-gray-800">
                  <TableHead className="text-white font-bold text-base md:text-lg lg:text-xl">平台</TableHead>
                  <TableHead className="text-white font-bold text-base md:text-lg lg:text-xl">老師抽成</TableHead>
                  <TableHead className="text-white font-bold text-base md:text-lg lg:text-xl">學生服務費</TableHead>
                  <TableHead className="text-white font-bold text-base md:text-lg lg:text-xl">追蹤政策</TableHead>
                  <TableHead className="text-white font-bold text-base md:text-lg lg:text-xl">平台費</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-semibold text-base md:text-lg lg:text-xl">No Limit Tutor</TableCell>
                  <TableCell className="text-green-600 font-bold text-base md:text-lg lg:text-xl">0%</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">25%</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">全新創新台灣追蹤</TableCell>
                  <TableCell className="text-green-600 font-bold text-base md:text-lg lg:text-xl">20% (國內外)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-semibold text-base md:text-lg lg:text-xl">平台A</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">8-38%</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">10%</TableCell>
                  <TableCell className="text-red-600 text-base md:text-lg lg:text-xl">追蹤兩項、有匯損，預設追平台常</TableCell>
                  <TableCell className="text-red-600 text-base md:text-lg lg:text-xl">18-48% (每次都多課才能成功)</TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-semibold text-base md:text-lg lg:text-xl">平台B</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">20-35%</TableCell>
                  <TableCell className="text-green-600 font-bold text-base md:text-lg lg:text-xl">0%</TableCell>
                  <TableCell className="text-red-600 text-base md:text-lg lg:text-xl">極難追蹤、追常追蹤平台與學校</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">20-35%</TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="font-semibold text-base md:text-lg lg:text-xl">其他多數平台</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">不透明</TableCell>
                  <TableCell className="text-base md:text-lg lg:text-xl">不透明</TableCell>
                  <TableCell className="text-red-600 text-base md:text-lg lg:text-xl">超過七天不能完全確認款，只能轉讓或吸收損失</TableCell>
                  <TableCell className="text-red-600 text-base md:text-lg lg:text-xl">不透明，可能超過65%之間不明</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">老師見證</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "使用NLT平台後，我的收入增加了40%，而且不用擔心被抽成。學生匹配度也很高！"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    王
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">王老師</p>
                    <p className="text-sm text-gray-500">數學專科</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">準備開始您的教學之旅嗎？</h2>
          <p className="text-xl mb-8 text-blue-100">
            加入數千名老師的行列，體驗零抽成的教學平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8">
              <Clock className="mr-2 h-5 w-5" />
              立即註冊
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              了解更多
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">No Limit Tutor</h3>
              <p className="text-gray-400">革命性線上教學平台</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">服務</h4>
              <ul className="space-y-2 text-gray-400">
                <li>線上教學</li>
                <li>課程管理</li>
                <li>學生匹配</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">支援</h4>
              <ul className="space-y-2 text-gray-400">
                <li>使用指南</li>
                <li>技術支援</li>
                <li>常見問題</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">聯絡我們</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@nlt.com</li>
                <li>02-1234-5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 No Limit Tutor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  // Fetch email count using the secure function
  const { data: emailCount = 0 } = useQuery({
    queryKey: ['emailCount'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_email_count');
      if (error) {
        console.error('Error fetching email count:', error);
        return 0;
      }
      return data || 0;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "錯誤",
        description: "請輸入電子郵件地址",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      toast({
        title: "申請成功！",
        description: "我們會盡快與您聯繫",
      });
      
      setEmail("");
      
      // Refetch email count after successful submission
      window.location.reload();
    } catch (error) {
      console.error('Error submitting email:', error);
      toast({
        title: "申請失敗",
        description: "請稍後再試",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              搶先成為元老級教師
            </h1>
            <p className="text-xl text-white/90 mb-8">
              加入我們的教師團隊，開始您的線上教學之旅
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-yellow-300 rounded-lg p-6 mb-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              已有 {emailCount} 位老師申請
            </h2>
            <p className="text-gray-700">搶先成為元老級教師</p>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              立即申請
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  電子郵件地址
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="請輸入您的電子郵件"
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                申請成為教師
              </Button>
            </form>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">彈性時間</h4>
              <p>自由安排您的教學時間</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">豐厚收入</h4>
              <p>競爭力的教學報酬</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">專業支援</h4>
              <p>完整的教學資源與技術支援</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

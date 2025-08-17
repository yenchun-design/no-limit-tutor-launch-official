
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signupCount, setSignupCount] = useState<number>(0);
  const { toast } = useToast();

  // Fetch initial signup count
  useEffect(() => {
    const fetchSignupCount = async () => {
      const { data, error } = await supabase.rpc('get_signup_count');
      if (!error && data !== null) {
        setSignupCount(data);
      }
    };
    
    fetchSignupCount();
  }, []);

  // Set up real-time subscription for signup count
  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'email_signups'
        },
        async () => {
          // Refetch the count when there's any change
          const { data, error } = await supabase.rpc('get_signup_count');
          if (!error && data !== null) {
            setSignupCount(data);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "此電子郵件已經註冊過了",
            description: "請使用不同的電子郵件地址。",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "註冊成功！",
          description: "我們會在課程開放時通知您。",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "註冊失敗",
        description: "請稍後再試。",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            成為元老級教師
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            搶先體驗最新的線上教學平台
          </p>
        </div>

        {/* Teacher application count badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="bg-black/80 text-yellow-300 px-6 py-3 text-lg font-bold">
            <Users className="w-5 h-5 mr-2" />
            已有 {signupCount} 位老師申請
          </Badge>
        </div>

        {/* Main content cards */}
        <div className="space-y-8">
          {/* First card - 搶先成為元老級教師 */}
          <Card className="bg-yellow-300 border-4 border-black shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  搶先成為元老級教師
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="輸入您的電子郵件"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border-2 border-black"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-black text-yellow-300 hover:bg-gray-800 border-2 border-black font-bold px-6"
                  >
                    {isLoading ? "提交中..." : "立即申請"}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          {/* Second card - 為什麼選擇我們 */}
          <Card className="bg-white border-4 border-black shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                為什麼選擇我們？
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">創新平台</h3>
                  <p className="text-gray-700">最先進的線上教學工具和功能</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">高收益</h3>
                  <p className="text-gray-700">優厚的分潤機制，讓您的知識變現</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">全程支援</h3>
                  <p className="text-gray-700">專業團隊協助您成功開課</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third card - 元老級教師特權 */}
          <Card className="bg-orange-400 border-4 border-black shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                元老級教師特權
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">優先審核權</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">專屬推廣資源</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">更高分潤比例</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">一對一輔導</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">平台首頁推薦</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <span className="text-yellow-300 text-sm">✓</span>
                    </div>
                    <span className="font-semibold">終身會員資格</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12 pb-8">
          <p className="text-white text-lg mb-4">
            機會有限，立即加入我們的教師行列！
          </p>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="再次輸入您的電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-2 border-black"
                required
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-yellow-300 text-black hover:bg-yellow-200 border-2 border-black font-bold px-6"
              >
                {isLoading ? "提交中..." : "確認申請"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;


import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, Star, Clock, BookOpen, Heart } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalSignups, setTotalSignups] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetchSignupCount();
  }, []);

  const fetchSignupCount = async () => {
    try {
      const { count, error } = await supabase
        .from("email_list")
        .select("*", { count: "exact", head: true });
      
      if (error) {
        console.error("Error fetching signup count:", error);
      } else {
        setTotalSignups(count || 0);
      }
    } catch (error) {
      console.error("Error in fetchSignupCount:", error);
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("email_list")
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "已經註冊過了！",
            description: "這個信箱已經在我們的通知名單中了。",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "註冊成功！",
          description: "感謝您的支持，我們會在平台上線時通知您！",
        });
        setEmail("");
        fetchSignupCount();
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast({
        title: "註冊失敗",
        description: "請稍後再試，或聯繫我們的支援團隊。",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-orange-400 to-yellow-300">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Beta Badge */}
          <div className="text-center">
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm md:text-base font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              🚀 Beta 版即將推出
            </div>
          </div>

          {/* Title and Logo */}
          <div className="text-center">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-white font-black text-2xl md:text-4xl">N</span>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tight">
                NO LIMIT TUTOR
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black">
                無限家教
              </h2>
            </div>
          </div>

          {/* Enhanced CTA Section - Teacher Recruitment */}
          <div className="space-y-4 md:space-y-6">
            {/* Main CTA Headline */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 border-4 md:border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] px-6 py-6 md:px-10 md:py-8 text-center transform hover:scale-105 transition-transform duration-200">
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 fill-current" />
                  <span className="text-yellow-300 font-bold text-sm md:text-base">限時招募</span>
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-300 fill-current" />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  招募 2026 年線上家教老師中！
                </h2>
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-bold text-sm md:text-base border-2 border-black">
                  💰 高收入 + 彈性時間 + 在家工作
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <Clock className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 text-orange-600" />
                <h3 className="font-black text-lg md:text-xl mb-2">彈性排課</h3>
                <p className="text-sm md:text-base font-semibold">自由安排上課時間</p>
              </div>
              <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 text-orange-600" />
                <h3 className="font-black text-lg md:text-xl mb-2">專業培訓</h3>
                <p className="text-sm md:text-base font-semibold">完整教學支援系統</p>
              </div>
              <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <Heart className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 text-orange-600" />
                <h3 className="font-black text-lg md:text-xl mb-2">溫暖社群</h3>
                <p className="text-sm md:text-base font-semibold">與優秀教師共同成長</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://forms.gle/Ztut3UCMqghCEoDD8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-xl md:text-2xl px-8 py-4 md:px-12 md:py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 rounded-lg"
              >
                🚀 立即申請成為家教老師
              </a>
              <p className="text-black font-bold text-sm md:text-base mt-3">
                搶先加入，享有創始會員專屬福利！
              </p>
            </div>
          </div>

          {/* Main Value Proposition */}
          <div className="text-center">
            <div className="bg-white border-4 md:border-6 border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black mb-4 md:mb-6 leading-tight">
                台灣第一個民主、群眾導向的一對一家教平台
              </h2>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg md:text-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  🎯 精準媒合 • 透明評價 • 公平競爭
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto border-3 border-black">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black">民主評選機制</h3>
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  學生與家長共同評價，確保教學品質透明化
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto border-3 border-black">
                  <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black">智能配對系統</h3>
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  AI 分析學習需求，精準媒合最適合的家教老師
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-3 md:border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto border-3 border-black">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black">個人化學習</h3>
                <p className="text-base md:text-lg font-semibold text-gray-700">
                  量身打造學習計畫，讓每個學生都能發揮潛能
                </p>
              </div>
            </div>
          </div>

          {/* Email Signup Section */}
          <div className="text-center space-y-6 md:space-y-8">
            <div className="bg-white border-4 md:border-5 border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)]">
              <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                {/* Call to Action Message */}
                <div className="bg-white border-3 md:border-5 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] text-center">
                  <h2 className="text-3xl md:text-4xl font-black text-black mb-4 md:mb-6">
                    還在等什麼？
                  </h2>
                  <p className="text-2xl md:text-3xl font-black text-black">
                    現在就加入 No Limit Tutor 教師行列
                  </p>
                </div>

                {/* Signup Stats */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                      <span className="font-black text-lg md:text-xl">
                        已有 {totalSignups.toLocaleString()} 人搶先註冊！
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Form */}
                <form onSubmit={handleEmailSignup} className="space-y-4 md:space-y-6">
                  <div className="max-w-md mx-auto">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        type="email"
                        placeholder="輸入您的電子信箱"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 md:h-14 text-base md:text-lg border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-black text-lg md:text-xl px-8 py-3 md:px-12 md:py-4 h-auto border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  >
                    {isLoading ? "註冊中..." : "🚀 搶先註冊，成為創始會員"}
                  </Button>
                </form>

                <p className="text-sm md:text-base text-gray-600 font-medium">
                  平台正式上線時，我們會第一時間通知您！
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="bg-black text-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]">
              <p className="text-lg md:text-xl font-black">
                No Limit Tutor - 突破學習界限，創造無限可能
              </p>
              <p className="text-sm md:text-base font-semibold mt-2 opacity-80">
                © 2024 No Limit Tutor. 台灣教育科技的新革命.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

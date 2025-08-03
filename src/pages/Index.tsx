import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Trophy, Star, CheckCircle, Clock, DollarSign, Globe, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import OpenGraphMeta from "@/components/OpenGraphMeta";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const { toast } = useToast();

  // Dynamic join count - replace with real data from your backend
  const [joinCount, setJoinCount] = useState(1247);

  useEffect(() => {
    // Simulate real-time join count updates (replace with real API call)
    const interval = setInterval(() => {
      setJoinCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "請輸入有效的 Email 地址",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingEmail(true);
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "訂閱成功！",
        description: "我們會在平台上線時第一時間通知你",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "訂閱失敗",
        description: "請稍後再試",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <>
      <OpenGraphMeta
        title="No Limit Tutor 無限家教 | 台灣線上家教平台"
        description="無抽成、彈性教學、全台最自由的家教平台。NLT 正在招募首批教師與學生，免費申請中！"
        image="/lovable-uploads/cc9d776e-5a85-4800-a1be-a3bc9ff7c138.png"
        joinCount={joinCount}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        {/* Hero Section with dynamic join count */}
        <section className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Live Join Counter */}
              <div className="inline-block bg-green-400 border-4 border-black px-6 py-2 text-lg font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide animate-pulse">
                🔥 已有 {joinCount.toLocaleString()} 人加入！
              </div>
              
              <div className="bg-white border-8 border-black p-6 mb-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <h1 className="text-5xl md:text-7xl font-black text-black mb-6 uppercase tracking-tight leading-tight">
                  No Limit
                  <span className="block text-red-600">Tutor</span>
                  <span className="block text-2xl md:text-3xl text-blue-600 font-bold">無限家教</span>
                </h1>
              </div>

              <div className="bg-yellow-300 border-6 border-black p-4 mb-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <p className="text-2xl md:text-3xl font-black text-black uppercase tracking-wide">
                  台灣最自由的線上家教平台
                </p>
                <p className="text-lg md:text-xl font-bold text-black mt-2">
                  無抽成 • 彈性教學 • 自由定價
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="輸入你的 Email，搶先體驗"
                    className="shadow appearance-none border border-black rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmittingEmail}
                  />
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
                    disabled={isSubmittingEmail}
                  >
                    {isSubmittingEmail ? "訂閱中..." : "立即訂閱"}
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1: Unlimited Access */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">全球學生</h3>
                <p className="text-gray-700">打破地域限制，服務全球學生。</p>
              </div>

              {/* Feature 2: Expert Tutors */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">多元科目</h3>
                <p className="text-gray-700">不只學科，還有音樂、美術、語言等。</p>
              </div>

              {/* Feature 3: Flexible Scheduling */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">彈性時間</h3>
                <p className="text-gray-700">自由安排上課時間，學習更有效率。</p>
              </div>

              {/* Feature 4: Secure Payments */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">自由定價</h3>
                <p className="text-gray-700">老師自己決定價格，收入更有保障。</p>
              </div>

              {/* Feature 5: Community */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">社群交流</h3>
                <p className="text-gray-700">與其他老師交流教學經驗。</p>
              </div>

              {/* Feature 6: Safe and Secure */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">安全保障</h3>
                <p className="text-gray-700">平台提供安全的上課環境。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-blue-200 to-blue-300 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              準備好加入了嗎？
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              立即註冊，成為 No Limit Tutor 的一份子！
            </p>
            <div className="flex justify-center">
              <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-xl">
                免費註冊
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Star, 
  MessageSquare, 
  Video,
  DollarSign,
  Shield,
  BookOpen,
  Globe,
  ArrowRight,
  Mail
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailCount, setEmailCount] = useState(11); // Default fallback value

  // Fetch email count from Supabase
  useEffect(() => {
    const fetchEmailCount = async () => {
      try {
        const { count, error } = await supabase
          .from('email_list')
          .select('*', { count: 'exact', head: true });
        
        if (error) {
          console.error('Error fetching email count:', error);
        } else if (count !== null) {
          setEmailCount(count);
        }
      } catch (error) {
        console.error('Error fetching email count:', error);
      }
    };

    fetchEmailCount();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "請輸入 Email",
        description: "請輸入有效的 Email 地址",
        variant: "destructive",
      });
      return;
    }

    setIsSubmittingEmail(true);
    
    try {
      const { error } = await supabase
        .from('email_list')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Email 已存在",
            description: "此 Email 已在我們的通知列表中",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "訂閱成功！",
          description: "我們會在平台上線時第一時間通知你",
        });
        setEmail('');
        // Update email count after successful submission
        setEmailCount(prevCount => prevCount + 1);
      }
    } catch (error) {
      toast({
        title: "訂閱失敗",
        description: "請稍後再試，或聯繫我們的客服",
        variant: "destructive",
      });
      console.error('Email subscription error:', error);
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-sm text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('principles')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">NLT 三大主張</button>
            <button onClick={() => scrollToSection('features')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能特色</button>
            <button onClick={() => scrollToSection('process')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">學習流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費方式</button>
            <button onClick={() => scrollToSection('teacher')} className="text-xl font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">成為教師</button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm px-6 py-3 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入教師招募
            </Button>
          </nav>
          
          {/* Mobile CTA Button */}
          <div className="md:hidden">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm px-4 py-3 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              加入招募
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-red-400">
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-12">
                <div className="flex-1 space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h1 className="text-7xl md:text-8xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                        No Limit Tutor
                      </h1>
                      <div className="mt-4 mb-6">
                        <span className="text-6xl md:text-7xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                          無限家教
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 ml-4">
                      <img 
                        src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                        alt="No Limit Tutor Logo" 
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black leading-tight bg-white px-8 py-6 border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
                      台灣首個民主、群眾導向的線上一對一家教平台
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 text-2xl text-black leading-relaxed max-w-5xl bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-16">
                <p className="font-bold text-2xl">
                  No Limit Tutor 是專為台灣師生打造的線上教學平台，不從老師抽成、提供學生 100% 隨時退款保障，並確保師生安全
                </p>
                <div className="space-y-4 bg-gradient-to-r from-orange-100 to-amber-100 border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-lg">不滿意試教？全額退費</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-lg">沒有綁約、沒有抽成、沒有名目費用</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                    <span className="font-black text-lg">公平的缺席、爭議、退款與回報機制</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-200 to-red-200 border-6 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black text-black text-2xl">
                    立即加入限額招募，共同建立一個群眾學習社群！
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-6 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-6 border-white shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                >
                  成為首批元老級教師
                  <ArrowRight className="ml-2 w-8 h-8" />
                </Button>

                {/* Email Form - Consistent design */}
                <div className="w-full max-w-md">
                  <form onSubmit={handleEmailSubmit}>
                    <div className="flex flex-col space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="請輸入你的 Email 地址"
                        disabled={isSubmittingEmail}
                        className="w-full h-14 px-4 text-center text-lg font-black text-gray-700 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingEmail}
                        className="w-full h-14 bg-green-500 hover:bg-green-600 text-black text-lg font-black tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingEmail ? '訂閱中...' : '立即訂閱通知'}
                        {!isSubmittingEmail && <ArrowRight className="ml-2 w-6 h-6" />}
                      </button>
                    </div>
                    <p className="text-sm font-black text-black text-center mt-4">
                      * 我們承諾不會濫用你的 Email，也不會分享給第三方
                    </p>
                  </form>
                </div>
              </div>
              <div className="text-center pt-2">
                <p className="text-sm font-bold text-black">
                  * 完全免費，我們承諾不會向你收取任何費用
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Service Principles Section */}
      <section id="principles" className="py-20 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-8 border-black px-8 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8 inline-block transform rotate-1">
              <span className="text-4xl md:text-5xl font-black text-black uppercase tracking-wide">No Limit Tutor 的三大服務主張</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-8 border-b-4 border-black">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-2xl uppercase mb-3 tracking-wide">民主式、群眾導向平台</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-xl text-black font-bold leading-relaxed">老師自由授課，學生自選課題，無需綁定固定教材或長期合約</p>
              </div>
            </div>
            
            <div className="bg-white border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-8 border-b-4 border-black">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <Video className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-2xl uppercase mb-3 tracking-wide">視訊教學</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-xl text-black font-bold leading-relaxed">簡潔、穩定的線上預約與視訊上課系統，實現一對一學習的彈性與效率</p>
              </div>
            </div>
            
            <div className="bg-white border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-8 border-b-4 border-black">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-black text-2xl uppercase mb-3 tracking-wide">不抽成、沒有名目費用</h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="text-xl text-black font-bold leading-relaxed">NLT 不從教師收入中抽成，而是在教師定價上增加些許費用，以保障學生退款、師生良性互動，以及金流安全。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-amber-200 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              功能特色
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-8 border-black px-8 py-6 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8 inline-block transform -rotate-1">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-wide">完整的教學生態系統</h2>
            </div>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">從師資篩選到課程管理，為你提供全方位的學習支援</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-300 to-orange-300 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">師資媒合</h3>
                <p className="font-bold text-black text-base">多元篩選，匹配最適合的教師</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>依科目、價格、地區篩選</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>可授課時間查詢</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>星級評分系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>學生評價展示</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-300 to-blue-400 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Clock className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">彈性預約系統</h3>
                <p className="font-bold text-black text-base">互動式時段選擇，即時預約確認</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>25分鐘試教課程</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>4、8、12、16堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>自動月扣款訂閱 (含自動通知)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>隨時取消訂閱</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-300 to-green-400 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Video className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">視訊教學平台</h3>
                <p className="font-bold text-black text-base">專業線上教室，支持多種互動功能</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>高品質視訊通話</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>螢幕分享功能</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>即時文字聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>評價回饋系統</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-300 to-purple-400 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <MessageSquare className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">安全聊天系統</h3>
                <p className="font-bold text-black text-base">加密通訊，保護用戶隱私</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>文字即時聊天</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>圖片檔案傳送</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>基本加密保護</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>25MB檔案限制</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <DollarSign className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">透明收費機制</h3>
                <p className="font-bold text-black text-base">公平定價，支持多種支付方式</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>試教課 50 % 優惠，不滿意可全額退費</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>30天無條件退款</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>綠界金流整合</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 border-2 border-black" />
                    <span>信用卡支付與刷退，安全、簡便</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-300 to-red-400 border-6 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-wide">完善保障機制</h3>
                <p className="font-bold text-black text-base">多重保護，確保教學品質</p>
              </div>
              <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <ul className="space-y-3 text-sm text-black font-bold">
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span>課程發生認證</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span>No-Show處理</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span>投訴檢舉系統</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-black" />
                    <span>客服爭議處理</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Mid-Page CTA */}
          <div className="text-center mt-16">
            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-6 border-white shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                搶先成為元老級教師
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              {/* Email Form - Consistent design */}
              <div className="w-full max-w-md">
                <form onSubmit={handleEmailSubmit}>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="請輸入你的 Email 地址"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 px-4 text-center text-lg font-black text-gray-700 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 bg-green-500 hover:bg-green-600 text-black text-lg font-black tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingEmail ? '訂閱中...' : '立即訂閱通知'}
                      {!isSubmittingEmail && <ArrowRight className="ml-2 w-6 h-6" />}
                    </button>
                  </div>
                  <p className="text-sm font-black text-black text-center mt-4">
                    * 我們承諾不會濫用你的 Email，也不會分享給第三方
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section id="process" className="py-20 bg-gradient-to-br from-orange-300 to-red-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              學習流程
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">簡單三步，開始你的學習之旅</h2>
            <p className="text-xl text-black font-bold max-w-3xl mx-auto bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">從註冊到上課，我們讓整個過程變得簡單而順暢</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽教師檔案，查看教師經驗、學生評價，選擇最適合你的老師",
                icon: <Users className="w-8 h-8" />,
                color: "bg-amber-300"
              },
              {
                step: "2", 
                title: "預約試教",
                description: "預約25分鐘試教課程，驗證教師的教學風格，確認是否符合需求",
                icon: <Clock className="w-8 h-8" />,
                color: "bg-blue-300"
              },
              {
                step: "3",
                title: "開始學習",
                description: "購買課程方案，開始你的個人化學習旅程，隨時追蹤學習進度",
                icon: <Video className="w-8 h-8" />,
                color: "bg-pink-300"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 ${item.color} p-8`}>
                <div className="pb-4">
                  <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-4xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">{item.title}</h3>
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-black font-bold leading-relaxed text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-orange-200 to-amber-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">透明公平的定價機制</h2>
            <p className="text-xl text-black font-bold bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">為教師與學生創造雙贏的學習環境</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white">
              <div className="bg-blue-300 text-center p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">體驗課程</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">試教課程</h3>
                <p className="font-bold text-black mb-4 text-lg">25分鐘體驗</p>
                <div className="text-3xl font-black text-black mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-6 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  正式課程 50% 折扣
                </div>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">25分鐘一對一教學</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">了解教師教學風格</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">不滿意可退費</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white relative">
              <div className="bg-blue-300 text-center p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">進入課程</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">正式課程</h3>
                <p className="font-bold text-black mb-4 text-lg">50分鐘完整課程</p>
                <div className="text-3xl font-black text-black mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-6 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  教師定價 + 保障服務費
                </div>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-3 mb-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-lg font-bold text-black">4/8/12/16 堂課選擇</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-lg font-bold text-black">自動月訂制</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-lg font-bold text-black">隨時取消訂閱</span>
                  </li>
                </ul>
                <div className="bg-orange-200 border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-base font-black text-black mb-2 uppercase">保障服務費用以確保:</p>
                  <ul className="space-y-2 text-sm text-black font-bold">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 border border-black" />
                      <span>平台內視訊、安全金流、試教課退費保障</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 border border-black" />
                      <span>排課系統（自動通知老師，不用寫訊息）</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 border border-black" />
                      <span>評價系統</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 border border-black" />
                      <span>安全回報機制</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white">
              <div className="bg-blue-300 text-center p-6 border-b-4 border-black">
                <div className="bg-white border-4 border-black px-4 py-2 text-black font-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">品質保證</div>
                <h3 className="text-2xl font-black text-black mb-2 uppercase">退款保障</h3>
                <p className="font-bold text-black mb-4 text-lg">30天保證期</p>
                <div className="text-3xl font-black text-black mt-4 bg-gradient-to-r from-yellow-300 to-amber-300 border-6 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  100% 退款
                </div>
              </div>
              <div className="bg-white p-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">購買後30天內</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">未完成課程退款</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black" />
                    <span className="text-base font-bold text-black">無條件申請</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher CTA */}
      <section id="teacher" className="py-20 bg-gradient-to-br from-orange-200 to-orange-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              教師招募
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 bg-amber-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">
              成為首批元老級教師
            </h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <p className="text-xl text-black font-bold leading-relaxed">
                留下你的聯繫方式，我們將在平台上線時第一時間通知你
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-6 border-white shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                立即加入教師招募
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              {/* Email Form - Consistent design */}
              <div className="w-full max-w-md">
                <form onSubmit={handleEmailSubmit}>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="請輸入你的 Email 地址"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 px-4 text-center text-lg font-black text-gray-700 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 bg-green-500 hover:bg-green-600 text-black text-lg font-black tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingEmail ? '訂閱中...' : '立即訂閱通知'}
                      {!isSubmittingEmail && <ArrowRight className="ml-2 w-6 h-6" />}
                    </button>
                  </div>
                  <p className="text-sm font-black text-black text-center mt-4">
                    * 我們承諾不會濫用你的 Email，也不會分享給第三方
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Collection Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先通知
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 bg-amber-300 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">
              平台上線第一時間通知你
            </h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <p className="text-xl text-black font-bold leading-relaxed">
                留下你的 Email，我們會在 No Limit Tutor 正式上線時，第一時間通知你
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-6 border-white shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                搶先成為元老級教師
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              {/* Email Form - Consistent design */}
              <div className="w-full max-w-md">
                <form onSubmit={handleEmailSubmit}>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="請輸入你的 Email 地址"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 px-4 text-center text-lg font-black text-gray-700 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingEmail}
                      className="w-full h-14 bg-green-500 hover:bg-green-600 text-black text-lg font-black tracking-wide border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingEmail ? '訂閱中...' : '立即訂閱通知'}
                      {!isSubmittingEmail && <ArrowRight className="ml-2 w-6 h-6" />}
                    </button>
                  </div>
                  <p className="text-sm font-black text-black text-center mt-4">
                    * 我們承諾不會濫用你的 Email，也不會分享給第三方
                  </p>
                </form>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm font-bold text-black">
                * 我們承諾不會濫用你的 Email，也不會分享給第三方
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Follow Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 text-base font-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先追蹤
            </div>
            <h2 className="text-4xl font-black text-black mb-6 bg-amber-400 border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">社群互動</h2>
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <p className="text-xl text-black font-bold">
                進一步了解 No Limit Tutor 文化與價值訴求，及平台努力的方向<br />
                提供回饋，共造嶄新的民主學習環境
              </p>
            </div>
            
            <div className="flex flex-col gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-black border-6 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full max-w-lg"
                onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
              >
                追蹤臉書 - 掌握 NLT 價值與動態
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500 text-black border-6 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full max-w-lg"
                onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
              >
                追蹤 IG - 觀看國外搞笑迷因學英文
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black border-6 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-xl px-12 py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 w-full max-w-lg"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                填寫表單 - 成為 NLT 的一員
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm font-bold text-black">
                * 平台上線後將優先通知你註冊使用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-red-400 to-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-6 border-black px-8 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase">
                準備好開始了嗎？
              </h2>
              <p className="text-2xl text-black font-bold">
                加入 No Limit Tutor，共建民主學習新時代
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-8 border-black px-12 py-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-wide">
                目前已有 {emailCount} 位老師加入
              </h2>
            </div>
            <div className="bg-white border-6 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
              <p className="text-2xl text-black font-bold leading-relaxed">
                越來越多優秀教師選擇 No Limit Tutor<br />
                成為首批元老教師，有望享有平台發展紅利！
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-6 border-white shadow-[14px_14px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-2xl px-16 py-10 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                立即加入教師招募
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-6 border-black shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] p-8 w-full md:w-auto max-w-lg">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-black mr-3" />
                  <h3 className="text-2xl font-black text-black">輸入你的 Email 地址</h3>
                </div>
                <p className="text-xl font-bold text-black text-center mb-6">平台上線後立即通知你！</p>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="請輸入你的 Email 地址"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingEmail}
                    className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xl py-3 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmittingEmail ? '訂閱中...' : '立即訂閱通知'}
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </button>
                </form>
                <p className="text-sm font-bold text-black text-center mt-4">
                  * 我們承諾不會濫用你的 Email，也不會分享給第三方
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                <span className="text-2xl font-black text-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-sm text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <div className="mb-6">
                <p className="text-3xl font-black text-white mb-4">No Limit Tutor</p>
                <p className="text-white text-lg font-bold">
                  突破規則，知識無限 -<br />
                  優質、民主、自在的一對一教學
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-sm font-bold underline transition-colors">隱私條款</a>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                © 2025 No Limit Tutor. All rights reserved.<br />
                No Limit Tutor 無限家教為睿思博遠有限公司註冊之商標
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

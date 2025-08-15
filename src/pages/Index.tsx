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
  Mail,
  ExternalLink,
  UserCheck,
  HelpCircle,
  CheckCircle,
  XCircle,
  CreditCard,
  Calendar,
  RefreshCw,
  Search,
  MousePointer,
  PlayCircle,
  Wallet
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailCount, setEmailCount] = useState(11);

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
        if (error.code === '23505') {
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
      {/* Header - Optimized with larger fonts */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl md:text-3xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-2xl font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-base md:text-lg text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('principles')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">主張</button>
            <button onClick={() => scrollToSection('features')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能</button>
            <button onClick={() => scrollToSection('process')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">流程</button>
            <button onClick={() => scrollToSection('pricing')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費</button>
            <button onClick={() => scrollToSection('faq')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">FAQ</button>
            <button onClick={() => scrollToSection('social')} className="text-lg font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">社群連結</button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-6 py-3 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入教師招募
            </Button>
          </nav>
          
          <div className="lg:hidden">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-lg px-4 py-3 uppercase tracking-wide transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              加入招募
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Larger fonts and better mobile first page */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-red-400">
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8 md:space-y-12">
              {/* Title and Logo - Much larger fonts */}
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                    alt="No Limit Tutor Logo" 
                    className="w-20 h-20 md:w-32 md:h-32 object-contain mx-auto mb-4"
                  />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] md:drop-shadow-[6px_6px_0px_rgba(255,255,255,1)] mb-4">
                  No Limit Tutor
                </h1>
                <div className="mb-8">
                  <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] md:drop-shadow-[6px_6px_0px_rgba(255,255,255,1)]">
                    無限家教
                  </span>
                </div>
              </div>
              
              {/* Main Value Proposition - Larger and more prominent */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight bg-white px-6 md:px-12 py-6 md:py-10 border-4 md:border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 mb-8">
                  台灣首個民主、群眾導向線上家教平台
                </h2>
              </div>
              
              {/* Key Benefits - Larger text */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white border-4 md:border-8 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black text-xl md:text-3xl text-center mb-6 md:mb-8">
                    專為台灣師生打造，不抽成、100% 退款保障、確保安全
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:gap-6 bg-gradient-to-r from-orange-100 to-amber-100 border-3 md:border-6 border-black p-4 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-2xl">不滿意試教？全額退費</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-2xl">零抽成、零綁約、零名目費用</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-2xl">公平爭議處理機制</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section - Better spaced and larger */}
              <div className="space-y-8 md:space-y-12">
                {/* Teacher Count - More prominent */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-6 md:px-12 py-6 md:py-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block">
                    <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-wide mb-2 md:mb-4">
                      已有 {emailCount} 位老師申請
                    </h2>
                    <p className="text-xl md:text-3xl font-black text-black">
                      搶先成為元老級教師
                    </p>
                  </div>
                </div>

                {/* Main Action - Highlighted prominently */}
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                  {/* Call to Action Message */}
                  <div className="bg-white border-4 md:border-8 border-black p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6">
                      還在等什麼？
                    </h2>
                    <p className="text-xl md:text-2xl font-black text-black">
                      現在就加入 No Limit Tutor 教師行列
                    </p>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="w-full max-w-2xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-4 md:border-8 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] font-black text-xl md:text-3xl px-8 md:px-16 py-6 md:py-10 uppercase tracking-wide transform hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center justify-center"
                      onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                    >
                      立即加入教師招募
                      <ArrowRight className="ml-3 md:ml-4 w-6 h-6 md:w-8 md:h-8" />
                    </Button>
                  </div>

                  {/* Email Form - Larger and more prominent */}
                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <Mail className="w-6 h-6 md:w-8 md:h-8 text-black mr-3 md:mr-4" />
                      <h3 className="text-xl md:text-3xl font-black text-black">輸入你的 Email 地址</h3>
                    </div>
                    <p className="text-lg md:text-2xl font-black text-black text-center mb-6 md:mb-8">搶先成為 NLT 首批教師！</p>
                    <form onSubmit={handleEmailSubmit} className="space-y-4 md:space-y-6">
                      <input
                        type="email"
                        placeholder="請輸入你的 Email 地址"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 md:h-20 px-4 md:px-6 text-lg md:text-2xl text-center border-4 md:border-6 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingEmail}
                        className="w-full h-14 md:h-20 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black text-lg md:text-2xl uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingEmail ? '訂閱中...' : '搶先登記'}
                        <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-7 md:h-7" />
                      </button>
                    </form>
                    <p className="text-base md:text-lg font-bold text-black text-center mt-4 md:mt-6">
                      * 我們承諾不會濫用你的 Email，也不會分享給第三方
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Guidance Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 md:border-6 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <UserCheck className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-4 md:mr-6" />
                <h2 className="text-3xl md:text-5xl font-black text-black">學生專區</h2>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12">
                平台開發中，搶先登記優先通知！
              </p>
              <Button
                size="lg"
                className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                學生登記表單
                <ExternalLink className="ml-3 md:ml-4 w-6 h-6 md:w-8 md:h-8" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Service Principles Section - Consistent alignment */}
      <section id="principles" className="py-16 md:py-24 bg-gradient-to-br from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-16 py-6 md:py-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1">
              <span className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide">NLT 三大服務主張</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Principle cards with consistent sizing and larger fonts */}
            {[
              {
                icon: <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-white" />,
                title: "民主、群眾導向",
                description: "自由授課，自選課題，無綁定教材或長期合約"
              },
              {
                icon: <Video className="w-12 h-12 md:w-16 md:h-16 text-white" />,
                title: "視訊教學",
                description: "穩定線上預約與視訊系統，實現一對一彈性學習"
              },
              {
                icon: <Star className="w-12 h-12 md:w-16 md:h-16 text-white" />,
                title: "零抽成",
                description: "不從教師抽成，而是增加服務費保障退款、安全互動與金流。"
              }
            ].map((principle, index) => (
              <div key={index} className="bg-white border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 h-full flex flex-col">
                <div className="bg-gradient-to-br from-orange-200 to-amber-200 p-8 md:p-12 border-b-4 border-black flex flex-col items-center text-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-amber-400 to-orange-500 border-4 border-black flex items-center justify-center mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    {principle.icon}
                  </div>
                  <h3 className="font-black text-black text-2xl md:text-3xl uppercase tracking-wide">{principle.title}</h3>
                </div>
                <div className="bg-white p-8 md:p-10 flex-grow flex items-center">
                  <p className="text-xl md:text-2xl text-black font-bold leading-relaxed text-center">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How NLT Works Section - NEW */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-4 md:border-6 border-black px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              NLT 運作流程
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-12 py-6 md:py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide">簡單 4 步驟開始學習</h2>
            </div>
            <p className="text-xl md:text-2xl text-black font-bold max-w-3xl mx-auto bg-white border-4 md:border-6 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-12">從註冊到上課，一站式學習體驗</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Flow Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-300 to-blue-400 border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl md:text-3xl font-black text-black">1</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Search className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 uppercase">搜尋教師</h3>
                  <div className="bg-white border-3 md:border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center">
                    <p className="text-base md:text-lg font-bold text-black">依科目、價格、評分篩選最適合的老師</p>
                  </div>
                </div>
                {/* Arrow for larger screens */}
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-4xl text-black font-black">
                  →
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-300 to-green-400 border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl md:text-3xl font-black text-black">2</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <MousePointer className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 uppercase">預約試教</h3>
                  <div className="bg-white border-3 md:border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center">
                    <p className="text-base md:text-lg font-bold text-black">25分鐘體驗課，50%折扣價格試教</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-4xl text-black font-black">
                  →
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-300 to-purple-400 border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl md:text-3xl font-black text-black">3</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500 border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 uppercase">線上上課</h3>
                  <div className="bg-white border-3 md:border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center">
                    <p className="text-base md:text-lg font-bold text-black">專業視訊教室，一對一教學體驗</p>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-4xl text-black font-black">
                  →
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-300 to-orange-400 border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl md:text-3xl font-black text-black">4</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Wallet className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 uppercase">購買方案</h3>
                  <div className="bg-white border-3 md:border-4 border-black p-3 md:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center">
                    <p className="text-base md:text-lg font-bold text-black">選擇4-16堂課方案，按月訂閱</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Highlight */}
            <div className="bg-gradient-to-r from-yellow-200 to-amber-200 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-4xl font-black text-black mb-6 md:mb-8 uppercase">NLT 獨有優勢</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500 border-4 border-black flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <XCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4 uppercase">零抽成</h4>
                  <p className="text-lg md:text-xl font-bold text-black">老師實拿100%設定價格</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 border-4 border-black flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <RefreshCw className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4 uppercase">彈性退款</h4>
                  <p className="text-lg md:text-xl font-bold text-black">30天內100%退款保障</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 border-4 border-black flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4 uppercase">安全保障</h4>
                  <p className="text-lg md:text-xl font-bold text-black">完善爭議處理機制</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Restored to previous version UI */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-amber-200 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-4 md:border-6 border-black px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              功能特色
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-12 py-6 md:py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide">完整的教學生態系統</h2>
            </div>
            <p className="text-xl md:text-2xl text-black font-bold max-w-3xl mx-auto bg-white border-4 md:border-6 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-12">從師資篩選到課程管理，全方位學習支援</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* Feature cards with previous version design */}
            {[
              {
                icon: <Users className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "師資媒合",
                subtitle: "多元篩選最適教師",
                color: "bg-gradient-to-br from-amber-300 to-orange-300",
                features: ["依科目、價格篩選", "時間查詢", "星級評分", "學生評價"]
              },
              {
                icon: <Clock className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "彈性預約",
                subtitle: "即時預約確認",
                color: "bg-gradient-to-br from-blue-300 to-blue-400",
                features: ["25分鐘試教", "4-16堂課選擇", "自動月扣款", "隨時取消"]
              },
              {
                icon: <Video className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "視訊教學",
                subtitle: "專業線上教室",
                color: "bg-gradient-to-br from-green-300 to-green-400",
                features: ["高品質視訊", "螢幕分享", "即時聊天", "評價回饋"]
              },
              {
                icon: <MessageSquare className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "安全聊天",
                subtitle: "加密通訊保護",
                color: "bg-gradient-to-br from-purple-300 to-purple-400",
                features: ["文字聊天", "圖片傳送", "基本加密", "25MB限制"]
              },
              {
                icon: <DollarSign className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "透明收費",
                subtitle: "公平定價機制",
                color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
                features: ["試教50%優惠", "30天退款", "綠界金流", "信用卡支付"]
              },
              {
                icon: <Shield className="w-12 h-12 md:w-16 md:h-16 text-black" />,
                title: "完善保障",
                subtitle: "多重品質保護",
                color: "bg-gradient-to-br from-red-300 to-red-400",
                features: ["課程認證", "No-Show處理", "投訴檢舉", "客服爭議"]
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.color} border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6 md:p-8 h-full flex flex-col`}>
                <div className="mb-6 md:mb-8 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4 uppercase">{feature.title}</h3>
                  <p className="font-bold text-black text-xl md:text-2xl">{feature.subtitle}</p>
                </div>
                <div className="bg-white border-4 md:border-6 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
                  <ul className="space-y-4 md:space-y-6 text-lg md:text-xl text-black font-bold">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 md:w-5 md:h-5 border-2 border-black flex-shrink-0 ${
                          i === 0 ? 'bg-red-500' : 
                          i === 1 ? 'bg-blue-500' : 
                          i === 2 ? 'bg-green-500' : 
                          'bg-purple-500'
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Process - Consistent alignment and larger text */}
      <section id="process" className="py-16 md:py-24 bg-gradient-to-br from-orange-300 to-red-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-3 md:border-4 border-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              學習流程
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-black mb-6 md:mb-8 bg-amber-400 border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">簡單三步，開始學習</h2>
            <p className="text-lg md:text-xl text-black font-bold max-w-3xl mx-auto bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">從註冊到上課，簡單順暢</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "選擇教師",
                description: "瀏覽教師檔案，查看評價，選擇最適合的老師",
                color: "bg-amber-300"
              },
              {
                step: "2", 
                title: "預約試教",
                description: "25分鐘試教課程，確認教學風格",
                color: "bg-blue-300"
              },
              {
                step: "3",
                title: "開始學習",
                description: "購買方案，開始個人化學習旅程",
                color: "bg-pink-300"
              }
            ].map((item, index) => (
              <div key={index} className={`text-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 ${item.color} p-6 md:p-10 h-full flex flex-col`}>
                <div className="pb-4 md:pb-6">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white border-4 border-black flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-3xl md:text-5xl font-black text-black">{item.step}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-4 md:mb-6 uppercase">{item.title}</h3>
                </div>
                <div className="bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow flex items-center">
                  <p className="text-black font-bold leading-relaxed text-lg md:text-xl text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Consistent alignment and larger text */}
      <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-orange-200 to-amber-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-3 md:border-4 border-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-black mb-6 md:mb-8 bg-amber-400 border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">透明公平定價</h2>
            <p className="text-lg md:text-xl text-black font-bold bg-white border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">雙贏學習環境</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                type: "體驗課程",
                title: "試教課程",
                duration: "25分鐘體驗",
                price: "正式課程 50% 折扣",
                features: ["25分鐘一對一教學", "了解教師教學風格", "不滿意可退費"]
              },
              {
                type: "進入課程",
                title: "正式課程",
                duration: "50分鐘完整課程",
                price: "教師定價 + 保障服務費",
                features: ["4/8/12/16 堂課選擇", "自動月訂制", "隨時取消訂閱"]
              },
              {
                type: "品質保證",
                title: "退款保障",
                duration: "30天保證期",
                price: "100% 退款",
                features: ["購買後30天內", "未完成課程退款", "無條件申請"]
              }
            ].map((plan, index) => (
              <div key={index} className="border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white h-full flex flex-col">
                <div className="bg-blue-300 text-center p-6 md:p-8 border-b-4 border-black">
                  <div className="bg-white border-4 border-black px-4 py-2 md:px-6 md:py-3 text-black font-black mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase text-lg md:text-xl">{plan.type}</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4 uppercase">{plan.title}</h3>
                  <p className="font-bold text-black mb-4 md:mb-6 text-lg md:text-xl">{plan.duration}</p>
                  <div className="text-xl md:text-2xl font-black text-black bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-6 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    {plan.price}
                  </div>
                </div>
                <div className="bg-white p-4 md:p-6 flex-grow">
                  <ul className="space-y-3 md:space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 border border-black" />
                        <span className="text-lg md:text-xl font-bold text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <div className="bg-orange-200 border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-4 md:mt-6">
                      <p className="text-lg md:text-xl font-black text-black mb-3 md:mb-4 uppercase">保障服務費用以確保:</p>
                      <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-black font-bold">
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
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-purple-100 to-purple-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-4 md:border-6 border-black px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              常見問題
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-12 py-6 md:py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide">解答你的疑問</h2>
            </div>
            <p className="text-xl md:text-2xl text-black font-bold max-w-3xl mx-auto bg-white border-4 md:border-6 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-12">了解 NLT 如何解決傳統家教平台的痛點</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            {/* FAQ Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Platform Features FAQ */}
              <div className="bg-white border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-purple-500 border-4 border-black flex items-center justify-center mr-4 md:mr-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">平台特色</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3" />
                      為什麼選擇 NLT？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      NLT 是台灣首個零抽成、民主導向的線上家教平台。不像其他平台壓榨老師或綁定學生，我們提供公平透明的學習環境，讓師生都能自由選擇。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <Video className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
                      如何上課？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      透過我們的專業視訊教室系統，支援螢幕分享、即時聊天、課程筆記等功能。一對一線上教學，彈性預約時間。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mr-2 md:mr-3" />
                      有哪些課程科目？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      涵蓋語言學習、程式設計、商業技能、學科輔導、才藝教學等多元科目。從英文、日文到 Python、UI/UX，應有盡有。
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & Payment FAQ */}
              <div className="bg-white border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-500 border-4 border-black flex items-center justify-center mr-4 md:mr-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">收費方式</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-gradient-to-r from-green-100 to-green-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 mr-2 md:mr-3" />
                      真的零抽成嗎？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      是的！老師設定的價格就是老師實拿的金額。我們透過向學生收取 25% 服務費來維持平台運作，確保視訊品質、金流安全等服務。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-green-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
                      如何付款？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      支援信用卡付款，透過綠界金流確保安全。採用按月訂閱制，可選擇 4、8、12、16 堂課方案，隨時可取消。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-green-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mr-2 md:mr-3" />
                      可以退款嗎？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      試教課不滿意可全額退費。正式課程購買後 30 天內，未使用的課程可無條件申請 100% 退款。
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety & Quality FAQ */}
              <div className="bg-white border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-400 to-red-500 border-4 border-black flex items-center justify-center mr-4 md:mr-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">安全保障</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-gradient-to-r from-red-100 to-red-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3" />
                      師資如何把關？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      所有教師都需經過身份驗證與資格審核。學生評價系統確保教學品質，不適任教師會被系統自動排除。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-100 to-red-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
                      上課安全嗎？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      平台內建加密聊天系統，支援投訴檢舉機制。所有課程都有完整記錄，確保師生互動安全。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-100 to-red-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mr-2 md:mr-3" />
                      老師沒出現怎麼辦？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      教師 No-Show 會留下記錄，學生可獲得該堂課全額退款。多次 No-Show 的教師會被停用帳號。
                    </p>
                  </div>
                </div>
              </div>

              {/* Getting Started FAQ */}
              <div className="bg-white border-4 md:border-6 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-500 border-4 border-black flex items-center justify-center mr-4 md:mr-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">開始使用</h3>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 mr-2 md:mr-3" />
                      什麼是試教課？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      25 分鐘體驗課程，只需正式課程 50% 費用。讓你先了解老師教學風格，滿意再購買正式課程。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mr-2 md:mr-3" />
                      如何選擇老師？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      可依科目、價格、時間、評分等條件篩選。每位老師都有詳細介紹、學生評價和教學影片，幫你找到最適合的老師。
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-3 md:border-4 border-black p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-lg md:text-xl text-black mb-3 md:mb-4 flex items-center">
                      <Globe className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3" />
                      什麼時候上線？
                    </h4>
                    <p className="text-base md:text-lg font-bold text-black">
                      平台目前開發中，正在招募首批優質教師。預計 2025 年正式上線，現在登記可享元老教師優惠！
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-4xl font-black text-black mb-6 md:mb-8 uppercase">還有其他問題？</h3>
              <p className="text-xl md:text-2xl font-bold text-black mb-8 md:mb-10">
                我們很樂意為你解答！歡迎透過社群媒體聯繫我們
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
                >
                  Facebook 粉專
                  <ExternalLink className="ml-3 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
                >
                  Instagram
                  <ExternalLink className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Follow Section - Consistent alignment and larger text */}
      <section id="social" className="py-16 md:py-24 bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先追蹤
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-black mb-6 md:mb-8 bg-amber-400 border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">社群互動</h2>
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-black font-bold">
                進一步了解 No Limit Tutor 文化與價值訴求，及平台努力的方向<br />
                提供回饋，共造嶄新的民主學習環境
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto">
              {[
                {
                  text: "追蹤臉書 - 掌握 NLT 價值與動態",
                  url: "https://www.facebook.com/nolimittutor",
                  color: "bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500"
                },
                {
                  text: "追蹤 IG - 觀看國外搞笑迷因學英文",
                  url: "https://www.instagram.com/no_limit_tutor/",
                  color: "bg-gradient-to-r from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-500"
                },
                {
                  text: "填寫表單 - 成為 NLT 的一員",
                  url: "https://forms.gle/6cYoa9Lt2P7Wy8uu5",
                  color: "bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500"
                }
              ].map((item, index) => (
                <Button 
                  key={index}
                  size="lg" 
                  className={`w-full ${item.color} text-black border-4 md:border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] font-black text-lg md:text-xl px-6 md:px-8 py-6 md:py-8 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200`}
                  onClick={() => window.open(item.url, '_blank')}
                >
                  {item.text}
                  <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              ))}
            </div>
            
            <div className="text-center mt-6 md:mt-8">
              <p className="text-base md:text-lg font-bold text-black">
                * 平台上線後將優先通知你註冊使用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section - Added back from previous version */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-400 to-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Teacher Count Banner */}
            <div className="text-center mb-12 md:mb-16">
              <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-12 py-8 md:py-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block mb-8 md:mb-12">
                <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-wide mb-3 md:mb-4">
                  目前已有
                </h2>
                <div className="text-5xl md:text-7xl font-black text-black uppercase tracking-wide mb-3 md:mb-4">
                  {emailCount} 位老師
                </div>
                <div className="text-4xl md:text-6xl font-black text-black uppercase tracking-wide">
                  申請加入
                </div>
              </div>
              
              <div className="bg-white border-4 md:border-8 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-2xl md:text-3xl font-black text-black mb-6 md:mb-8">
                  越來越多優秀教師選擇 No Limit Tutor
                </p>
                <p className="text-xl md:text-2xl font-bold text-black">
                  成為首批元老教師，搶占平台發展先機！
                </p>
              </div>
            </div>

            {/* Email Form Section */}
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-8 md:mb-12">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-black mr-4 md:mr-6" />
                <h3 className="text-2xl md:text-4xl font-black text-black">最後機會！立即登記</h3>
              </div>
              <p className="text-xl md:text-2xl font-black text-black text-center mb-8 md:mb-10">成為 NLT 首批元老教師</p>
              <form onSubmit={handleEmailSubmit} className="space-y-6 md:space-y-8">
                <input
                  type="email"
                  placeholder="請輸入你的 Email 地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-16 md:h-20 px-6 md:px-8 text-xl md:text-2xl text-center border-4 md:border-6 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmittingEmail}
                  className="w-full h-16 md:h-20 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 md:border-6 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black text-xl md:text-2xl uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmittingEmail ? '訂閱中...' : '立即登記'}
                  <ArrowRight className="ml-4 md:ml-6 w-6 h-6 md:w-8 md:h-8" />
                </button>
              </form>
              <p className="text-lg md:text-xl font-bold text-black text-center mt-6 md:mt-8">
                * 我們承諾不會濫用你的 Email，也不會分享給第三方
              </p>
            </div>

            {/* Main CTA Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="w-full max-w-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-4 md:border-8 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] font-black text-2xl md:text-3xl px-8 md:px-16 py-8 md:py-12 uppercase tracking-wide transform hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
              >
                立即加入教師招募
                <ArrowRight className="ml-4 md:ml-6 w-8 h-8 md:w-10 md:h-10" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Student Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-200 to-indigo-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 md:border-6 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mr-4 md:mr-6" />
                <h2 className="text-3xl md:text-5xl font-black text-black">想學習新技能？</h2>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
                NLT 學生平台即將上線
              </p>
              <p className="text-lg md:text-xl font-bold text-black mb-8 md:mb-12">
                無論是語言學習、程式設計、藝術才藝，都能找到最適合的老師
              </p>
              <Button
                size="lg"
                className="w-full max-w-md bg-indigo-500 hover:bg-indigo-600 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl md:text-2xl px-8 md:px-12 py-6 md:py-8 transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                學生搶先登記
                <ExternalLink className="ml-3 md:ml-4 w-6 h-6 md:w-8 md:h-8" />
              </Button>
              <p className="text-base md:text-lg font-bold text-black text-center mt-4 md:mt-6">
                平台上線時將優先通知你註冊使用
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-4 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <span className="text-2xl md:text-3xl font-black text-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-base md:text-lg text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <div className="mb-6 md:mb-8">
                <p className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-6">No Limit Tutor</p>
                <p className="text-white text-lg md:text-xl font-bold">
                  突破規則，知識無限 -<br />
                  優質、民主、自在的一對一教學
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6 mb-4 md:mb-6">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-base md:text-lg font-bold underline transition-colors">隱私條款</a>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">
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

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
  Wallet,
  ChevronDown,
  ChevronUp,
  Heart,
  Target,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailCount, setEmailCount] = useState(11);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "NLT 真的對老師零抽成嗎？",
      answer: "是的！老師設定多少課程費用，就實拿多少。我們只向學生收取 25% 的服務費用來維持平台運作。"
    },
    {
      question: "如果試上不滿意怎麼辦？",
      answer: "25分鐘試教課程不滿意可申請全額退費。正式課程在購買後30天內，未完成亦未訂閱的課程，也可無條件申請 100% 退款。"
    },
    {
      question: "平台什麼時候會正式上線？",
      answer: "平台目前開發中，正在招募首批優質教師。預計 2026 年正式上線，現在登記，有機會成為資深元老教師！"
    },
    {
      question: "如何確保教師品質？",
      answer: "每個人對教學風格喜好不同，你可以藉由老師自介與評價系統了解老師，並用「100% 可退款」的試教課，無風險找到適合你的老師。"
    },
    {
      question: "支援哪些科目和語言？",
      answer: "我們目前有意願的老師能教國高中學科輔導、英文，程式基礎與商業技能。\n隨著未來更多優秀老師加入，會陸續加入才藝、日文、UI/UX 等多元課程。"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-2 md:border-3 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-xl md:text-2xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base md:text-lg font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-sm md:text-base text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-5">
            <button onClick={() => scrollToSection('home')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('what-is-nlt')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">NLT 是什麼</button>
            <button onClick={() => scrollToSection('features')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">FAQ</button>
            <button onClick={() => scrollToSection('social')} className="text-sm md:text-base font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">社群連結</button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-2 md:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-sm md:text-base px-4 py-2 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              立即加入教師招募
            </Button>
          </nav>
          
          <div className="lg:hidden">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-2 md:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-lg px-3 py-2 uppercase tracking-wide transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
              onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
            >
              加入招募
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 pb-10 md:pb-16">
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 md:space-y-12">
              {/* Title and Logo */}
              <div className="text-center">
                <div className="mb-6 md:mb-8">
                  <img 
                    src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                    alt="No Limit Tutor Logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4 md:mb-5"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] mb-4 md:mb-5">
                  No Limit Tutor
                </h1>
                <div className="mb-8 md:mb-10">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[3px_3px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                    無限家教
                  </span>
                </div>
              </div>
              
              {/* Main Value Proposition */}
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight bg-white px-6 md:px-10 py-6 md:py-8 border-3 md:border-5 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 mb-8 md:mb-10">
                  台灣第一個民主、群眾導向的一對一家教平台
                </h2>
              </div>
              
              {/* Key Benefits */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white border-3 md:border-5 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-8 md:mb-10">
                  <p className="font-black text-2xl md:text-3xl text-center mb-6 md:mb-8">
                   NLT 專為台灣師生打造，國內研發、台灣金流，交易透明安全，學習更安心
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:gap-6 bg-gradient-to-r from-orange-100 to-amber-100 border-2 md:border-4 border-black p-4 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-xl">不滿意試教？全額退費</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-xl">對老師零抽成、零綁約、零名目費用</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-xl">公平爭議處理機制</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-8 md:space-y-10">
                {/* Teacher Count */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-5 border-black px-8 md:px-12 py-8 md:py-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block max-w-3xl w-full">
                    <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-wide mb-3 md:mb-4">
                      已有 {emailCount} 位老師申請
                    </h2>
                    <p className="text-2xl md:text-3xl font-black text-black">
                      搶先成為元老級教師
                    </p>
                  </div>
                </div>

                {/* Main Action */}
                <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
                  {/* Call to Action Message */}
                  <div className="bg-white border-3 md:border-5 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6">
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
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 md:border-5 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] md:shadow-[13px_13px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-lg md:text-xl px-6 md:px-10 py-6 md:py-8 uppercase tracking-wide transform hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center justify-center"
                      onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                    >
                      立即加入教師招募
                      <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                  </div>

                  {/* Email Form */}
                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-3 md:border-5 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-black mr-3 md:mr-4" />
                      <h3 className="text-xl md:text-2xl font-black text-black">輸入你的 Email 地址</h3>
                    </div>
                    <p className="text-lg md:text-xl font-black text-black text-center mb-6 md:mb-8">搶先成為 NLT 首批教師！</p>
                    <form onSubmit={handleEmailSubmit} className="space-y-4 md:space-y-6">
                      <input
                        type="email"
                        placeholder="請輸入你的 Email 地址"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 md:h-16 px-5 md:px-7 text-lg md:text-xl text-center border-3 md:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingEmail}
                        className="w-full h-14 md:h-16 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-3 md:border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-lg uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingEmail ? '訂閱中...' : '加入教師招募'}
                        <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </form>
                    <p className="text-sm md:text-base font-bold text-black text-center mt-4 md:mt-6">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-100 to-blue-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white border-3 md:border-4 border-black p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <UserCheck className="w-7 h-7 md:w-9 md:h-9 text-blue-600 mr-4 md:mr-5" />
                <h2 className="text-3xl md:text-4xl font-black text-black">學生專區</h2>
              </div>
              <p className="text-2xl md:text-2xl font-bold text-black mb-8 md:mb-10">
                平台開發中，搶先登記優先通知！
              </p>
              <Button
                size="lg"
                className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-black text-lg md:text-lg px-8 md:px-10 py-6 md:py-6 transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                學生登記表單
                <ExternalLink className="ml-3 md:ml-4 w-6 h-6 md:w-7 md:h-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is NLT Section */}
      <section id="what-is-nlt" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-white border-3 md:border-4 border-black px-5 md:px-6 py-3 md:py-3 text-lg md:text-lg font-black mb-6 md:mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              NLT 是什麼
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-5 border-black px-8 md:px-10 py-6 md:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 mb-8 md:mb-10">
                <h2 className="font-black text-black uppercase tracking-wide text-center leading-tight">
    <div className="text-3xl md:text-4xl">不是</div>
    <div className="text-3xl md:text-4xl">Amazing Talker</div>
    <div className="text-2xl md:text-3xl">但使用方式很像</div>
  </h2>
            </div>
            <p className="text-xl md:text-xl text-black font-bold max-w-2xl mx-auto bg-white border-3 md:border-4 border-black p-5 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-10">先講結論：NLT 是一個讓老師拿到 100% 課程費用，學生享有 100% 退款保障的線上家教平台</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-12">
              {/* NLT 如何運作 */}
              <div className="bg-gradient-to-br from-green-300 to-green-400 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-6">
                <div className="flex items-center mb-6 md:mb-6">
                  <div className="w-12 h-12 md:w-13 md:h-13 bg-white border-3 border-black flex items-center justify-center mr-4 md:mr-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Heart className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">NLT 如何運作</h3>
                </div>
                
                <div className="bg-white border-2 md:border-3 border-black p-5 md:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-4 md:space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-green-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">免費註冊（永遠免費使用！）</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-blue-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">老師自訂每堂課學費（50 分鐘）</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-purple-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">3</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">NLT 在老師費用基礎上加保障服務費</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-orange-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">4</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">學生支付老師與 NLT 保障服務費，享受平台保障的權利</p>
                    </div>
                  </div>
                  <div className="bg-green-100 border-2 border-black p-4 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-5 md:mt-5">
                    <p className="text-base md:text-lg font-bold text-black">
                      <strong>注：</strong>保障服務費讓學生享有一般家教沒有的權益，比如試教全額退款、學費退款，與 NLT 老師聊天、互動評價系統等。
                    </p>
                  </div>
                </div>
              </div>

              {/* 如何使用 NLT */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 border-3 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-6">
                <div className="flex items-center mb-6 md:mb-6">
                  <div className="w-12 h-12 md:w-13 md:h-13 bg-white border-3 border-black flex items-center justify-center mr-4 md:mr-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Target className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">如何使用 NLT</h3>
                </div>
                
                <div className="bg-white border-2 md:border-3 border-black p-5 md:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-4 md:space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-red-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">老師建立自介頁，學生瀏覽選擇老師</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-green-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">學生選擇時間，預約上課</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-7 h-7 md:w-7 md:h-7 bg-purple-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-black text-sm">3</span>
                      </div>
                      <p className="text-lg md:text-lg font-bold text-black">登入 NLT，開始一對一視訊課程</p>
                    </div>
                    <div className="bg-blue-100 border-2 border-black p-4 md:p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-5 md:mt-5">
                      <p className="text-base md:text-lg font-bold text-black">
                        學生課後可以確認課程、進行評價，或回報錯誤與爭議，NLT 提供協助服務。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4個愛用NLT的理由 */}
            <div className="bg-gradient-to-r from-yellow-200 to-amber-200 border-3 md:border-5 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8 md:mb-8">
              <div className="text-center mb-6 md:mb-6">
                <div className="flex items-center justify-center mb-4 md:mb-4">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-black mr-3 md:mr-3" />
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">4 個愛用 NLT 的理由</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 mb-6 md:mb-6">
                <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-3 md:mb-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-red-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">1</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-black">100% 退款保障</h4>
                  </div>
                  <p className="text-lg md:text-lg font-bold text-black">試上不滿意？全額退費，零風險找到適合自己的老師</p>
                </div>
                
                <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-3 md:mb-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">2</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-black">優質師資</h4>
                  </div>
                  <p className="text-lg md:text-lg font-bold text-black">老師 0 抽成，鼓勵高品質教學，完整心力給學生</p>
                </div>
                
                <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-3 md:mb-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-green-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">3</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-black">彈性上課</h4>
                  </div>
                  <p className="text-lg md:text-lg font-bold text-black">24/7 隨時上課，沒上到的課 30 天內可以全額退款</p>
                </div>
                
                <div className="bg-white border-3 border-black p-4 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-3 md:mb-3">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-purple-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">4</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black text-black">第三方保障</h4>
                  </div>
                  <p className="text-lg md:text-lg font-bold text-black">NLT 公平透明處理爭議，讓師生沒有擔憂，專心上課！</p>
                </div>
              </div>

              {/* 彈性課程方案 */}
              <div className="bg-white border-3 border-black p-6 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-2xl md:text-3xl font-black text-black text-center mb-5 md:mb-6 uppercase">彈性課程方案</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                  <div className="bg-blue-200 border-2 border-black p-3 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-none mb-1">1堂/週</div>
                    <div className="text-sm md:text-base lg:text-lg font-bold text-black">新手冒險家</div>
                  </div>
                  <div className="bg-green-200 border-2 border-black p-3 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-none mb-1">2堂/週</div>
                    <div className="text-sm md:text-base lg:text-lg font-bold text-black">成長見習生</div>
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-3 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-none mb-1">3堂/週</div>
                    <div className="text-sm md:text-base lg:text-lg font-bold text-black">鍛鍊騎士</div>
                  </div>
                  <div className="bg-purple-200 border-2 border-black p-3 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-black leading-none mb-1">4堂/週</div>
                    <div className="text-sm md:text-base lg:text-lg font-bold text-black">知識狂戰士</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 透明公開的收費機制 */}
            <div className="bg-gradient-to-r from-pink-100 to-pink-200 border-3 md:border-5 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 mb-10 md:mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-black text-center mb-8 md:mb-8 uppercase">透明公開的平台營利機制</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-8">
                {/* 對老師 */}
                <div className="bg-green-300 border-3 border-black p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-13 md:h-13 bg-white border-3 border-black flex items-center justify-center mr-4 md:mr-6">
                      <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-black">對老師</h4>
                  </div>
                  
                  <div className="bg-white border-2 border-black p-5 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
                    <div className="text-center mb-4 md:mb-6">
                      <div className="text-5xl md:text-6xl font-black text-green-600">0%</div>
                      <div className="text-2xl md:text-3xl font-black text-black">平台抽成</div>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-xl font-bold text-black">設定 $500/堂，實拿 $500</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-xl font-bold text-black">學生先付才上課</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-xl font-bold text-black">無隱藏費用</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 對學生 */}
                <div className="bg-blue-300 border-3 border-black p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-13 md:h-13 bg-white border-3 border-black flex items-center justify-center mr-4 md:mr-6">
                      <Users className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-black">對學生</h4>
                  </div>
                  
                  <div className="bg-white border-2 border-black p-5 md:p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
                    <div className="text-center mb-4 md:mb-6">
                      <div className="text-5xl md:text-6xl font-black text-blue-600">25%</div>
                      <div className="text-2xl md:text-3xl font-black text-black">保障服務費</div>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-xl md:text-xl font-bold text-black">老師設定 $500，學生付 $625</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-xl md:text-xl font-bold text-black">試教退款依賴保障服務費</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-xl md:text-xl font-bold text-black">第三方服務、爭議排解</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-xl md:text-xl font-bold text-black">隨時可退款成新台幣</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        <span className="text-xl md:text-xl font-bold text-black">與老師們聊天、評價系統</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

   {/* 與其他平台比較 */}
<div className="bg-yellow-300 border-3 border-black p-6 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
  <h4 className="text-2xl md:text-3xl font-black text-black text-center mb-5 md:mb-6 uppercase">與其他平台比較</h4>
  <div className="overflow-x-auto" style={{ minWidth: '100%' }}>
    <div style={{ minWidth: '1000px' }}>
      <table className="w-full border-2 border-black bg-white text-sm relative">
        <thead>
          <tr className="bg-black text-white">
            <th
              className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-black z-10 
                         w-[4rem] min-w-[4rem] max-w-[4rem] break-words   /* 手機板窄 */
                         md:w-auto md:min-w-[6rem] md:max-w-none          /* 桌面板放寬 */">
              平台
            </th>
            <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">老師抽成</th>
            <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">學生服務費</th>
            <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">退款政策</th>
            <th className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">平台費用率</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 
                         w-[4rem] min-w-[4rem] max-w-[4rem] break-words 
                         md:w-auto md:min-w-[6rem] md:max-w-none">
              No Limit Tutor
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">0%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">25%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">全額退款</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-green-600">
              20% (國內業界最低)
            </td>
          </tr>
          <tr>
            <td
              className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 
                         w-[4rem] min-w-[4rem] max-w-[4rem] break-words 
                         md:w-auto md:min-w-[6rem] md:max-w-none">
              平台A
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">8-38%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">10%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">
              退款麻煩有匯損，預設退成平台幣
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">18-48%</td>
          </tr>
          <tr>
            <td
              className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 
                         w-[4rem] min-w-[4rem] max-w-[4rem] break-words 
                         md:w-auto md:min-w-[6rem] md:max-w-none">
              平台B
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">20-35%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">0%</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">
              極難退款，通常退不成
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">20-35%</td>
          </tr>
          <tr>
            <td
              className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black sticky left-0 bg-white z-10 
                         w-[4rem] min-w-[4rem] max-w-[4rem] break-words 
                         md:w-auto md:min-w-[6rem] md:max-w-none">
              其他多數平台
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">不透明</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">不透明</td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black">
              超過七天不能退款，只能轉讓或吸收損失
            </td>
            <td className="border-2 border-black p-3 md:p-4 text-base md:text-lg font-black text-red-600">
              不透明，可能在33-65%之間不等
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
              

            {/* NLT 獨有優勢 */}
            <div className="bg-gradient-to-r from-yellow-200 to-amber-200 border-3 md:border-5 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <div className="flex items-center justify-center mb-4 md:mb-4">
                  <Star className="w-6 h-6 md:w-7 md:h-7 text-black mr-3 md:mr-3" />
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase">NLT 獨有優勢</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5">
                <div className="bg-white border-3 border-black p-5 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-red-500 border-3 border-black flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="text-xl md:text-xl font-black text-black mb-2 md:mb-3 uppercase">對老師 0 抽成</h4>
                  <p className="text-lg md:text-lg font-bold text-black">珍惜台灣教育工作者與寶貴教育資源</p>
                </div>
                
                <div className="bg-white border-3 border-black p-5 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-blue-500 border-3 border-black flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <RefreshCw className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="text-xl md:text-xl font-black text-black mb-2 md:mb-3 uppercase">100% 新台幣退款保障</h4>
                  <p className="text-lg md:text-lg font-bold text-black">沒有點數制，不綁課程包，原卡退回新台幣</p>
                </div>
                
                <div className="bg-white border-3 border-black p-5 md:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-green-500 border-3 border-black flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h4 className="text-xl md:text-xl font-black text-black mb-2 md:mb-3 uppercase">平台商業模式公開透明</h4>
                  <p className="text-lg md:text-lg font-bold text-black">所有收費只有一筆，毫無隱藏費用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-gradient-to-br from-amber-200 to-orange-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-white border-3 md:border-3 border-black px-5 md:px-6 py-3 md:py-3 text-lg md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              功能特色
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-6 border-black px-8 md:px-10 py-6 md:py-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-wide">教學生態系統詳解</h2>
            </div>
            <p className="text-lg md:text-lg text-black font-bold max-w-3xl mx-auto bg-white border-3 md:border-3 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-10">深入了解完整功能，全方位學習支援</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            {/* Feature cards */}
            {[
              {
                icon: <Users className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "師資媒合",
                subtitle: "多元篩選最適教師",
                color: "bg-gradient-to-br from-amber-300 to-orange-300",
                features: ["依科目、價格篩選", "時間查詢", "星級評分", "學生評價"]
              },
              {
                icon: <Clock className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "彈性預約",
                subtitle: "即時預約確認",
                color: "bg-gradient-to-br from-blue-300 to-blue-400",
                features: ["25分鐘試教", "4-16堂課選擇", "自動月扣款", "隨時取消"]
              },
              {
                icon: <Video className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "視訊教學",
                subtitle: "專業線上教室",
                color: "bg-gradient-to-br from-green-300 to-green-400",
                features: ["高品質視訊", "螢幕分享", "即時聊天", "評價回饋"]
              },
              {
                icon: <MessageSquare className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "安全聊天",
                subtitle: "加密通訊保護",
                color: "bg-gradient-to-br from-purple-300 to-purple-400",
                features: ["文字聊天", "圖片傳送", "基本加密", "25MB限制"]
              },
              {
                icon: <DollarSign className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "透明收費",
                subtitle: "公平定價機制",
                color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
                features: ["試教50%優惠", "30天退款", "綠界金流", "信用卡支付"]
              },
              {
                icon: <Shield className="w-12 h-12 md:w-13 md:h-13 text-black" />,
                title: "完善保障",
                subtitle: "多重品質保護",
                color: "bg-gradient-to-br from-red-300 to-red-400",
                features: ["課程認證", "No-Show處理", "投訴檢舉", "客服爭議"]
              }
            ].map((feature, index) => (
              <div key={index} className={`${feature.color} border-4 md:border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 p-6 md:p-6 h-full flex flex-col`}>
                <div className="mb-6 md:mb-6 text-center">
                  <div className="w-20 h-20 md:w-19 md:h-19 bg-white border-4 border-black flex items-center justify-center mb-4 md:mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-xl font-black text-black mb-3 md:mb-3 uppercase">{feature.title}</h3>
                  <p className="font-bold text-black text-lg md:text-lg">{feature.subtitle}</p>
                </div>
                <div className="bg-white border-4 md:border-5 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
                  <ul className="space-y-4 md:space-y-5 text-base md:text-base text-black font-bold">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 md:w-4 md:h-4 border-2 border-black flex-shrink-0 ${
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

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-br from-orange-200 to-amber-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block bg-white border-3 md:border-3 border-black px-5 md:px-6 py-3 md:py-3 text-xl md:text-xl font-black mb-8 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-8 md:mb-8 bg-amber-400 border-4 border-black p-5 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 uppercase">透明公平定價</h2>
            <p className="text-xl md:text-xl text-black font-bold bg-white border-3 md:border-3 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">雙贏學習環境</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto">
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
              <div key={index} className="border-4 md:border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 bg-white h-full flex flex-col">
                <div className="bg-blue-300 text-center p-8 md:p-8 border-b-4 border-black">
                  <div className="bg-white border-4 border-black px-5 py-3 md:px-6 md:py-3 text-black font-black mb-5 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] uppercase text-xl md:text-xl">{plan.type}</div>
                  <h3 className="text-2xl md:text-2xl font-black text-black mb-4 md:mb-4 uppercase">{plan.title}</h3>
                  <p className="font-bold text-black mb-5 md:mb-6 text-xl md:text-xl">{plan.duration}</p>
                  <div className="text-2xl md:text-2xl font-black text-black bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-5 border-black p-5 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    {plan.price}
                  </div>
                </div>
                <div className="bg-white p-5 md:p-6 flex-grow">
                  <ul className="space-y-4 md:space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <div className="w-4 h-4 md:w-4 md:h-4 bg-red-500 border border-black" />
                        <span className="text-xl md:text-xl font-bold text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <div className="bg-orange-200 border-4 border-black p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mt-5 md:mt-6">
                      <p className="text-xl md:text-xl font-black text-black mb-4 md:mb-4 uppercase">保障服務費用來確保：</p>
                      <ul className="space-y-3 md:space-y-3 text-lg md:text-lg text-black font-bold">
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 border border-black" />
                          <span>學生試教不滿意， 100% 退款</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 border border-black" />
                          <span>未消耗課程，剩餘金額 100% 退回 (不會像其他平台一樣不給退)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 border border-black" />
                          <span>I人、E人都愛的排課系統 (訊息溝通)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-500 border border-black" />
                          <span>老師評價系統</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 border border-black" />
                          <span>平台內視訊、安全金流</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-pink-500 border border-black" />
                          <span>安全回報機制</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-indigo-500 border border-black" />
                          <span>檢舉與仲裁機制</span>
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
      <section id="faq" className="py-16 md:py-20 bg-gradient-to-br from-purple-100 to-purple-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-white border-3 md:border-5 border-black px-6 md:px-8 py-3 md:py-4 text-xl md:text-2xl font-black mb-6 md:mb-8 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              常見問題
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-6 border-black px-8 md:px-12 py-6 md:py-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-wide">熱門問答集</h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5 md:space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border-3 md:border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl md:text-2xl font-black text-black pr-5 leading-snug">{item.question}</h3>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                      {expandedFaq === index ? (
                        <ChevronUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      ) : (
                        <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <div className="border-t-3 border-black bg-gray-50 p-6 md:p-8">
                      <p className="text-lg md:text-xl font-bold text-black leading-relaxed whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-3 md:border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 text-center mt-8 md:mt-12">
              <h3 className="text-xl md:text-3xl font-black text-black mb-5 md:mb-6 uppercase">還有其他問題？</h3>
              <p className="text-lg md:text-xl font-bold text-black mb-6 md:mb-8">
                我們很樂意為你解答！<br />歡迎在社群媒體「發送訊息」聯繫 No Limit Tutor！
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center max-w-xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-lg px-5 md:px-6 py-3 md:py-5 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://www.facebook.com/nolimittutor', '_blank')}
                >
                  Facebook 粉專
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600 text-white border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-lg px-5 md:px-6 py-3 md:py-5 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  onClick={() => window.open('https://www.instagram.com/no_limit_tutor/', '_blank')}
                >
                  Instagram
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Follow Section */}
      <section id="social" className="py-16 md:py-20 bg-gradient-to-br from-green-100 to-green-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white border-4 border-black px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-black mb-6 md:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              搶先追蹤
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-black mb-6 md:mb-8 bg-amber-400 border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] inline-block transform rotate-1 uppercase">社群互動</h2>
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

      {/* Footer CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-400 to-red-500 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Teacher Count Banner */}
            <div className="text-center mb-12 md:mb-16">
              <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-8 border-black px-8 md:px-12 py-8 md:py-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide mb-3 md:mb-4">
                  目前已有
                </h2>
                <div className="text-4xl md:text-6xl font-black text-black uppercase tracking-wide mb-3 md:mb-4">
                  {emailCount} 位老師
                </div>
                <div className="text-3xl md:text-5xl font-black text-black uppercase tracking-wide">
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
                  {isSubmittingEmail ? '訂閱中...' : '立即成為 NLT 老師'}
                  <ArrowRight className="ml-4 md:ml-6 w-6 h-6 md:w-8 md:h-8" />
                </button>
              </form>
              <p className="text-base md:text-lg font-bold text-black text-center mt-6 md:mt-8">
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-200 to-indigo-200 mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 md:border-6 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-indigo-600 mr-4 md:mr-6" />
                <h2 className="text-2xl md:text-4xl font-black text-black">想學習新技能？</h2>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
                NLT 線上家教平台即將於 2026 年上線
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
                平台上線時將優先通知你
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-13 bg-black mt-10 md:mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">
            <div className="flex items-center space-x-3 md:space-x-3">
              <div className="w-12 h-12 md:w-13 md:h-13 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-3 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
                <span className="text-2xl md:text-2xl font-black text-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-base md:text-base text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <div className="text-left flex-1 max-w-2xl">
              <div className="mb-6 md:mb-6">
                <p className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-5">No Limit Tutor</p>
                <p className="text-white text-lg md:text-lg font-bold">
                  突破規則，知識無限 -<br />
                  優質、專業、自在的一對一教學
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-5 mb-4 md:mb-5">
                <a href="/privacy" className="text-amber-400 hover:text-amber-300 text-base md:text-base font-bold underline transition-colors">隱私條款</a>
              </div>
              <p className="text-gray-400 text-sm md:text-sm font-medium">
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

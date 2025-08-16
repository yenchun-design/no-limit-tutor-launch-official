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
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white shadow-[0_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 border-3 md:border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-2xl md:text-2xl font-black text-black">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-base font-black text-black uppercase tracking-tight">No Limit Tutor</span>
              <span className="text-base md:text-sm text-amber-600 font-black">無限家教</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">首頁</button>
            <button onClick={() => scrollToSection('what-is-nlt')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">什麼是NLT</button>
            <button onClick={() => scrollToSection('features')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">功能</button>
            <button onClick={() => scrollToSection('pricing')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">收費</button>
            <button onClick={() => scrollToSection('faq')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">FAQ</button>
            <button onClick={() => scrollToSection('social')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">社群連結</button>
            <button onClick={() => scrollToSection('principles')} className="text-lg md:text-sm font-black text-black hover:text-amber-600 transition-colors uppercase tracking-wide">主張</button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black text-sm px-4 py-2 uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
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

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-orange-400 to-red-400">
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8 md:space-y-10">
              {/* Title and Logo */}
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/6ed7f059-777c-4ced-8660-78aa11ba900f.png" 
                    alt="No Limit Tutor Logo" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-4"
                  />
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] mb-4">
                  No Limit Tutor
                </h1>
                <div className="mb-8">
                  <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] md:drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                    無限家教
                  </span>
                </div>
              </div>
              
              {/* Main Value Proposition */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-black leading-tight bg-white px-6 md:px-8 py-6 md:py-6 border-4 md:border-5 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 mb-8">
                  台灣首個民主、群眾導向的一對一線上家教平台
                </h2>
              </div>
              
              {/* Key Benefits */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white border-4 md:border-5 border-black p-6 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                  <p className="font-black text-xl md:text-xl text-center mb-6 md:mb-6">
                    NLT 專為台灣師生打造，不抽成、100% 退款保障、確保師生安全
                  </p>
                  <div className="grid grid-cols-1 gap-4 md:gap-5 bg-gradient-to-r from-orange-100 to-amber-100 border-3 md:border-4 border-black p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-4 md:h-4 bg-red-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-lg">不滿意試教？全額退費</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-4 md:h-4 bg-blue-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-lg">零抽成、零綁約、零名目費用</span>
                    </div>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-4 h-4 md:w-4 md:h-4 bg-green-500 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                      <span className="font-black text-lg md:text-lg">公平爭議處理機制</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-8 md:space-y-10">
                {/* Teacher Count */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-5 border-black px-6 md:px-8 py-6 md:py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block max-w-4xl w-full">
                    <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-wide mb-2 md:mb-3">
                      已有 {emailCount} 位老師申請
                    </h2>
                    <p className="text-4xl md:text-5xl font-black text-black">
                      搶先成為元老級教師
                    </p>
                  </div>
                </div>

                {/* Main Action */}
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                  {/* Call to Action Message */}
                  <div className="bg-white border-4 md:border-5 border-black p-6 md:p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] text-center">
                    <h2 className="text-2xl md:text-2xl font-black text-black mb-4 md:mb-5">
                      還在等什麼？
                    </h2>
                    <p className="text-xl md:text-xl font-black text-black">
                      現在就加入 No Limit Tutor 教師行列
                    </p>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-4 md:border-5 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[13px_13px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] font-black text-xl md:text-xl px-8 md:px-10 py-6 md:py-6 uppercase tracking-wide transform hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center justify-center"
                      onClick={() => window.open('https://forms.gle/Ztut3UCMqghCEoDD8', '_blank')}
                    >
                      立即加入教師招募
                      <ArrowRight className="ml-3 md:ml-4 w-6 h-6 md:w-6 md:h-6" />
                    </Button>
                  </div>

                  {/* Email Form */}
                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 md:border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] p-6 md:p-6">
                    <div className="flex items-center justify-center mb-4 md:mb-5">
                      <Mail className="w-6 h-6 md:w-6 md:h-6 text-black mr-3 md:mr-4" />
                      <h3 className="text-xl md:text-xl font-black text-black">輸入你的 Email 地址</h3>
                    </div>
                    <p className="text-lg md:text-lg font-black text-black text-center mb-6 md:mb-6">搶先成為 NLT 首批教師！</p>
                    <form onSubmit={handleEmailSubmit} className="space-y-4 md:space-y-5">
                      <input
                        type="email"
                        placeholder="請輸入你的 Email 地址"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-14 md:h-13 px-4 md:px-5 text-lg md:text-lg text-center border-4 md:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-bold focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingEmail}
                        className="w-full h-14 md:h-13 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black border-4 md:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] font-black text-lg md:text-lg uppercase tracking-wide transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingEmail ? '訂閱中...' : '搶先登記'}
                        <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-5 md:h-5" />
                      </button>
                    </form>
                    <p className="text-base md:text-sm font-bold text-black text-center mt-4 md:mt-5">
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
      <section className="py-16 md:py-16 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white border-4 md:border-4 border-black p-8 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-6">
              <div className="flex items-center justify-center mb-6 md:mb-6">
                <UserCheck className="w-8 h-8 md:w-8 md:h-8 text-blue-600 mr-4 md:mr-4" />
                <h2 className="text-3xl md:text-3xl font-black text-black">學生專區</h2>
              </div>
              <p className="text-2xl md:text-xl font-bold text-black mb-8 md:mb-8">
                平台開發中，搶先登記優先通知！
              </p>
              <Button
                size="lg"
                className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-black text-xl md:text-lg px-8 md:px-8 py-6 md:py-5 transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                onClick={() => window.open('https://forms.gle/6cYoa9Lt2P7Wy8uu5', '_blank')}
              >
                學生登記表單
                <ExternalLink className="ml-3 md:ml-3 w-6 h-6 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is NLT Section */}
      <section id="what-is-nlt" className="py-16 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              什麼是 NLT？
            </div>
            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-5 border-black px-8 md:px-8 py-6 md:py-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              <h2 className="text-3xl md:text-3xl font-black text-black uppercase tracking-wide">像 AmazingTalker 但更公平</h2>
            </div>
            <p className="text-xl md:text-lg text-black font-bold max-w-3xl mx-auto bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-8">一對一線上家教平台，但不奴役老師，真正為師生服務</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Platform Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-12">
              {/* What NLT Offers */}
              <div className="bg-gradient-to-br from-green-300 to-green-400 border-4 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-6">
                <div className="flex items-center mb-6 md:mb-6">
                  <div className="w-16 h-16 md:w-14 md:h-14 bg-white border-4 border-black flex items-center justify-center mr-4 md:mr-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Heart className="w-8 h-8 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">NLT 提供什麼</h3>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <ul className="space-y-4 md:space-y-4">
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-green-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 md:w-4 md:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">一對一線上教學</h4>
                        <p className="text-base md:text-base font-bold text-black">專業視訊教室，如同 AmazingTalker 的高品質教學體驗</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-blue-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <XCircle className="w-4 h-4 md:w-4 md:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">對老師零抽成</h4>
                        <p className="text-base md:text-base font-bold text-black">老師設定 $500/堂，就實拿 $500，不像其他平台抽 20-30%</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-purple-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-4 h-4 md:w-4 md:h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">固定服務費</h4>
                        <p className="text-base md:text-base font-bold text-black">只向學生收取 25% 服務費，確保平台品質與退款保障</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* How to Use NLT */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 border-4 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-6">
                <div className="flex items-center mb-6 md:mb-6">
                  <div className="w-16 h-16 md:w-14 md:h-14 bg-white border-4 border-black flex items-center justify-center mr-4 md:mr-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Target className="w-8 h-8 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">如何使用 NLT</h3>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <ul className="space-y-4 md:space-y-4">
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-red-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">自選家教、清楚需求</h4>
                        <p className="text-base md:text-base font-bold text-black">依照片、履歷、學生評價選擇老師</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-green-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">選擇時間、預約上課</h4>
                        <p className="text-base md:text-base font-bold text-black">購買課程後彈性選擇上課時間，若臨時有事可在12小時前取消課程</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 md:space-x-3">
                      <div className="w-6 h-6 md:w-6 md:h-6 bg-purple-500 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-black text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg md:text-lg font-black text-black mb-2">彈性地點、開啟課程</h4>
                        <p className="text-base md:text-base font-bold text-black">不管在哪，手機、電腦、平板皆可自在上課，使用內建視訊教室開啟課程</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Course Options */}
            <div className="bg-gradient-to-r from-yellow-200 to-amber-200 border-4 md:border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-8 mb-12 md:mb-10">
              <div className="text-center mb-8 md:mb-8">
                <div className="flex items-center justify-center mb-6 md:mb-6">
                  <Zap className="w-8 h-8 md:w-8 md:h-8 text-black mr-4 md:mr-5" />
                  <h3 className="text-2xl md:text-2xl font-black text-black mb-6 md:mb-5 uppercase">4 個愛用 NLT 的理由</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 mb-8 md:mb-8">
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-4 md:mb-4">
                    <div className="w-8 h-8 md:w-7 md:h-7 bg-red-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">1</span>
                    </div>
                    <h4 className="text-lg md:text-lg font-black text-black">100% 退款保障</h4>
                  </div>
                  <p className="text-base md:text-base font-bold text-black">試上不滿意？全額退費，零風險學習</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-4 md:mb-4">
                    <div className="w-8 h-8 md:w-7 md:h-7 bg-blue-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">2</span>
                    </div>
                    <h4 className="text-lg md:text-lg font-black text-black">優質師資</h4>
                  </div>
                  <p className="text-base md:text-base font-bold text-black">老師零抽成，更有動力提供優質教學</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-4 md:mb-4">
                    <div className="w-8 h-8 md:w-7 md:h-7 bg-green-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">3</span>
                    </div>
                    <h4 className="text-lg md:text-lg font-black text-black">彈性上課</h4>
                  </div>
                  <p className="text-base md:text-base font-bold text-black">24/7 隨時上課，12小時前可免費取消</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center mb-4 md:mb-4">
                    <div className="w-8 h-8 md:w-7 md:h-7 bg-purple-500 border-2 border-black flex items-center justify-center mr-3 md:mr-3">
                      <span className="text-white font-black text-sm">4</span>
                    </div>
                    <h4 className="text-lg md:text-lg font-black text-black">公平爭議處理</h4>
                  </div>
                  <p className="text-base md:text-base font-bold text-black">透明公正的師生爭議處理機制</p>
                </div>
              </div>

              {/* Course Packages */}
              <div className="bg-white border-4 border-black p-6 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="text-xl md:text-xl font-black text-black text-center mb-6 md:mb-6">彈性課程方案</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-3 border-black p-4 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-2xl font-black text-black mb-2 md:mb-2">4堂</div>
                    <div className="text-sm md:text-sm font-bold text-black">體驗方案</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 border-3 border-black p-4 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-2xl font-black text-black mb-2 md:mb-2">8堂</div>
                    <div className="text-sm md:text-sm font-bold text-black">入門方案</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-3 border-black p-4 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-2xl font-black text-black mb-2 md:mb-2">12堂</div>
                    <div className="text-sm md:text-sm font-bold text-black">進階方案</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-3 border-black p-4 md:p-4 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-2xl md:text-2xl font-black text-black mb-2 md:mb-2">16堂</div>
                    <div className="text-sm md:text-sm font-bold text-black">密集方案</div>
                  </div>
                </div>
              </div>
            </div>

            {/* NLT Unique Advantages */}
            <div className="bg-gradient-to-r from-red-200 to-pink-200 border-4 md:border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-8">
              <div className="text-center mb-8 md:mb-8">
                <div className="flex items-center justify-center mb-6 md:mb-6">
                  <Star className="w-8 h-8 md:w-8 md:h-8 text-black mr-4 md:mr-5" />
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">NLT 獨有優勢</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-red-500 border-3 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Heart className="w-6 h-6 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-lg font-black text-black mb-3 md:mb-3">零抽成政策</h4>
                  <p className="text-base md:text-sm font-bold text-black">老師收多少就拿多少，沒有隱藏費用</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-blue-500 border-3 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Shield className="w-6 h-6 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-lg font-black text-black mb-3 md:mb-3">100% 退款保障</h4>
                  <p className="text-base md:text-sm font-bold text-black">試上不滿意全額退費，學習零風險</p>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                  <div className="w-12 h-12 md:w-10 md:h-10 bg-green-500 border-3 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Users className="w-6 h-6 md:w-5 md:h-5 text-white" />
                  </div>
                  <h4 className="text-lg md:text-lg font-black text-black mb-3 md:mb-3">民主治理</h4>
                  <p className="text-base md:text-sm font-bold text-black">師生共同參與平台規則制定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              平台功能
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-black mb-6 md:mb-6">為師生打造的完整功能</h2>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {/* Feature cards with reduced desktop sizes */}
            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <Video className="w-8 h-8 md:w-7 md:h-7 text-blue-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">專業視訊教室</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">內建白板、螢幕分享、錄影功能</p>
            </div>

            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <Calendar className="w-8 h-8 md:w-7 md:h-7 text-green-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">彈性預約系統</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">24/7 預約，12小時前可免費取消</p>
            </div>

            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <CreditCard className="w-8 h-8 md:w-7 md:h-7 text-purple-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">安全付款系統</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">多種付款方式，交易安全有保障</p>
            </div>

            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <Star className="w-8 h-8 md:w-7 md:h-7 text-yellow-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">評價回饋系統</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">透明評價機制，確保教學品質</p>
            </div>

            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <MessageSquare className="w-8 h-8 md:w-7 md:h-7 text-blue-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">即時訊息系統</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">課前課後溝通零距離</p>
            </div>

            <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <div className="flex items-center mb-4 md:mb-4">
                <BookOpen className="w-8 h-8 md:w-7 md:h-7 text-green-600 mr-3 md:mr-3" />
                <h3 className="text-xl md:text-lg font-black text-black">學習記錄追蹤</h3>
              </div>
              <p className="text-base md:text-base font-bold text-black">完整記錄學習進度與成效</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-16 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              收費方式
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-black mb-6 md:mb-6">透明公開的收費機制</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-12 md:mb-12">
              {/* For Teachers */}
              <div className="bg-gradient-to-br from-green-300 to-green-400 border-4 md:border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-6">
                <div className="text-center mb-6 md:mb-6">
                  <div className="w-16 h-16 md:w-14 md:h-14 bg-white border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <GraduationCap className="w-8 h-8 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">對老師</h3>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center mb-6 md:mb-5">
                    <div className="text-4xl md:text-4xl font-black text-green-600 mb-2 md:mb-2">0%</div>
                    <div className="text-xl md:text-lg font-black text-black">平台抽成</div>
                  </div>
                  <ul className="space-y-3 md:space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-green-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">設定 $500/堂，實拿 $500</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-green-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">無隱藏費用</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-green-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">按時收款</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* For Students */}
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 border-4 md:border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-6">
                <div className="text-center mb-6 md:mb-6">
                  <div className="w-16 h-16 md:w-14 md:h-14 bg-white border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Users className="w-8 h-8 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-2xl font-black text-black uppercase">對學生</h3>
                </div>
                
                <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-center mb-6 md:mb-5">
                    <div className="text-4xl md:text-4xl font-black text-blue-600 mb-2 md:mb-2">25%</div>
                    <div className="text-xl md:text-lg font-black text-black">服務費</div>
                  </div>
                  <ul className="space-y-3 md:space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-blue-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">老師收費 $500，學生付 $625</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-blue-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">100% 退款保障</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 md:w-5 md:h-5 text-blue-600 mr-3 md:mr-3 flex-shrink-0" />
                      <span className="text-base md:text-base font-bold text-black">平台維護與客服</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gradient-to-r from-yellow-200 to-amber-200 border-4 md:border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-6">
              <h3 className="text-2xl md:text-2xl font-black text-black text-center mb-8 md:mb-6 uppercase">與其他平台比較</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="p-4 md:p-3 text-left font-black text-lg md:text-base">平台</th>
                      <th className="p-4 md:p-3 text-center font-black text-lg md:text-base">老師抽成</th>
                      <th className="p-4 md:p-3 text-center font-black text-lg md:text-base">學生服務費</th>
                      <th className="p-4 md:p-3 text-center font-black text-lg md:text-base">退款政策</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-3 border-black">
                      <td className="p-4 md:p-3 font-black text-lg md:text-base text-green-600">NLT</td>
                      <td className="p-4 md:p-3 text-center font-black text-lg md:text-base text-green-600">0%</td>
                      <td className="p-4 md:p-3 text-center font-black text-lg md:text-base">25%</td>
                      <td className="p-4 md:p-3 text-center font-black text-lg md:text-base text-green-600">100% 退款</td>
                    </tr>
                    <tr className="border-b-3 border-black">
                      <td className="p-4 md:p-3 font-bold text-lg md:text-base">其他平台</td>
                      <td className="p-4 md:p-3 text-center font-bold text-lg md:text-base text-red-600">20-30%</td>
                      <td className="p-4 md:p-3 text-center font-bold text-lg md:text-base">0-15%</td>
                      <td className="p-4 md:p-3 text-center font-bold text-lg md:text-base">有限制</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              常見問題
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-black mb-6 md:mb-6">你可能想知道的問題</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-5">
            {[
              {
                question: "NLT 真的對老師零抽成嗎？",
                answer: "是的！老師設定多少課程費用，就實拿多少。我們只向學生收取 25% 的服務費用來維持平台運作。"
              },
              {
                question: "如果試上不滿意怎麼辦？",
                answer: "我們提供 100% 退款保障。試上不滿意可以申請全額退費，我們相信優質的教學品質。"
              },
              {
                question: "平台什麼時候正式上線？",
                answer: "目前正在積極開發中，預計 2024 年第二季上線。現在註冊可以搶先成為首批用戶！"
              },
              {
                question: "如何確保教學品質？",
                answer: "我們有嚴格的老師審核機制，並且提供透明的評價系統。加上零抽成政策，老師更有動力提供優質教學。"
              },
              {
                question: "支援哪些科目和語言？",
                answer: "支援所有學科和語言教學，從學術科目到技能培養，從中文到各國語言，應有盡有。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border-4 md:border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                <details className="p-6 md:p-5">
                  <summary className="cursor-pointer flex items-center justify-between">
                    <h3 className="text-lg md:text-lg font-black text-black pr-4">{faq.question}</h3>
                    <HelpCircle className="w-6 h-6 md:w-5 md:h-5 text-black flex-shrink-0" />
                  </summary>
                  <div className="mt-4 md:mt-4 pt-4 md:pt-4 border-t-3 border-black">
                    <p className="text-base md:text-base font-bold text-black leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="social" className="py-16 md:py-16 bg-gradient-to-br from-purple-100 to-pink-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              社群連結
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-black mb-6 md:mb-6">與我們保持聯繫</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
              <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-center">
                <div className="w-16 h-16 md:w-14 md:h-14 bg-blue-500 border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Globe className="w-8 h-8 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-lg font-black text-black mb-3 md:mb-3">官方網站</h3>
                <p className="text-base md:text-base font-bold text-black mb-4 md:mb-4">獲取最新消息和平台資訊</p>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-sm px-4 py-3 md:py-2"
                  onClick={() => window.open('https://nolimittutor.com', '_blank')}
                >
                  前往官網
                  <ExternalLink className="ml-2 w-4 h-4 md:w-4 md:h-4" />
                </Button>
              </div>

              <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-center">
                <div className="w-16 h-16 md:w-14 md:h-14 bg-green-500 border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MessageSquare className="w-8 h-8 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-lg font-black text-black mb-3 md:mb-3">聯絡我們</h3>
                <p className="text-base md:text-base font-bold text-black mb-4 md:mb-4">有任何問題都歡迎詢問</p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-base md:text-sm px-4 py-3 md:py-2"
                  onClick={() => window.open('mailto:contact@nolimittutor.com', '_blank')}
                >
                  發送郵件
                  <Mail className="ml-2 w-4 h-4 md:w-4 md:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-16 md:py-16 bg-gradient-to-br from-red-100 to-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-12">
            <div className="inline-block bg-white border-4 md:border-4 border-black px-6 md:px-5 py-3 md:py-2 text-xl md:text-lg font-black mb-6 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wide">
              我們的主張
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-black mb-6 md:mb-6">NLT 的核心價值與理念</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12 md:mb-10">
              <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="w-16 h-16 md:w-14 md:h-14 bg-red-500 border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Heart className="w-8 h-8 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-lg font-black text-black mb-4 md:mb-4">以人為本</h3>
                <p className="text-base md:text-base font-bold text-black">教育是人與人之間的連結，我們相信每個人都有學習的權利和教學的熱忱</p>
              </div>

              <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="w-16 h-16 md:w-14 md:h-14 bg-blue-500 border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="w-8 h-8 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-lg font-black text-black mb-4 md:mb-4">民主參與</h3>
                <p className="text-base md:text-base font-bold text-black">平台規則由師生共同制定，讓每個使用者都有發言權和決定權</p>
              </div>

              <div className="bg-white border-4 md:border-4 border-black p-6 md:p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="w-16 h-16 md:w-14 md:h-14 bg-green-500 border-4 border-black mx-auto mb-4 md:mb-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Shield className="w-8 h-8 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-lg font-black text-black mb-4 md:mb-4">公平正義</h3>
                <p className="text-base md:text-base font-bold text-black">拒絕剝削，確保每個人都能在公平的環境中學習和工作</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-300 to-amber-300 border-4 md:border-5 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 md:p-6 text-center">
              <h3 className="text-2xl md:text-2xl font-black text-black mb-6 md:mb-5 uppercase">我們的承諾</h3>
              <div className="bg-white border-4 border-black p-6 md:p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl md:text-lg font-black text-black leading-relaxed">
                  「我們承諾永遠不會背叛師生的信任，NLT 將始終站在教育工作者和學習者這一邊，
                  為創造一個更公平、更開放的教育環境而努力。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-10 border-t-4 border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6 md:mb-5">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-orange-500 border-3 border-white flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mr-4 md:mr-3">
                <span className="text-xl md:text-lg font-black text-black">N</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-lg font-black text-white uppercase tracking-tight">No Limit Tutor</span>
                <span className="text-lg md:text-base text-amber-400 font-black">無限家教</span>
              </div>
            </div>
            
            <p className="text-lg md:text-base font-bold mb-6 md:mb-5">
              台灣首個民主、群眾導向的一對一線上家教平台
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 mb-8 md:mb-6">
              <div>
                <h4 className="text-lg md:text-base font-black mb-3 md:mb-3 text-amber-400">聯絡資訊</h4>
                <p className="text-base md:text-sm font-bold">Email: contact@nolimittutor.com</p>
              </div>
              <div>
                <h4 className="text-lg md:text-base font-black mb-3 md:mb-3 text-amber-400">追蹤我們</h4>
                <p className="text-base md:text-sm font-bold">官網即將上線</p>
              </div>
              <div>
                <h4 className="text-lg md:text-base font-black mb-3 md:mb-3 text-amber-400">服務時間</h4>
                <p className="text-base md:text-sm font-bold">平台開發中</p>
              </div>
            </div>
            
            <div className="border-t-3 border-white pt-6 md:pt-5">
              <p className="text-base md:text-sm font-bold">
                © 2024 No Limit Tutor. 保留所有權利。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
